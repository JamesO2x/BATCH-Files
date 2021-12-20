@echo off

rem This script will backup a file to a backups folder, and give it a date stamp.
rem Particularly useful for MFA files, which have a really wonky backup system.

rem Setup File to backup. Leave dest=backups\ to backup to a relative folder right next to your file. Or put in a destination of your choosing.
@REM INIT VARIABLES
SET file=image.png
SET dest=backups\
SET type=F
SET minutes=30
SET /a time=minutes * 60

echo Source File: %file%
echo Destination: %dest%
echo Timeout: %minutes% minutes (%time% ms)
echo (F)ile or (D)ir: %type%

rem Tokenize the file string, and get elements 1 & 2 (filename, extension)
for /F "tokens=1,2 delims=." %%a in ("%file%") do (
   rem Declare variables based on results
   set name=%%a
   set ext=%%b
)
echo.


rem Thanks: https://stackoverflow.com/questions/21033801/checking-if-a-folder-exists-using-a-bat-file
rem Create the folder if it doesn't exist.
if exist %dest% (
  echo ">>> "backups" folder Already Exists. "
) else (
  echo ">>> "backups" folder does NOT exist. "
  mkdir backups
  echo ">>> "backups" folder created... "
)
echo.
echo ================================================================
echo.


:copy
rem Grab %fullstamp% date variable from date.bat
if exist "c:\date.bat" (
  call "c:\date.bat"
) else (
  @rem If file not found in c:\ attempt to load it relatively.
  call "date.bat"
)
set last="backups\%name%_(%fullstamp%).%ext%"

rem Create first backup, if it doesn't exist.
if exist %last% (
  echo ">>> File Already Exists... "
  echo ================================================================
) else (
  echo ">>> File does NOT exist. "
  @rem flags: https://stackoverflow.com/a/986505
  echo %type%|xcopy %file% %last%
  echo ================================================================
)
echo.


:check
rem compare two files, see if they are different or same.
fc /b "%file%" %last% > nul
if errorlevel 1 (
    echo ">>> Files are different! "
    GOTO:copy
) else (
    echo ">>> Files are same. Checking again in %minutes% minutes... "
    timeout /t %time% /nobreak
    echo ================================================================
    GOTO:check
)
PAUSE

GOTO:check
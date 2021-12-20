@echo off
:clock
call date.bat
echo The current time is...
echo.

echo    %HH% : %Min% (%Sec% seconds)
echo.

rem PAUSE
timeout /t 1 /nobreak
@REM CLS clears the screen
CLS
GOTO:clock

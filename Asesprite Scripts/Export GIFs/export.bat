@ECHO OFF
@REM Set location to relative, or absolute. Comment-out the line you wont be using:
@REM Thanks: https://stackoverflow.com/questions/17063947/get-current-batchfile-directory
SET path=%~dp0
rem SET path=C:\

@REM Set some basic variables first
rem C:\Program Files (x86)\Steam\steamapps\common\Aseprite\aseprite.exe
SET input=animation_sample.ase
SET output1=tags_x1\sprite-{tag}_x1.gif
SET output2=tags_x2\sprite-{tag}_x2.gif


@REM Start the process.
ECHO Processing ASE files...
ECHO.
ECHO ==============================

@REM Do the Export command
aseprite -b "%path%%input%" --scale 1 --save-as "%path%%output1%"
aseprite -b "%path%%input%" --scale 2 --save-as "%path%%output2%"

ECHO Processing Complete!
ECHO.
ECHO ==============================

PAUSE
EXIT

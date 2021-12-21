@ECHO OFF
@REM Drag-N-Drop, Prompt Window
@REM This is a sample BATCH that sets up a basic "Drag N Drop" prompt file interface, which lets you run your script universally on any file/folder.

echo This BATCH script simply ECHOES whatever file or folder you drop into it.
echo (this is just a sample)
echo.
echo code by JamesO2, 2021
echo https://ko-fi.com/jamesorthii
echo.
echo Drag-n-Drop a file into the window, or type it's path below.
echo ============================================================
echo.

:START
	@REM Prompt for input to pass to GifSicle
	set /p input=">>> File/Folder for input:"
	echo.

	@REM If you want to replace characters, add them after the = sign
	@REM This line Removes any " quotes around your input.
	set input=%input:"=%
	
	@REM This line removes a .gif extension, if it has one. Only as a sample here.
	set output=%input:.gif=%

	echo Input:  %input%
	echo Output: %output%-optimized.gif

	echo.
	echo Process Complete. Choose next File/Folder...
    echo ============================================================
	echo.
	
GOTO START

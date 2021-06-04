:: TEST, GIF to GIF conversion.
:: My hopes are that GIFsicle will convert an already animated GIF to a more compressed version.
:: EDIT: Yes, it apparently does do just that.
:: Use echo. to echo a blank line

@ECHO OFF

:: Resources: https://www.lcdf.org/gifsicle/

echo This BATCH script optimizes a GIF animation.
echo (requires "gifsicle" to be installed)
echo.
echo code by JamesO2, 2021
echo https://ko-fi.com/jamesorthii
echo.
echo Drag-n-Drop a file into the window, or type it's path below.
echo ============================================================
echo.

:START
	:: Prompt for input to pass to GifSicle
	set /p input=GIF file for input:
	echo.

	:: Removes " quotes and .gif in a new variable
	:: If you want to replace characters, add them after the = sign
	set input=%input:"=%
	set output=%input:.gif=%

	echo Input:  %input%
	echo Output: %output%-optimized.gif

	:: Run GifSicle
	:: O3 switch is a better optimize option. adding colors 256 further reduces file size.
	:: gifsicle --optimize "%input%" > "%output%_OUTPUT.gif" --colors 256
	gifsicle -O3 "%input%" -o "%output%-optimized.gif" --colors 256

	echo ---
	echo.
	
GOTO START

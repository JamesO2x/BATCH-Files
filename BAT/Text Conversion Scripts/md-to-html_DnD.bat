@ECHO OFF
@REM Testing PanDoc document conversion.
@REM This script uses the command-line program PanDoc to convert MarkDown documents to HTML documents

echo This BATCH script converts a MarkDown file to an HTML Document using PanDoc
echo Downlaod PanDoc Here: https://pandoc.org/
echo.
echo code by JamesO2, 2021
echo https://ko-fi.com/jamesorthii
echo.
echo Drag-n-Drop a file into the window, or type it's path below.
echo ============================================================
echo.

@REM ============================================================
:program_loop
    @REM Prompt for File input
    set /p input=">>> File/Folder for input: "
    echo.

    @REM INIT VARS
    @REM This line Removes any " quotes around your input.
    set input=%input:"=%

    @REM These line removes the extension, if it has one.
    set output=%input:.md=%
    set output=%output:.markdown=%

    @REM ECHO the VARS, just to verify
    echo Input:  %input%
    echo Output: %output%.html
    echo.

    @REM Make a Choice
    :choice
        echo Use Stand-Alone Mode?
        echo - [y] Stand-Alone creates an all-in-one HTML file with some basic CSS.
        echo - [n] Otherwise, default Fragment mode generates a basic HTML with no STYLE, HEAD, or BODY tags.
        echo (Pressing {ENTER} also sets Stand-Alone mode.)
        echo.
        set /p s=">>> Use Stand-alone HTML mode? [y/n]: "

        if ErrorLevel 1 echo You pressed {Enter}  (Stand-Alone Mode). & echo. & goto :standalone
        if /I "%s%" EQU "Y" echo You chose [YES]  (Stand-Alone Mode). & echo. & goto :standalone
        if /I "%s%" EQU "N" echo You chose [NO]  (Fragment Mode). & echo. & goto :fragment
        echo.
    goto :choice
    echo.

    @REM Choice Y
    :standalone
        pandoc -s --wrap=none "%input%" -o "%output%.html"
    GOTO complete

    @REM Choice N
    :fragment
        pandoc --wrap=none "%input%" -o "%output%.html"
    GOTO complete

    @REM End the Process, and loop back to the top.
    :complete
        echo.
        echo Process Complete. Choose next File/Folder...
        echo ============================================================
        echo.
GOTO program_loop

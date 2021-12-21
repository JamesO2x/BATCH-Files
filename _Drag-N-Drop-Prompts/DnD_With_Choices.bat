@ECHO OFF
@REM Drag-N-Drop, Prompt Window -- With Choices
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
        echo Make a Choice?
        echo - [y] Yes, but I don't know what I'm agreeing to!
        echo - [n] No, I refuse to make a choice! ... wait, this IS a choice isn't it?
        echo (Pressing {ENTER} also selects YES)
        echo.
        set /p answer=">>> Do You Accept? [y/n]: "

        if ErrorLevel 1 echo You pressed {Enter}. & echo. & goto :yes
        if /I "%answer%" EQU "Y" echo You chose [YES]. & echo. & goto :yes
        if /I "%answer%" EQU "N" echo You chose [NO]. & echo. & goto :no
        echo.
    goto :choice
    echo.

    @REM Choice Y
    :yes
        echo (do some stuff here)
    GOTO complete

    @REM Choice N
    :no
        (don't do some stuff here)
    GOTO complete

    @REM End the Process, and loop back to the top.
    :complete
        echo.
        echo Process Complete. Choose next File/Folder...
        echo ============================================================
        echo.
GOTO program_loop

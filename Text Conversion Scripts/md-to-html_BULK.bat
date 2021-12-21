@ECHO OFF
@REM Testing PanDoc document conversion.
@REM This script uses the command-line program PanDoc to convert MarkDown documents to HTML documents

@REM Special Thanks: 
@REM windows - Iterate all files in a directory using a 'for' loop - Stack Overflow
@REM https://stackoverflow.com/questions/138497/iterate-all-files-in-a-directory-using-a-for-loop

@REM Set wich folder to check for files, and which one to ouptut.
SET input=C:\temp\panDocTest\
SET output=C:\temp\panDocTest\html\

@REM Empty lines, provides some visual spacing.
@ECHO.
@ECHO -----------------------------------------
@ECHO.

@REM INFO: https://ss64.com/nt/delayedexpansion.html
setlocal enabledelayedexpansion

for %%f in (%input%*) do (
    set /p val=<%%f
    echo fullname : %%f
    echo name     : %%~nf
    @REM echo contents : !val!
    echo output   : %output%%%~nf.md
    echo ----------

    @REM This below command performs the conversion.
    @REM --warap=none turns off word wrapping.
    @REM PanDoc Documentation: https://pandoc.org/demos.html
    pandoc -s --wrap=none "%%f" -o "%output%%%~nf.html"


    @ECHO.
)


PAUSE
EXIT
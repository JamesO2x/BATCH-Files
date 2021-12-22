@ECHO off
REM Compile doc info:
REM https://www.autohotkey.com/boards/viewtopic.php?t=62346

REM Command Line: The compiler can be run from the command line with the following parameters:

REM Ahk2Exe.exe /in MyScript.ahk [/out MyScript.exe] [/icon MyIcon.ico] [/bin AutoHotkeySC.bin] [/mpress 0or1]

REM For example:
REM Ahk2Exe.exe /in "MyScript.ahk" /icon "MyIcon.ico"

REM Usage:
REM Parameters containing spaces should be enclosed in double quotes.
REM If the "out" file is omitted, the EXE will have the same base filename as the script itself.

REM Set Path Variables
set ahk2exe="C:\Program Files\AutoHotkey\Compiler\Ahk2Exe.exe"
set path="J:\GitHub\Me-Private\AHK-main-program\"
set in="main_program_2"
set out="Main_Program_JamesO2"
set ico="data\yearbook.ico"

echo AHK Script Compiler
echo -------------------
echo ahk2exe = %ahk2exe%
echo path    = %path%
echo input   = %in%
echo output  = %out%
echo ico     = %ico%
echo.

cd %path%
echo cd %path%
%ahk2exe% /in %in%.ahk /icon %ico% /out %out%.exe
echo ahk2exe /in %in%.ahk /icon %ico% /out %out%.exe 

echo.
echo Success!

PAUSE
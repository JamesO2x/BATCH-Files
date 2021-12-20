@echo off

echo We can share variables between any batch files we call.
echo This file is share_var.bat ...

echo.
pause
echo.

echo Inside of share_var.bat, let's set a variable: set x=7
set x=7
echo.
call get_var.bat

echo.
pause
echo.

echo Now we're back in share_var.bat, let's set x=42
set x=42
echo.
call get_var.bat

pause
EXIT
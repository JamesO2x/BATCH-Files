@echo off
rem Credit to: https://stackoverflow.com/a/23476347
rem for the the awesome date/time script!
rem Place this file in C:\ and call it from anywhere.

for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"

set "dateStamp=%YYYY%-%MM%-%DD%"
set "timeStamp=%HH%-%Min%-%Sec%"
set "dateTimeStamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%"

rem echo datestamp: "%datestamp%"
rem echo timestamp: "%timestamp%"
rem echo fullstamp: "%fullstamp%"

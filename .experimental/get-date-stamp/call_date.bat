@echo off
call date.bat

echo Can we get a DateStamp from date.bat variables?
echo.
echo datestamp: "%dateStamp%"
echo timestamp: "%timeStamp%"
echo fullstamp: "%dateTimeStamp%"
echo.
echo Success! Yes we can. All we have to do is call datestamp.bat, and we have access to it's variables.
echo.
echo ~END OF SCRIPT~
pause
EXIT
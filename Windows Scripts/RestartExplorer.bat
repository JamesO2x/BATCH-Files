@REM Simply kills Explorer.exe and restarts it.
@REM This can help if Windows is beign buggy.
taskkill /im explorer.exe /f
start "" C:\Windows\explorer.exe
exit
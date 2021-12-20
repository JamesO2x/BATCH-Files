@ECHO OFF
@REM A batch file that opens FreeCommander XE, with multiple tabs.
@REM FileName: FreeCommanderTest.bat

@REM /T opens new TAB
@REM /L speceifies that it opens on the LEFT side.
@REM /R specifices that it opens on the RIGHT side.

@REM Place a TIMEOUT between opening each tab, otherwise FreeCommander may open multiple windows instead of tabs.

SET fc="C:\Program Files (x86)\FreeCommander XE\FreeCommander.exe"
START "" %fc% /T /L="Z:\CLOUD_JMO\Dropbox\[Art Projects]\[PIXEL ART]"
timeout 5
START "" %fc% /T /R="Z:\Library_B\"

@REM Special thanks to this forum topic for the solution to this problem:
@REM https://freecommander.com/forum/viewtopic.php?t=4393
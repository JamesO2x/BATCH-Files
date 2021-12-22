REM This backup grabs the RANDSOUND folder and all of its subfolders.
REM "C:\Program Files\WinRar\rar.exe"

@REM What these commands do:
@REM  a    = adds files to archive
@REM -r    = recurses subfolders (adds all subfolders
@REM -ep1  = prevents leaving a trail of empty folders before the destination
@REM PAUSE = prevents the command application from closing after done

rar a -r -ep1 "C:\RAR\test-backup.rar" -ag" (YYYY-MM-dd)" "C:\RandSound\"

EXIT

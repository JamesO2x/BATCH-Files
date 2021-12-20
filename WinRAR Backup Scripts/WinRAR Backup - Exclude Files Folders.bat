REM This backup grabs ONLY mfa files, in the ISOLATION folder, but does NOT backup all of its subfolders.
REM "C:\Program Files\WinRar\rar.exe"

@REM What these commands do:
@REM  a    = adds files to archive
@REM -r    = recurses subfolders (adds all subfolders
@REM -ep1  = prevents leaving a trail of empty folders before the destination
@REM PAUSE = prevents the command application from closing after done

rar a -ep1 "C:\Tools\RARs\TOSSUP-mfa-only.rar" -ag" (YYYY-MM-dd)" "C:\Users\James\Dropbox\TU_2018\[4] Game Assets\Source Code\ISOLATION\*.mfa"
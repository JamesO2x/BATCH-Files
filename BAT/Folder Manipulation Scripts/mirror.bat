@REM mirrors the SOURCE directory into the DESTINATION directory.
@REM the /mir switch deletes files that don't match in the new destination, thus keeping them "mirrored"

robocopy "C:\source" "Z:\destination" /mir

EXIT

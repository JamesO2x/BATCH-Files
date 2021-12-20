@ECHO OFF
@REM This is a neat trick to remove empty folders, using a prompt.
@REM Source: https://stackoverflow.com/questions/7831286/how-to-delete-empty-folders-using-windows-command-prompt

@ECHO Remove empty folders from a directory.
SET /P folder1=Directory Path: 
ROBOCOPY %folder1% %folder1% /S /MOVE

PAUSE
EXIT

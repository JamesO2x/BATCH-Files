@ECHO OFF
@REM This BATCH will print out a TEXT file that lists EVERY file and Folder in the directory it sits in.

@REM "| findstr /v /c:\.git\ >" excludes the git folder if one exists
@REM Source: https://stackoverflow.com/questions/15568541/batch-script-to-list-folders-but-exclude-specific-folders

echo This BATCH will print out a TEXT file that lists EVERY file and Folder in the directory it sits in, and saves 3 text files:
echo - _file-tree.txt (shows files and directories)
echo - _dir-tree.txt (shows only directories, no files)
echo - _file-list.txt (flat-lists all files/dirs full PATH)
echo.
echo code by JamesO2, 2021
echo https://ko-fi.com/jamesorthii
echo.

REM Creates a text file with the Folder Tree of this directory:
REM Thanks: https://www.digitalcitizen.life/how-export-directory-tree-folder-windows/
tree /a /f | findstr /v /c:\.git\ > _file-tree.txt

REM Only Folders, no Files:
tree /a > _dir-tree.txt

@REM Create a flat-list of fullpaths to all files/dirs
dir /s/b/o:gn | findstr /v /c:\.git\ > _file-list.txt

@ECHO OFF
@REM Drag-N-Drop, Prompt Window
@REM Select a Directory, and it will print out a TEXT file that lists EVERY file and Folder in that directory.

@REM "| findstr /v /c:\.git\ >" excludes the git folder if one exists
@REM Findstr /v returns all lines, that do not contain the string
@REM Source: https://stackoverflow.com/questions/15568541/batch-script-to-list-folders-but-exclude-specific-folders

echo This BATCH file lists all "Files and Sub-Directories" of any folder you drop into it, and saves 3 text files:
echo - _file-tree.txt (shows files and directories)
echo - _dir-tree.txt (shows only directories, no files)
echo - _file-list.txt (flat-lists all files/dirs full PATH)
echo.
echo code by JamesO2, 2021
echo https://ko-fi.com/jamesorthii
echo.
echo Drag-n-Drop a Folder into the window, or type it's path below.
echo ============================================================
echo.

:START

	@REM Prompt for input to pass to GifSicle
	set /p input=">>> Folder for input:"
	echo.

	@REM Navigate to the input directory
	cd %input%

	echo Input:  %input%
	echo Output1: _file-tree.txt
	echo Output2: _dir-tree.txt
	echo Output3: _file-list.txt

	REM Creates a text file with the Folder Tree of this directory:
	REM Thanks: https://www.digitalcitizen.life/how-export-directory-tree-folder-windows/
	tree /a /f | findstr /v /c:\.git\ > _file-tree.txt

	REM Only Folders, no Files:
	tree /a > _dir-tree.txt

	@REM SAVE the file list to a FILE
	dir /s/b/o:gn | findstr /v /c:\.git\ > _file-list.txt
	
	echo.
	echo Process Complete. Choose next Folder...
    echo ============================================================
	echo.

GOTO START
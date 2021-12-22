@ECHO OFF
REM Thanks: https://www.digitalcitizen.life/how-export-directory-tree-folder-windows/

REM Creates a text file with the Folder Tree of this directory:
tree /a /f > dirs-files.txt

REM Only Folders, no Files:
tree /a > dirs-only.txt
@ECHO OFF
rem Thanks: https://www.digitalcitizen.life/how-export-directory-tree-folder-windows/

rem Creates a text file with the Folder Tree of this directory:
tree /a /f > dirs-files.txt

rem Only Folders, no Files:
tree /a > dirs-only.txt
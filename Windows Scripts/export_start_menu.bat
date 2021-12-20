cd C:\windows\system32

REM Exports the Windows Start Menu as an XML file, which can be imported later.
REM NOTE: You must use an elevated PowerShell window for this, running from the C:\windows\system32 directory

export-startlayout –path C:\start_layout.xml


REM To import this file, use a command like below:
REM Import-StartLayout –LayoutPath C:\start_layout.xml –MountPath %systemdrive%


EXIT

REM // Source: https://www.thewindowsclub.com/import-export-fix-start-menu-layout-windows-10
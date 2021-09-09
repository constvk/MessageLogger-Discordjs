@echo off
color 4
title MessageLogger Script :p
:top
echo.
echo instalando todos os requisitos...
echo.
pause nul
cls
color 5
    call npm init
    call npm install discord.js@11.6.4
    call npm install fs
pause
cls
exit

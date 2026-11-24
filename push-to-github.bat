@echo off
setlocal
title Push Praise Furniture to GitHub

set "GIT_EXE=C:\Users\Acer\.gemini\antigravity\scratch\mingit\cmd\git.exe"
set "REPO_URL=https://github.com/praizstudio74-coder/Praise-furniture.git"

echo ========================================================
echo        PRAISE FURNITURE - PUSH TO GITHUB
echo ========================================================
echo.
echo Target Repository: %REPO_URL%
echo.

cd /d "C:\Users\Acer\.gemini\antigravity\scratch\praise-furniture"

echo [*] Staging all files...
"%GIT_EXE%" add -A

echo [*] Committing changes...
"%GIT_EXE%" commit -m "Initial commit: Praise Furniture luxury showroom website" 2>nul

echo [*] Setting branch to main...
"%GIT_EXE%" branch -M main

echo [*] Setting remote origin...
"%GIT_EXE%" remote set-url origin "%REPO_URL%" 2>nul || "%GIT_EXE%" remote add origin "%REPO_URL%"

echo [*] Pushing to GitHub (origin main)...
echo If a GitHub login window or prompt appears, please sign in.
echo.
"%GIT_EXE%" push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo  SUCCESS! Website is now live on GitHub:
    echo  https://github.com/praizstudio74-coder/Praise-furniture
    echo ========================================================
) else (
    echo.
    echo [!] Push encountered an issue. If you use a GitHub Personal Access Token,
    echo     you can run:
    echo     git push https://YOUR_TOKEN@github.com/praizstudio74-coder/Praise-furniture.git main
)

echo.
pause

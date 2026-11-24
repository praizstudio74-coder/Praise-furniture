@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo        PRAISE FURNITURE - PUSH TO GITHUB
echo ========================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Git is not currently installed or not in your PATH.
    echo [*] Attempting to install Git via Windows Package Manager (winget)...
    winget install --id Git.Git -e --accept-package-agreements --accept-source-agreements
    if %errorlevel% neq 0 (
        echo [X] Could not auto-install Git. Please install Git from https://git-scm.com/download/win and run this script again.
        pause
        exit /b 1
    )
    echo [*] Git installed successfully. Please restart your terminal/IDE if prompted.
)

echo [*] Initializing Git repository...
if not exist ".git" (
    git init
)

echo [*] Adding website files...
git add .

echo [*] Creating commit...
git commit -m "Initial commit: Praise Furniture luxury showroom website (4 pages, Slider Revolution, E-Commerce, Dark Luxury theme)"

echo.
echo ========================================================
echo  Step 2: Enter your GitHub Repository URL
echo ========================================================
echo  Create a new repository at: https://github.com/new
echo  (Name it: praise-furniture, Public or Private, DO NOT initialize with README)
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/USERNAME/praise-furniture.git): "

if "%REPO_URL%"=="" (
    echo [!] No repository URL provided. Aborting push.
    pause
    exit /b 1
)

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo [*] Pushing to GitHub (%REPO_URL%)...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo  SUCCESS! Website pushed to GitHub successfully!
    echo ========================================================
) else (
    echo.
    echo [!] Push failed. Check your repository URL and GitHub authentication.
)

echo.
pause

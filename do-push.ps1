$ErrorActionPreference = "Continue"
Set-Location "C:\Users\Acer\.gemini\antigravity\scratch\praise-furniture"

Write-Host "Checking for Git..."
$gitCmd = Get-Command git -ErrorAction SilentlyContinue

if (-not $gitCmd) {
    # Check common Git install paths on Windows
    $commonPaths = @(
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files (x86)\Git\cmd\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
    )
    foreach ($p in $commonPaths) {
        if (Test-Path $p) {
            $gitCmd = $p
            break
        }
    }
}

if (-not $gitCmd) {
    Write-Host "Git not found in standard paths. Attempting to install via winget..."
    winget install --id Git.Git -e --silent --accept-package-agreements --accept-source-agreements
    $gitCmd = "C:\Program Files\Git\cmd\git.exe"
}

$git = if ($gitCmd -is [string]) { $gitCmd } else { $gitCmd.Source }
Write-Host "Using Git binary: $git"

# Initialize repo if needed
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..."
    & $git init
}

# Configure default branch and remote
& $git branch -M main

# Configure local git user if not configured
$userName = (& $git config user.name)
if (-not $userName) {
    & $git config user.name "praizstudio74-coder"
    & $git config user.email "praizstudio74@gmail.com"
}

# Add all files
Write-Host "Adding files..."
& $git add -A

# Commit
Write-Host "Creating initial commit..."
& $git commit -m "Initial commit: Praise Furniture luxury showroom website"

# Remote setup
Write-Host "Configuring remote origin..."
& $git remote remove origin 2>$null
& $git remote add origin "https://github.com/praizstudio74-coder/Praise-furniture.git"

# Push
Write-Host "Pushing to GitHub..."
& $git push -u origin main

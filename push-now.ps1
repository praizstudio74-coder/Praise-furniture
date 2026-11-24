$gitExe = "C:\Users\Acer\.gemini\antigravity\scratch\mingit\cmd\git.exe"
Set-Location "C:\Users\Acer\.gemini\antigravity\scratch\praise-furniture"

Write-Host "Configuring remote..."
# Check if origin already exists
$remotes = & $gitExe remote
if ($remotes -contains "origin") {
    & $gitExe remote set-url origin "https://github.com/praizstudio74-coder/Praise-furniture.git"
} else {
    & $gitExe remote add origin "https://github.com/praizstudio74-coder/Praise-furniture.git"
}

Write-Host "Remote URL:"
& $gitExe remote -v

Write-Host "Pushing to GitHub..."
& $gitExe push -u origin main 2>&1

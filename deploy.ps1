Write-Host "🚀 KARIMOVACODER — GitHub-ga yuklash boshlandi..." -ForegroundColor Cyan

Set-Location -Path $PSScriptRoot

git status

Write-Host "📦 O'zgarishlar GitHub-ga yuborilmoqda (git push)..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ MUVAFFAQIYATLI YUKLANDI!" -ForegroundColor Green
    Write-Host "🌐 Repozitoriya: https://github.com/karimovanigina0818-byte/portfolio" -ForegroundColor Cyan
    Write-Host "📄 GitHub Pages orqali jonli sayt qilish uchun:" -ForegroundColor White
    Write-Host "   1. Repozitoriya sozlamalariga kiring (Settings -> Pages)" -ForegroundColor White
    Write-Host "   2. Branch: 'main' / 'root' ni tanlab 'Save' tugmasini bosing" -ForegroundColor White
    Write-Host "   3. Manzil: https://karimovanigina0818-byte.github.io/portfolio/" -ForegroundColor Green
} else {
    Write-Host "⚠️ Agar repozitoriya hali ochilmagan bo'lsa:" -ForegroundColor Yellow
    Write-Host "   Iltimos, avval https://github.com/new manzilida 'portfolio' nomli yangi repozitoriya yarating." -ForegroundColor Yellow
}

Write-Host "Dasturni yopish uchun istalgan tugmani bosing..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

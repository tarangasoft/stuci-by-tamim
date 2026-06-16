(Get-Content 'C:\Users\mythz\Desktop\stuci\app\globals.css') | Select-String -Pattern '@media' | ForEach-Object { Write-Host (\"{0,5}  {1}\" -f $_.LineNumber, $_.Line) }

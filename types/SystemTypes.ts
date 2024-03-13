export enum SystemCommand {
    Windows_NT = "powershell 'Get-Process | Sort-Object CPU -Descending | Select-Object -Property Name, CPU, WorkingSet -First 1 | ForEach-Object { $_.Name + ' ' + $_.CPU + ' ' + $_.WorkingSet }'",
    Linux = "ps -A -o %cpu,%mem,comm | sort -nr | head -n 1",
    Darwin = "ps -A -o %cpu,%mem,comm | sort -nr | head -n 1"
}

export type System = keyof typeof SystemCommand;
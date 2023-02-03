function main {
    # 定义功能
    $funcs = "Add_a_new_mdFile", "Test_local", "Build_and_deploy", "Push_to_git_and_deploy", "Git_submodule_upgrade"

    for ($x = 0; $x -lt $funcs.Length; $x = $x + 1) {
        Write-Output "$($x) $($funcs[$x])"
    }
    $inpt = Read-Host "输入所需功能代号"
    # 执行代号对应的功能
    Invoke-Expression $($funcs[$inpt])
    Set-Location $PSScriptRoot
    Write-Output "Finish!"
}

function Add_a_new_mdFile {
    $files = Get-ChildItem -Path .\content\posts -Directory -Name -Recurse
    Write-Output $files
    $name = Read-Host "输入创建文件名"
    $result = "posts/$($name)"
    hugo new $result
}
function Test_local {
    hugo serve --disableFastRender -D
}
function Build_and_deploy {
    netlify deploy --build --prod
}
function Push_to_git_and_deploy {
    git add .
    git commit -m "网站更新 From 自动脚本"
    git push
}
function Git_submodule_upgrade {
    git submodule update --remote --merge --progress
}

main

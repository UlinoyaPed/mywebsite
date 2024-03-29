﻿# 定义主函数
function main {
    # 定义功能
    $funcs = "Add_a_new_mdFile", "Test_local", "Build", "Git_commit_push_Auto", "Git_commit_push_Manual", "Git_submodule_upgrade"

    for ($x = 0; $x -lt $funcs.Length; $x = $x + 1) {
        Write-Output "$($x) $($funcs[$x])"
    }
    $inpt = Read-Host "输入所需功能代号"
    # 执行代号对应的功能
    Invoke-Expression $($funcs[$inpt])
    Set-Location $PSScriptRoot
}

# 定义其他函数
function Add_a_new_mdFile {
    # 获取所有文件夹名并输出
    $files = Get-ChildItem -Path .\content\posts -Directory -Name -Recurse
    Write-Output $files

    $name = Read-Host "输入创建文件名（相对于 posts 文件夹）"
    hugo new "posts/$($name)"
}
function Test_local {
    hugo serve --disableFastRender -D
}
function Build {
    Remove-Item .\public -Recurse

    hugo --gc --minify -e production
}
function Git_commit_push_Auto {
    git add .
    git commit -m "网站更新 From 自动脚本"
    git push
}
function Git_commit_push_Manual {
    # 定义commit type
    $headertype = "feat", "fix", "docs", "style", "refactor", "test", "chore"
    $headertype_cn = "新功能/新文章", "修改Bug/修改文章", "添加文档", "优化格式", "重写代码/重写文章", "测试功能", "修改构建过程/添加辅助工具"
    # 循环输出
    for ($x = 0; $x -lt $headertype_cn.Length; $x = $x + 1) {
        Write-Output "$($x) $($headertype_cn[$x])"
    }
    $inpttype = Read-Host "选择提交类别（必须）"
    $CommitType = $($headertype[$inpttype])

    $headerscope = "posts", "script", "css", "theme", "picture", "config"
    $headerscope_cn = "文章", "脚本", "CSS", "主题", "图片", "配置"
    # 循环输出
    for ($x = 0; $x -lt $headerscope_cn.Length; $x = $x + 1) {
        Write-Output "$($x) $($headerscope_cn[$x])"
    }
    $inptscope = Read-Host "选择提交影响范围（必须）"
    $CommitScope = $($headerscope[$inptscope])

    $CommitSubject = Read-Host "输入提交信息（非必须）"

    $CommitMessage = "$($CommitType)($($CommitScope)): $($CommitSubject)"
    
    git add .
    git commit -m "$($CommitMessage)"
    git push
}
function Git_submodule_upgrade {
    git submodule update --remote --merge --init
}

# 执行主函数
main

Write-Host "`n`nFinish"
Start-Sleep -Seconds 3
# Hugo|FixIt + Netlify 博客

[![Netlify Status](https://api.netlify.com/api/v1/badges/908b7ce2-2e6d-43a7-bde4-5efd2fb1d168/deploy-status)](https://totapo.netlify.app)
![GitHub repo size](https://img.shields.io/github/repo-size/UlinoyaPed/mywebsite)
![GitHub Repo stars](https://img.shields.io/github/stars/UlinoyaPed/mywebsite)

## **网站快照（实时更新）**$\downarrow$

![网页快照](https://s0.wp.com/mshots/v1/https://totapo.netlify.app?w=&h=)

你可以`Fork`此仓库并搭建自己的`Blog`。

注意：在 Fork 或 Clone 后请修改 config.toml，关闭评论或修改为您自己的服务商。

```diff
    [params.page.comment]
-     enable = true
+     enable = false
      #  Giscus 评论系统设置
      [params.page.comment.giscus]
-       enable = true
-       repo = "UlinoyaPed/mywebsite"
-       repoId = "R_kgDOItLsdQ"
-       category = "Announcements"
-       categoryId = "DIC_kwDOItLsdc4CTqKM"
-       mapping = "pathname"
+       enable = false
+       repo = "{{YOUR_REPO}}"
+       repoId = "{{YOUR_REPO_ID}}"
+       category = "{{YOUR_CATEGORY}}"
+       categoryId = "{{YOUR_CATEGORY_ID}}"
+       mapping = ""
        reactionsEnabled = "1"
        emitMetadata = "0"
        inputPosition = "top" # ["top", "bottom"]
        lightTheme = "light"
        darkTheme = "dark"
        lazyLoad = true
```

## 如何搭建你自己的博客

### 安装

执行

```bash
git clone https://github.com/UlinoyaPed/mywebsite.git --recurse-submodules
```

将存储库克隆到本地

修改`config.toml`，具体教程见[FixIt 主题文档](https://fixit.lruihao.cn/zh-cn/)

`content/posts`文件夹存放所有文章，请将它们全部删除并撰写您自己的文章

### 快速脚本

我编写了一个快速脚本（仅适用 Windows[^1]）`start.ps1`

[^1]: 未来不会有 Linux 版

目前有以下功能，大家可以自行探索

```
0 Add_a_new_mdFile
1 Test_local
2 Build
3 Push_to_git_Auto
4 Push_to_git_Manual
5 Git_submodule_upgrade
```

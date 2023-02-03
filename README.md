# Hugo|FixIt + Netlify 博客

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://totapo.netlify.app)![GitHub repo size](https://img.shields.io/github/repo-size/UlinoyaPed/mywebsite)![GitHub Repo stars](https://img.shields.io/github/stars/UlinoyaPed/mywebsite)

## **网站快照（实时更新）**$\downarrow$

![网页快照](https://s0.wp.com/mshots/v1/https://totapo.netlify.app?w=&h=)

你可以`Fork`此仓库并搭建自己的`Blog`。

<p style="color: red">注意：在Fork或Clone后请修改config.toml，关闭评论或修改为您自己的服务商。</p>

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

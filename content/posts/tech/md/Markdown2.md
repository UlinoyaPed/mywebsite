---
title: "Markdown2-Html标签"
subtitle: ""
date: 2023-01-16T18:09:55+08:00
lastmod: 2023-01-16T18:09:55+08:00
author: UlinoyaPed
description: ""
categories:
  - doc
tags:
  - md
draft: false
ruby: true # 上标注释扩展语法
fraction: true # 分数扩展语法
fontawesome: true # Font Awesome 扩展语法
twemoji: false # 如果设为 true, 这篇文章会使用 twemoji
# password: # 加密页面内容的密码
# message: "" # 加密提示信息
---

# Markdown2-Html 标签

## 简介

`Markdown`文件会根据`CSS`文件生成基于`Html`的预览，所以`Markdown`支持部分`Html`标签。

前文中已经使用了一些`Html`标签，如红色字体和图片圆角。

## 更改文字颜色和大小

### `<font>`标签

可以使用

```html
<font size="5px" color="red">红色，5px大小</font>
```

<font size="5px" color ="red">红色，5px 大小</font>

{{< admonition warning "警告" true >}}
`<font>`标签在将来会被启用，请尽快改为`CSS Style`形式！
{{< /admonition>}}

### CSS Style

使用`<p style="">`标签来为文字添加颜色、大小、背景等元素

```html
<p
  style="
    display: inline;
    color: red;
    background-color: #eee;
    font-size: 15px;
    border-radius: 5px;
    padding: 2px;
  "
>
  效果
</p>
```

<p
  style="
    display: inline;
    color: red;
    background-color: #eee;
    font-size: 15px;
    border-radius: 5px;
    padding: 2px;
  "
>
  CSS效果
</p>

`Markdown默认效果`

下面逐个解析：

1. `display: inline`控制行内效果（`<p>`标签默认占一整行），添加后可以连续添加文字。
1. `color: red`控制颜色为红色，也可以使用`16进制`或`RGB`颜色等方式表示。
1. `background-color: #eee`控制背景颜色为灰色（`#eee`同`#eeeeee`；`#1af`同`#11aaff`）。
1. `font-size: 15px`控制字体大小（与`<font>`标签大小可能有出入），单位还有`cm`、`in`、`vh`等。
1. `border-radius: 5px`控制圆角边框。
1. `padding: 2px`控制内边距。

### `<img>`标签

`<img>`标签可以添加图片

```html
<img src="/captain.png" alt="图片描述" style="zoom: 20%;border-radius: 10%" />
<img
  src="/captain.png"
  alt="图片描述"
  width="100px"
  style="border-radius: 10%"
/>
```

**效果**

<img src="/captain.png" alt="图片描述" style="zoom: 20%;border-radius: 10%" />
<img src="/captain.png" alt="图片描述" width="100px" style="border-radius: 10%" />

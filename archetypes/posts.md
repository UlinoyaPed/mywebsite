---
title: "{{ replace .Name "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
lastmod: {{ .Date }}
author: "UlinoyaPed"
description: ""
categories: 
  - 分类1
  - 分类2
tags: 
  - 标签1
  - 标签2
draft: true # 是否为草稿
ruby: true # 上标注释扩展语法
fraction: true # 分数扩展语法
fontawesome: true # Font Awesome 扩展语法
twemoji: false # 如果设为 true, 这篇文章会使用 twemoji
# password: # 加密页面内容的密码
# message: "" # 加密提示信息
---

# {{ replace .Name "-" " " | title }}

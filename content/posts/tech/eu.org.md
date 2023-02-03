---
title: "eu.org域名注册"
subtitle: ""
date: 2023-01-31T18:29:01+08:00
lastmod: 2023-01-31T18:29:01+08:00
author: "UlinoyaPed"
description: ""
categories:
  - doc
tags:
draft: false
ruby: true # 上标注释扩展语法
fraction: true # 分数扩展语法
fontawesome: true # Font Awesome 扩展语法
twemoji: false # 如果设为 true, 这篇文章会使用 twemoji
# password: # 加密页面内容的密码
# message: "" # 加密提示信息
---

# eu.org 域名注册

## 官网申请域名

### 注册

{{< link content="nic.eu.org 官网" href="https://nic.eu.org" card=true >}}

[登录/注册](https://nic.eu.org/arf/en/login/)

点击`Register`跳转到注册页面

需要填写身份信息，如果不想填写真实信息，[美国地址生成](https://www.meiguodizhi.com/) [美国人信息生成](https://www.shenfendaquan.com/)

{{< admonition tip "提示" true >}}
其中电子邮件最好填真实的，方便后续接受消息
{{< /admonition>}}

![2023-02-01_103117_4](https://github.com/UlinoyaPed/PictureBed/raw/main/Blog/2023-02-01_103117_4.png)

### 新建域名

点击`New Domain`创建新域名

![2023-02-01_103544_q](https://github.com/UlinoyaPed/PictureBed/raw/main/Blog/2023-02-01_103544_q.png)

在`domain name`框中填写**完整**域名

格式为`{DomainName}.eu.org`（一定以`eu.org`结尾）

例如$\downarrow$

```
example.eu.org
apple.eu.org
```

下面的`Name servers`填`DNS`服务器

如果你还为配置`DNS`解析，可以随便填一个

![2023-02-01_104455_p](https://github.com/UlinoyaPed/PictureBed/raw/main/Blog/2023-02-01_104455_p.png)

{{< admonition tip "提示" true >}}
`Check for correctness of`最好先选第一个，保证注册请求成功发送，等域名通过后再更改为真实`DNS`服务器
{{< /admonition>}}

`eu.org`的审核非常慢，一般几周到一个月

每个账户的第一个域名几乎`100%`通过

## 配置 DNS 解析

`DNS`解析服务有很多，但大同小异

{{< mermaid >}}
graph LR;
A[添加站点] --> B[记录 NS 服务器]
B --> |到域名提供商| C(添加 Nameserver)
C --> |DNS 解析服务商| D[添加记录]
D --> |A 记录| E[IP 地址]
D --> |CName 记录| F[其他域名]
{{< /mermaid >}}

下面以`Netlify DNS`举例

[Netlify DNS](https://app.netlify.com/)

### 添加 DNS 记录

点击`Domains`-->`Add or Register a Domain`-->输入你的域名-->添加`DNS`记录

![2023-02-01_111811_i](https://github.com/UlinoyaPed/PictureBed/raw/main/Blog/2023-02-01_111811_i.png)

你可以添加`A`记录或`Cname`记录

`A`记录解析到`IP`，`Cname`记录解析到另一个域名

### 配置 NS 服务器

![2023-02-01_112247_u](https://github.com/UlinoyaPed/PictureBed/raw/main/Blog/2023-02-01_112247_u.png)

记录`Nameservers`

此处为

```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

进入`nic.eu.org`-->`Domains`-->`Nameservers`

添加到`Name servers`下

![2023-02-01_112416_V](https://github.com/UlinoyaPed/PictureBed/raw/main/Blog/2023-02-01_112416_V.png)

验证方式选第三个并确定

等待几分钟就可以访问了

{{< admonition tip "提示" true >}}
如果第三个验证方式出错，可以返回选第一个

其实出错代表 NS 服务器错误或访问超时，选第一个验证后虽然配置成功，但可能无法访问
{{< /admonition>}}

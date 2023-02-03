---
title: "Markdown1-基础语法"
subtitle: ""
date: 2023-01-16T18:09:52+08:00
lastmod: 2023-01-16T18:09:52+08:00
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

# Markdown 基础语法

## 标题

标题有两种形式

1. 使用`=`（大标题）和`- `（小标题）标记

```markdown
<h1>大标题</h1>

<h2>小标题</h2>
```

**效果**

> <h1>大标题</h1>
>
> <h2>小标题</h2>

2. 使用 `#`标记

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

**效果**

> <h1>一级标题</h1>
>
> <h2>二级标题</h2>
>
> <h3>三级标题</h3>
>
> <h4>四级标题</h4>
>
> <h5>五级标题</h5>
>
> <h6>六级标题</h6>

## 段落

段落的前后要有空行，  
可用两个空格加回车使用段内换行。  
`Typora`可以用两个空格加`Shift`+`Enter`换行。

引用中换行可省略两个空格。

```markdown
段落一

段落二（后跟两个空格）  
段内换行
```

## 引用

1. 使用\`\`进行符号引用

```
`Markdown`
```

**效果**

> `Markdowm`

2. 使用`>`进行区块引用

```
> 区块引用
>> 嵌套引用
>>> 嵌套引用
```

> 区块引用
>
> > 嵌套引用
> >
> > > 嵌套引用

## 代码块

使用\`\`\`</br>\`\`\`使用代码块

**例 1**

`````markdown
# 这是一个代码块

````markdown
上面的 markdown 代表语言

不同的语言有不同的代码高亮效果

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello world!")
}
```

代码块可嵌套，  
如你所见，大一级的代码块比次级多一个\`

注意：代码块外部要留出一个空行。  
例：

<!--此行留空-->

```markdown

```

<!--此行留空-->
````
`````

**例 2**

```powershell
function main {
    Write-Output "Hello world!"
    Invoke-Expression func1
    func2
    func3
}

function func1 {
}
function func2 {
}
function func3 {
}

main
```

<p style="color:red">注意：代码块在Markdown编辑器中一般不方便更改，有些代码在粘贴后需要二次更改，这时就可能会出现代码错误的情况；有些对格式要求严格的语言甚至会出现错位，如Python和Yaml，所以复制的代码要多检查再使用！</p>

## 强调

使用`*`、`_`、`=`、`~`进行强调

```markdown
_斜体_ _斜体_

**粗体** **粗体**

==高亮==

~~删除线~~
```

**例**

> _斜体_ _斜体_
>
> **粗体** **粗体**
>
> ==高亮==
>
> ~~删除线~~

## 列表

1. 无序列表

使用`+`、`-`标记无序列表，`+`、`-`后跟空格

```markdown
- 第一项
- 第二项
- 第三项

* 第一项
* 第二项
* 第三项
```

> - 第一项
> - 第二项
> - 第三项
>
> * 第一项
> * 第二项
> * 第三项

2. 有序列表

使用数字+`.`+空格标记有序列表

```markdown
1. 第一项
1. 第二项
1. 第三项

1. 第一项
1. 第二项
1. 第三项
```

> 1. 第一项
> 1. 第二项
> 1. 第三项
>
> 1. 第一项
> 1. 第二项
> 1. 第三项

## 分割线

使用大于等于三个`*`、`-`标记分割线

```markdown
内容一

---

内容二

---

内容三
```

> 内容一
>
> ---
>
> 内容二
>
> ---
>
> 内容三

## 链接&图片

链接分为行内式和参考式

```markdown
[行内式](https://totapo.netlify.app)

[参考式][1]

[1]: https://totapo.netlify.app/my/index.html
```

> [行内式](https://totapo.netlify.app)
>
> [参考式][1]
>
> [1]: https://totapo.netlify.app/my/index.html

图片和链接类似，只在`[]`前加了`!`

```markdown
![头像](/Captain.png)

<!--不支持缩放-->

<img src="/Captain.png" height="200px" width="200px" alt="头像" style="border-radius: 15px" />
<!--border-radius为圆角-->
```

![头像](/Captain.png)

<img src="/Captain.png" height="200px" width="200px" alt="头像" style="border-radius: 15px" />

## 反斜杠

`\`表示转义，可转义特殊字符。

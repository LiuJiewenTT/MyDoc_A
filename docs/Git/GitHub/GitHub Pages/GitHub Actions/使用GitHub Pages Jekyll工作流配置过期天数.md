---
date: 2023-6-4 21:50:00 +0800
categories: [GitHub, GitHub Pages, GitHub Actions]
tags: [GitHub, GitHub Pages, GitHub Actions, GitHub Pages Jekyll, examples]
---

# 使用GitHub Pages Jekyll工作流配置过期天数

首先说说有什么用呢？因为我们已经可以改变使用的分支了，如果也可以设置很长的artifact过期时间了，那我们就可以考虑允许他人直接下载制作好并打包好的网站，也就是artifact。

> 本文将以我的项目`FetchRPlayer`的`docs_generation`分支进行举例说明。

在查找`actions/upload-pages-artifact@v1`的文件以寻找改变过期时长的过程中，我发现了一个可输入数据：`retention-days`：

![image-20230604215507227](使用GitHub Pages Jekyll工作流配置过期天数.assets/image-20230604215507227.png)

> 来源：<https://github.com/actions/upload-pages-artifact/blob/main/action.yml>

于是我们修改workflow：

> 原文：
>
> ``` yaml
> - name: Upload artifact
>   uses: actions/upload-pages-artifact@v1
> ```
>
> 改后：
>
> ``` yaml
> - name: Upload artifact
>   uses: actions/upload-pages-artifact@v1
>   with:
>     retention-days: 60
> ```
>

保存，提交！这样就好啦！
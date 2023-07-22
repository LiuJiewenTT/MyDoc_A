---
author: 刘杰文
date: 2023-07-22 11:09:00 +0800
---

# NTFS文件系统的文件链接

links:

1. <https://learn.microsoft.com/zh-cn/windows/win32/fileio/hard-links-and-junctions?source=recommendations>
2. <https://learn.microsoft.com/zh-cn/windows/win32/fileio/creating-symbolic-links>

本文其实是关于`mklink`命令各选项的详细说明。

内容摘抄自网络，本人仅做收集和整理。

## 硬链接

硬链接：Hard Link

> *硬链接* 是文件的文件系统表示形式，通过该文件，多个路径**引用**<strong style="color:red">同一卷</strong>中的**单个文件**。

## 软链接

软链接：Junction

> *交汇*点 (也称为*软链接*) 不同于硬链接，因为它引用的存储对象是**单独的目录**。 交汇点还可以链接位于<strong style="color:red">同一计算机上的不同本地卷</strong>上的目录。 
>
> 否则，交汇点的工作方式与硬链接**相同**。 交汇点通过 [重新分析点](https://learn.microsoft.com/zh-cn/windows/win32/fileio/reparse-points)实现。

## 符号链接

符号链接：Symbol Link

> 符号链接可以是绝对链接，也可以是相对链接。
>
> 符号链接还可以将交汇点和装载的文件夹作为路径名称的一部分包含在内。
>
> 符号链接可以使用 UNC 路径直接指向远程文件或目录。
>
> 相对符号链接仅限于单个卷。
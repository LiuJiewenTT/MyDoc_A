---
author: 刘杰文
date: 2023-5-31 15:05:00 +0800
categories: [SSH, Windows]
tags: [SSH, OpenSSH, OpenSSH Server, Windows]
---

# Windows添加OpenSSH Server

具体的教程网上到处都是，这里就不详细描述了，先简要概括一下：

> 打开设置，到应用，添加Windows功能/“可选功能”（位置在Win10和Win11上不一样），在已添加的功能列表的上方搜索“SSH”。通常来说，“OpenSSH 客户端”都是默认安装好的，而“OpenSSH 服务器”是默认未安装的。
>
> 点击添加功能，搜索“SSH”，选择安装“OpenSSH 服务器”。安装过程是通过Windows的更新机制，所以如果你下载过慢，可以考虑调整“传递优化”的偏好。
>
> 安装完成后你可能需要重启电脑，甚至可能是“重启并安装更新”，随后安装才会被完成。如果没完成安装流程，那么你在功能列表中无法搜索到“OpenSSH 服务器”。如果你安装完成，可能会和我一样，“OpenSSH 服务器”还在未安装的列表中，但实际已经安装完成了，原因不明。
>
> 此外，正常情况下，基本的配置都会在安装过程完成，比如防火墙。

讲讲细节问题：

1. 在Windows可选功能列表中安装，意味着添加或更改Windows功能，可能需要下载，那么就用到了Windows的更新机制，因此也可以通过“传递优化”来提高下载速度。
2. 如果哪里都找不到安装的服务端，那么可能是挂起了。众所周知，修改Windows功能是会需要“更新”的。此时如果通过Power Shell尝试安装，就会得到`Install Pending`的信息。此时重启并更新就好了。

附：使用Powershell（管理员）安装

获取状态：

``` powershell
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH.Server*'
```

安装：

``` powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

> 参考[链接](https://blog.csdn.net/qq_27327057/article/details/126882441)👈




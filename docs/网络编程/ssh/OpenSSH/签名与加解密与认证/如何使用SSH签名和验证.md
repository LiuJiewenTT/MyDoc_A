---
date: 2023-08-07 22:36:00 +0800
redirect_from:
  - /aka/digital_key/ssh/how-to-sign-and-verify-a-file
---

# 如何使用SSH签名和验证

参考链接：

1. <https://blog.csdn.net/easylife206/article/details/131039449>
2. <https://git-scm.com/docs/signature-format>

## 正文

> 本文有对网络资料进行摘抄的成分，相关资料已在顶部链接区提供。

<strong style="color:red;background:lightgrey">只要我不泄漏自己的私钥，别人就很难伪装成我来做坏事</strong>。

实现签名最常见的工具是 *GPG*。如果你玩过 Linux 肯定不陌生，很多发行版的包管理器都使用 GPG 对包做签名，防止坏人伪造。

> 关于GPG的介绍：
>
> 1. 简明GPG概念：<https://zhuanlan.zhihu.com/p/137801979>

但 GPG 对小白用户不友好，所以普通 Git 玩家很少会开启签名。一直到 [OpenSSH](https://so.csdn.net/so/search?q=OpenSSH&spm=1001.2101.3001.7020) 8.0 发布，局面才有所改观。因为这个版本的 OpenSSH 支持给任意数据进行签名。

> 签名功能在 OpenSSH 8.7 出问题了，建议使用 8.8 以后的版本

SSH 签名的工具是 <span style="color:red">ssh-keygen</span>。估计很多人只在第一次生成 SSH 密钥的时候用到过，后面就在没碰过它了。虽然有点奇怪🤔但签名也验签功能也是由 ssh-keygen 提供的。

假设有一个文件`/tmp/a.txt`，我们想使用`~/.ssh/id_ed25519`给它做签名，我们可以：

```sh
ssh-keygen -Y sign -f ~/.ssh/id_ed25519 -n file /tmp/a.txt
```

各参数的功能如下：

- `-Y sign`表示计算签名
- `-f`指定私钥
- `-n file`是给签名指定类型
- `file`是我们自己定的，不同类型的签名不会产生冲突

执行之后就会得到一个签名文件`/tmp/a.txt.sig`，内容长这个样子：

```
-----BEGIN SSH SIGNATURE-----
U1NIU0lHAAAAAQAAADMAAAALc3NoLWVkMjU1MTkAAAAgulKNunkcVxiDzY0wmqJo4rAG9L
ClGRq9mMfA/PqsKYkAAAADZ2l0AAAAAAAAAAZzaGE1MTIAAABTAAAAC3NzaC1lZDI1NTE5
AAAAQP1FljU1ZQ327DZE11wjHIDgz1s0ULi7QO5rhg+MyEn12nwkV0fk69qDqmcpAE562x
pIxa+yaGuMV6hK97Hq+gE=
-----END SSH SIGNATURE-----
```

有了签名，我们就可以验证是不是有坏人篡改了文件内容了。验证签名需要一个[公钥](https://so.csdn.net/so/search?q=公钥&spm=1001.2101.3001.7020)列表：

```ini
hi@taoshu.in ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILpSjbp5HFcYg82NMJqiaOKwBvSwpRkavZjHwPz6rCmJ ts@tc
...
```

第一列是公钥的标识，我们这里用的是邮箱。第二列是公钥类型，后面的部分是公钥内容，也就是`~/.ssh/id_ed25519.pub`的内容。每个公钥占一行。

验签命令如下：

```shell
ssh-keygen -Y verify -f allowed_signers -I hi@taoshu.in -n file -s /tmp/a.txt.sig < /tmp/a.txt
```

各参数的功能如下：

- `-Y verify` 表示要验证签名
- `-f` 用来指定公钥列表文件
- `-I` 指定使用公钥标识
- `-n file` 需要跟签名的时候保持一致
- `-s` 指定签名所在文件

最后通过重定向将文件内容传给 ssh-keygen。如果验证通过，则会得到如下结果：

```
Good "file" signature for hi@taoshu.in with ED25519 key SHA256:19/J4WKT7flBNcfmqQUqyAZeH4TdhMf5f0u+a4fZj1c
```

如果有人修改了文件内容，则会得到如下结果：

```
Signature verification failed: incorrect signature
Could not verify signature.
```

---

如果你使用Git，那么相关git命令应该更适合你，详见[链接2](https://git-scm.com/docs/signature-format)，本页面暂未摘抄。或者，你也可以看这篇文章：[文章](../../../../Git/给git的commit和tag使用签名.md#2%20手动验证命令)。
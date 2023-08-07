---
date: 2023-08-07 23:16:00 +0800
tags: [ssh, OpenSSH]
categories: [ssh, OpenSSH]
author: 刘杰文
---

# How to check OpenSSH version

Partially sourced from: <https://tecadmin.net/check-openssh-version/>

Enter the command in terminal:

``` shell
ssh -V
```

![check OpenSSH Version on localhost](How to check OpenSSH version.assets/view-openssh-version.png)

But to see the ssh version of a remote device, we can see that in the verbose

``` shell
ssh -v 192.168.1.15
```

![check OpenSSH Version on remote machine](How to check OpenSSH version.assets/view-openssh-version-remote-system.png)

But if you have pubkey authenticated on the remote side, you will soon get logged-in and have a clear screen with nothing about verbose. SO HERE IS A BETTER COMMAND:

``` shell
ssh -Nv 192.168.1.15
```

But the con is: it's gonna stuck and you will have to break it and no pipeline will have a seat.

Also, if you're sure you can login with pubkey authentication, HERE IS A BETTER*2 COMMAND:

``` shell
@REM This is for Windows:
ssh 192.168.1.15 "echo logged-in. && ssh -V && exit"

# This is for Linux:
ssh 192.168.1.15 "echo logged-in.; ssh -V; exit;"
```

![image-20230807233245999](How to check OpenSSH version.assets/image-20230807233245999.png)

You may test these with `localhost`. 

Have a good day!
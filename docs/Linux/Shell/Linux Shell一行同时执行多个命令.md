---
date: 2023-08-07 23:45:00 +0800
---

# Linux Shell一行同时执行多个命令

链接：

1. <https://zhuanlan.zhihu.com/p/421284544>

   > 原文转载自：<https://www.linuxprobe.com/linux-terminal-multi-cmd.html>



## 正文

### 使用 ; 符号运行多条命令

其中最简单的是分号(`;`)，使用方式如下：

```bash
cmd1; cmd2; cmd3
```

cmd1将首先运行，**不管cmd1运行成功还是出现错误，cmd2都会在它之后运行**，当cmd2命令完成时，cmd3将会运行。

分号(;)后面的空格可带可不带，但空格使命令行更容易读懂。

### 使用 && 符号运行多条命令

有时候希望确保Linux命令中，**只有在前一个命令成功结束时，下一个命令才会运行**。这就是逻辑和运算符`&&`出现的地方：

```bash
cmd1 && cmd2 && cmd3
```

当第一个命令出现**错误**时，`&&`分隔的命令**会停止执行后面的命令**。

### 使用 || 符号运行多条命令

可以使用逻辑操作符(`||`)运行命令行，但是**只有在前一个命令出现错误时才运行下一个命令**：

```bash
cmd1 || cmd2 || cmd3
```

如果cmd1运行失败，则运行cmd2。如果cmd2运行成功，cmd3将不会运行。

### 合并&&和||运算符

例如，可以检查文件是否存在，并相应地打印消息。

```bash
[root@localhost ~]# [ -f file.txt ] && echo "File exists" || echo "File doesn't exist"
```

在创建file.txt文件之前和之后运行上面的命令，看看区别:

![img](https://pic4.zhimg.com/80/v2-16b41463408e7dde9819f6f80b35747b_720w.webp)




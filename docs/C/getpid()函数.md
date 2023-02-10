# getpid()函数

links:

1. <https://www.jianshu.com/p/3082672a4e8b>
2. <https://www.cnblogs.com/hshy/p/11848325.html>

[toc]

## 1

``` python
import os

pid=os.fork()

if pid==0:

    print("老王")

    print("我是子进程进程号是%d我的父亲进程是%d"%(os.getpid(),os.getppid()))

else:

    print("我是父进程我的进程号是%d我的父亲的进程号是%d"%(os.getpid(),os.getppid()))

print("老刘")

作者：策_54d3
链接：https://www.jianshu.com/p/3082672a4e8b
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## 2

getpid是一种函数，功能是取得进程识别码，许多程序利用取到的此值来建立[临时文件](https://baike.baidu.com/item/临时文件/3359209)，以避免临时文件相同带来的问题。

> 函数功能：取得进程识别码
>
> 相关函数：[fork](https://baike.baidu.com/item/fork)，kill，getpid
>
> 头文件：旧版本：unistd.h，在VC++6.0下可以用[process.h](https://baike.baidu.com/item/process.h)
>
> 函数原型：旧的原型为pid_t getpid(void);，推荐使用int _getpid( void );这种形式。注意，函数名第一个字符是下划线。
>
> 函数说明：getpid函数用来取得目前进程的进程[ID](https://baike.baidu.com/item/ID)，许多程序利用取到的此值来建立[临时文件](https://baike.baidu.com/item/临时文件)，以避免临时文件相同带来的问题。
>
> 返回值：目前进程的进程ID
>
> fork – 创建新进程；exit – 终止进程；exec – 执行一个应用程序wait – 将[父进程](https://baike.baidu.com/item/父进程)挂起，等待子进程终止；getpid – 获取当前进程的PID；nice – 改变进程的优先


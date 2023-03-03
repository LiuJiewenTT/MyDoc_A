---
author: rexienk
date: 2015-10-07 14:57
---

# htons()和htonl()函数

本文为摘抄。链接：[link](https://www.cnblogs.com/rexienk/p/4858710.html).

---

作者：[rexienk](https://www.cnblogs.com/rexienk/)

## [htons()和htonl()函数](https://www.cnblogs.com/rexienk/p/4858710.html)

## htons()

``` c 
#include <arpa/inet.h>　
uint16_t htons(uint16_t hostshort);　
```

htons的功能：

​        简述：将一个无符号短整型数值转换为网络字节序，即大端模式(big-endian)。

​		参数`u_short hostshort`: 16位无符号整数　返回值: TCP / IP网络字节顺序.

htons 是把你机器上的整数转换成“网络字节序”， 网络字节序是 big-endian，也就是整数的高位字节存放在内存的低地址处。 而我们常用的 x86 CPU (intel, AMD) 电脑是 little-endian,也就是整数的低位字节放在内存的低字节处。

举个例子：

​        假定你的 *port* 是　　0x1234,　　在网络字节序里 这个 *port* 放到内存中就应该显示成　　addr addr+1　　0x12 0x34　　而在x86电脑上，0x1234放到内存中实际是：　　addr addr+1　　0x34 0x12　.

htons 的用处就是把实际内存中的整数存放方式调整成“网络字节序”的方式。

## htonl()

　　简述：将主机的无符号长整形数转换成网络字节顺序。　

``` c
#include <arpa/inet.h>　　
uint32_t htonl(uint32_t hostlong);
```

hostlong：主机字节顺序表达的32位数

注释：

 　　本[函数](http://baike.baidu.com/view/15061.htm)将一个32位数从主机字节顺序转换成网络字节顺序。　　

返回值：　

   　htonl()返回一个网络字节顺序的值。　　

参见：　

  　[htons()](http://baike.baidu.com/view/569197.htm), [ntohl()](http://baike.baidu.com/view/569207.htm), [ntohs()](http://baike.baidu.com/view/569208.htm).　　

标签: [Linux网络编程](https://www.cnblogs.com/rexienk/tag/Linux网络编程/)
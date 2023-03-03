# socket使用

包含头文件*<sys/socket.h>*.

具体参数要看手册，可以在Linux下用man查看。

``` c
sock = socket(AF_INET, SOCK_STREAM, 0);
```

解释：

``` c
AF_INET: 使用 IPv4
AF_INET6: 使用 IPv6

SOCK_STREAM: 使用 TCP 协议
```


# ssh清除本地记录的旧公钥信息

links:

1. <https://www.cnblogs.com/kaishirenshi/p/10275993.html>

## Mine

就一行：

``` shell
ssh-keygen -R 192.168.1.10
```

执行此命令，会从本地的known_hosts中移除对于`192.168.1.10`的记录。要移除带有端口的记录，输入这样的：

``` shell
ssh-keygen -R [127.0.0.1]:10022
```




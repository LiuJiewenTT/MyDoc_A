# 添加sudo权限

links:

1. <https://zhuanlan.zhihu.com/p/62984051>



## 1

### RHEL/CentOS/OEL

使用这条命令把用户添加到wheel组：

``` bash
usermod -aG wheel usr1
```

使用这条命令查看是否添加成功。

``` bash
getent group wheel
```

注：这些系统属于Fedora Linux。
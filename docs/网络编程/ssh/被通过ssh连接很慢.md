# 被通过ssh连接很慢

links:

1. <https://blog.csdn.net/SaberJYang/article/details/124004792>

## Mine

如下“[1](#1)”所言即可，不过要注意的是，记得把那个注释符号`#`也删掉，最后保存、重启服务，这样才行。默认的`UseDNS`值是`yes`。

## 1

### 问题现象
win10 通过ssh登录到centos linux虚拟机很慢。

### 问题原因
都是UseDNS惹得祸。

SSH服务启用了UseDNS特性所致，默认是开启的。

**当试图通过SSH连接服务器时，服务器端会进行DNS检测，判断客户端是否合法，这也是防止客户端欺骗的一种手段，但是我的环境都在本地，这种检测就是浪费时间，所以关掉即可。**

### 解决办法
使用root权限，通过vim修改/etc/ssh/sshd_config，将UseDNS设置为no，centos切换成root用户，Ubuntu使用sudo

``` shell
vim /etc/ssh/sshd_config
```

3.执行如下命令，重启SSH服务使配置生效。

``` shell
systemctl restart sshd
```

然后再进行SSH连接，发现一切都跟德芙一样丝般顺滑。

后再进行SSH连接，发现一切都跟德芙一样丝般顺滑。

祝大家生活愉快。
------------------------------------------------
版权声明：本文为CSDN博主「玉梅小洋」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/SaberJYang/article/details/124004792
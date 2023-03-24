# CentOS7 /etc/rc.d/init.d/iptable.找不到文件解决方法

links:

1. <https://blog.csdn.net/weixin_43634138/article/details/97268838>

## 1

想通过防火墙打开8080端口登录tomcat却发现提示 `/etc/rc.d/init.d/iptable.找不到文件`，

<p style="color:red">最后发现因为于CentOS7不用iptables执行命令了，所以应用firewall相关命令控制防火墙</p>

查看firewall的状态：

``` bash
 firewall-cmd --state
```

开放80端口：

``` bash
firewall-cmd --permanent --add-port=80/tcp
firewall-cmd --permanent --add-port=8080-8085/tcp
```

查看防火墙的开放的端口：

``` bash
firewall-cmd --permanent --list-ports
```

重启防火墙(修改配置后要重启防火墙)：

``` bash
firewall-cmd --reload
```

最后可以输入相应的ip地址查看tomcat是否启动
------------------------------------------------
版权声明：本文为CSDN博主「Abatel」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_43634138/article/details/97268838


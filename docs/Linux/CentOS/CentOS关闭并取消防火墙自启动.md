# CentOS关闭并取消防火墙自启动

**停止firewall**

```bash
systemctl stop firewalld.service 
```

**禁止firewall开机启动**

```bash
systemctl disable firewalld.service 
```

图：

![image-20230217175102015](CentOS关闭并取消防火墙自启动.assets/image-20230217175102015.png)
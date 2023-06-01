# Windows配置和使用ssh别名

links:

1. <https://blog.csdn.net/weixin_42633385/article/details/88785250>
2. <https://windowsreport.com/bad-owner-or-permissions-on-ssh-config/>



## Mine

### 配置别名

假设你的用户名为`A`，那么你应该在这里编写信息：`C:/Users/A/.ssh/config`。

### 解决无法访问

问题：

> Bad owner or permissions on C:\\Users\\HP/.ssh/config

解决：

见[链接](https://windowsreport.com/bad-owner-or-permissions-on-ssh-config/)。简单地说就是重置(.ssh文件夹)安全主体，禁用继承，然后添加自己当前账户的权限。
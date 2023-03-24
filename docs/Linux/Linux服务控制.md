# Linux服务控制

修改设置一般需要管理员权限。

## 查看服务状态

``` bash
systemctl status firewalld.service
```

也可以使用`service`命令如下：

``` shell
service firewalld status
```

## 启动服务

``` shell
systemctl start vsftpd.service
```

也可以使用`service`命令如下：

``` shell
service vsftpd start
```

## 启用服务

启用后，服务将会开机自启。

``` shell
systemctl enable vsftpd.service
```

## 停止服务

``` shell
systemctl stop firewalld.service
```

也可以使用`service`命令如下：

``` shell
service firewalld stop
```

## 禁用服务

禁用后，服务不再开机自启。

``` shell
systemctl disable firewalld.service
```

## 其他

在我使用的CentOS中，service命令都是调用链接，然后调用相应的systemctl来执行。service和systemctl的选项一个放在后一个放在前。支持的选项也不完全一样。

`service`支持：

**start, stop, restart, try-restart, reload, force-reload, status**.

然而`systemctl`支持更加完整，它都有。
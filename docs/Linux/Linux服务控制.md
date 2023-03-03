# Linux服务控制

修改设置一般需要管理员权限。

## 查看服务状态

``` bash
systemctl status firewalld.service
```

## 启动服务

``` shell
systemctl start vsftpd.service
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

## 禁用服务

禁用后，服务不再开机自启。

``` shell
systemctl disable firewalld.service
```


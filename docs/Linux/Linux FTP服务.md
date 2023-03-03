# Linux FTP 服务

Old:
Linux下有很多可用的FTP服务器，其中比较流行的有**WU-FTP**（Washington UniversityFTP）和 **VSFTP**。Red Hat 8.0中自带了WU-FTP和VSFTP两个软件。WU-FTP是一个著名的FTP服务器软件，它功能强大，能够很好地运行于众多Unix操作系统中。不过作为后起之秀的VSFTP越来越流行，在Red Hat 9.0发行版中就只带有VSFTP。 

New:
Linux 系统下常用的FTP 是**vsftp**, 即Very Security File Transfer Protocol. 还有一个是**proftp**(Profession ftp)。 我们这里也是简单的说明下vsftp的配置。

1. WU-FTP
2. VSFTP
3. proftp

**Links**:

1. <https://www.cnblogs.com/hnrainll/archive/2011/02/16/1956539.html>

## Mine

如果没有预装FTP服务端，则需要手动安装。这些操作需要管理员权限，你可能会需要使用`su`或`sudo`命令，将其附加在以下命令之前：

``` bash
yum install vsftpd
```

注意，安装后不会自动启动和启用，需要你手动设置。相关操作见: [Linux服务控制](Linux服务控制.md).

<small>注：一般服务端都会在名字末尾加一个字母'd'，例如：<em>httpd, vsftpd</em>.</small>

如此便可正常使用，如果无法使用，建议检查是否能ping通服务器。
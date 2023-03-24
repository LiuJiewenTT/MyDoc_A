# Linux附带显示的路径

这玩意不靠谱，还得用`pwd`：

> 注意，在 `[demo@localhost ~]#` 这一部分中，虽然也显示出当前所在的目录（例如 ~ 表示主目录），但此位置只会列出整个路径中最后的那一个目录，比如：
>
> [root@localhost ~]# cd /var/mail
> [root@localhost mail]# pwd
> /var/mail
>
> 我们知道，不同的目录中，目录名是可以重复的，因此，仅通过 `[root@localhost mail]` 中的 mail，根本无法判断其所在的具体位置，而使用 pwd 命令，可以输出当前所在目录的完整路径。
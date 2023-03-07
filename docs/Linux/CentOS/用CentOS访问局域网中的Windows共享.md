# 用CentOS访问局域网中的Windows共享

links:

1. <https://blog.csdn.net/weixin_33816300/article/details/93068082>

## Mine

只要使用内部虚拟交换器，给虚拟机和物理机都手动分配ip，设置相同的网关，就可以ping通了。

## 1

来到Linux世界中已有一段时间了，感觉上好像自己的电脑成了一个孤岛。周围的人都还是用Windows系统，能相互共享文件，我用Linux系统，别人的共享文件都还不知道怎么访问？通过网上查资料学习，现在知道了。写笔记啦，用CentOS访问局域网中的Windows共享文件。

网上很多都讲用下面方法：

`mount -t smbfs -o username="administrator",password="" //192.168.1.100/cp /mnt/ntfs`

但是上面的方法执行后，出现下面信息(可能是Linux的发行版不同)：

`mount: unknown filesystem type 'smbfs'`

这好像行不通，查资料后，说smbfs改为cifs了，所以要用下面的方法：

`mount -t cifs -o username="administrator",password="" //192.168.1.101/cp /mnt/ntfs`

说明：

`mount -t cifs -o` 这个就不多说了(照着写吧)。

`username="administrator"` 访问需要的用户名。

`password=""` 访问需要的密码(空密码)。

`//192.168.1.101/cp` 共享机器的IP地址，后面的cp为共享名(非cp命令)。

`/mnt/ntfs` 挂载的目录(共享目录被挂载到这里)。

还是看图吧，我做了演示，就不多说了，如图：

![img](http://blog.chinaunix.net/photo/76337_080919164343.png)

注：

  在Windows中共享某个目录，都有两个权限（只读和读写），上图中我演示的Windows共享权限是可读写的。如果是别人共享权限是只读的，那么也无法把自己机器的文件拷贝到对方共享目录中了，会提示“权限不够”。

原文地址：http://blog.chinaunix.net/space.php?uid=20670542&do=blog&id=332567

转载于:https://blog.51cto.com/wangjifu/836680
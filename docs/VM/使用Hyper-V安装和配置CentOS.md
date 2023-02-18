# 使用Hyper-V安装和配置CentOS

links:

1. <https://www.jianshu.com/p/c6dbe6104212>

## 1

Hyper-V是微软提供的一款免费的虚拟机工具，是Windows平台部署虚拟机的首选。本文简要记录了在Windows 10桌面操作系统中，利用Hyper-V安装CentOS虚拟机并进行网络配置等过程。

### 使用Hyper-V安装CentOS

首先，要在Windows 10的Windows Features中启用Hyper-V功能（目前只有Windows 10 Pro和Eneterprise版本可以开启此功能）。
 然后，从CentOS官网下载最新的镜像安装包。推荐使用[Minimal ISO](https://links.jianshu.com/go?to=http%3A%2F%2Fisoredirect.centos.org%2Fcentos%2F7%2Fisos%2Fx86_64%2FCentOS-7-x86_64-Minimal-1810.iso)

然后运行Hyper-V Manager，选中左侧Hyper-V Manager下的机器名，右键单击，在弹出的菜单中选择`新建`>>`虚拟机`后，在弹出的创建虚拟机向导窗口，填写虚拟机名称“CentOS_7.6”，下一步选择Generation 2，下一步设置初始内存，使用默认的就可以，下一步配置网络，选择vNat（vNat是自定义的一个虚拟网络交换机，如何在Hyper-V中自定义虚拟网络交换机，参考[Windows 10中设置Hyper-V虚拟机和主机共享网络](https://www.jianshu.com/p/d23f9165c68d) ），然后一直下一步到`安装选项`，选择`从可启动的镜像文件安装操作系统`单选框，然后选择刚才下载的CentOS7 iso文件作为安装镜像文件，然后下一步到完成向导。

完成安装向导后Hyper-V就会开始安装CentOS操作系统，但是安装时会一直停在启动界面。这是由于在创建新的虚拟机时选择的是Generation 2，会导致Hyper-V为新虚拟机使用`启用安全启动`(Enable Security Boot)的特性，这个特性在安装Windows系统是没有影响的，但是在安装Linux系统时会一直停在启动界面。此时要先关闭虚拟机，然后在虚拟机列表里右键点击新建的虚拟机，在弹出的菜单中选择`设置`，然后在弹出的`设置`窗口中切换到`安全`选项，**停用`启用安全启动`（不勾选复选框）**，点击确定后重新启动虚拟机，继续开始安装CentOS，中间要选择磁盘分区、设置root用户密码等。

最后完成CentOS的安装，系统显式登录命令行界面，此时输入root用户名和密码，成功登录到新安装的系统。

### 配置CentOS的网络

#### 使用vi编辑网络配置文件

在CentOS的命令行中键入

```bash
[root@localhost ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

然后按下图修改网络配置。

![img](https:////upload-images.jianshu.io/upload_images/19117011-d9db456f77597fff.png?imageMogr2/auto-orient/strip|imageView2/2/w/374/format/webp)

<small>ifcfg-eth0</small>

 修改后，按Esc键，然后键入:x并回车，保存并退出。

#### 重启网络服务

```bash
[root@localhost ~]# systemctl restart network
```

#### 使用ip命令查看ip地址是否生效

```bash
[root@localhost ~]# ip a
```

#### 使用yum命令更新CentOS的软件包

CentOS和Redhat中使用yum命令管理安装包，而Ubuntu和Debian中使用apt命令管理安装包。

```bash
[root@localhost ~]# yum -y update
```

作者：efrey
链接：https://www.jianshu.com/p/c6dbe6104212
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
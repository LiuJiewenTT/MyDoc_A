# 我们为什么选择CentOS7

link: 

1. <https://blog.csdn.net/albg_boy/article/details/83414847>

## 1

服务器操作系统大多采用Unix和[Linux操作系统](https://so.csdn.net/so/search?q=Linux操作系统&spm=1001.2101.3001.7020)，而Linux发行版本系统中，多使用CentOS、Redhat、Ubuntu、Gentoo、Debian。而这些发行版本可以大体分为两类，一类是商业公司维护的发行版本，一类是社区组织维护的发行版本，前者以著名的Redhat（RHEL）为代表，后者以Debian为代表。

在选择系统时，我们希望找到一个可靠的，可预测的系统，并且有强大的软件供应商和开源项目中获得强有力的支持。从可靠性、硬件兼容性和生命周期来对比[Redhat](https://so.csdn.net/so/search?q=Redhat&spm=1001.2101.3001.7020)与Debian：

l 可靠性

Redhat，应该称为Redhat系列，包括RHEL(RedhatEnterprise Linux，收费版本)、CentOS（Community ENTerprise Operating System，开源版本），是由红帽公司测试维护，并在Linux内核稳定分支上进行开发，系统相对稳定。[Debian](https://so.csdn.net/so/search?q=Debian&spm=1001.2101.3001.7020)系列，包括Debian和Ubuntu 等，是社区类Linux的典范，分为三个版本分支（branch）： stable, testing 和 unstable。其中，unstable为最新的测试版本，其中包括最新的软件包，但是也有相对较多的bug，适合桌面用户。Ubuntu是基于 Debian的unstable版本加强而来，一个拥有Debian所有的优点，以及自己所加强的优点的近乎完美的 Linux桌面系统，界面非常友好，容易上手，对硬件的支持非常全面，是最适合做桌面系统的Linux发行版本。

l 硬件兼容性

RHEL对硬件的支持很好，主流硬件厂商早就将服务器拿过去测试，一般不存在硬件的兼容性问题。对于Debian来说，由于版权和代码纯洁性考虑，一些硬件驱动和软件被删掉了，导致安装过程有问题

l 生命周期

CentOS/RHEL的生命周期是7到10年，基本上可以覆盖硬件的生命周期，也就意味着一个新硬件安装以后，不用再次安装操作系统。而Debian的生命周期是不固定的，一般新版本发布以后，上个版本再维护18个月。而Debian的版本发布时间间隔不稳定，经常会延期。综合起来一个版本的生命周期一般在3～4年。如果选用了 Debian 或者 [Ubuntu](https://so.csdn.net/so/search?q=Ubuntu&spm=1001.2101.3001.7020)作为服务器，等生命周期过了以后，就没有安全补丁，服务器就会有安全风险。

基于以上对比，在给服务器选择Linux操作系统时，我们会优先考虑Redhat系统的操作系统。

由于CentOS源于 Red Hat 企业级 Linux（RHEL）的源代码，依照开放源代码规定释出的源代码所编译而成。由于CentOS开源特性，选择CentOS可以降低成本，同时又能够享受RHEL的服务支持。

[CentOS7](https://so.csdn.net/so/search?q=CentOS7&spm=1001.2101.3001.7020)是在CentOS6基础上发布的新版本，与之前的版本相比，主要的更新包括：

l 内核更新到3.10.0

l 支持Linux容器

l LVM快照支持ext4和XFS

l 转用systemd、firewalld和GRUB2

l XFS作为缺省文件系统

l 支持PTPv2

l 支持40G 以太网卡

l 在兼容的硬件上支持以UEFI安全启动模式安装

这其中最令人瞩目的新特性就是支持Docker技术。作为目前流行的应用虚拟化技术之一，Docker能够将应用程序与系统完全隔离，让其在系统之间实现迁移而不需要停机，提高了应用程序的移动性和灵活性。CentOS7在内核层面支持Docker容器技术，可以提高Docker稳定性和可靠性。

综上，我们会选择CentOS7来作为服务器的操作系统。

<https://blog.csdn.net/albg_boy/article/details/83414847>
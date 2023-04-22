## Hyper-V与VMware对比的感受

Hyper-V总体上来说效率还是比VMware高一点，个人感觉。不过Hyper-V的配置也更简单，甚至应该说更加初级，没有VMware那么多选项可选。论功能的丰富度上，还是VMware更多一些。而且确实如网上所说那样，VMware的虚拟机网络速度比Hyper-V快多了，配置似乎更完整而直观，因为都有预设。不过论简单程度，那似乎还是Hyper-V的简单。至于屏幕大小的问题，也就是屏幕分辨率的问题，Hyper-V的Linux虚拟机是不会随窗口自动更改的，要在虚拟机内手动输入命令调整，然后重启才能生效（见【[../../Linux/CentOS/修改屏幕分辨率](../../Linux/CentOS/修改屏幕分辨率.md)】），而VMware不用。

不过说起来，内核数量开高，安装那个*VMware Tools*，然后性能似乎好了不少，应该符合网传性能差不多和Hyper-V一样的说法吧。

反正，我的电脑的Hyper-V基本废了，所以我转VMware了。目前感觉还行。就是转过来的不管是Windows还是Linux系统都不要使用BIOS引导而应该是UEFI引导，不然无法开机，找不到系统。

---

2023.4.19 补充：

今天在查资料的时候发现，Hyper-V的虚拟机好像也可以配置详细的网络参数，不过比较麻烦，需要在虚拟机内部署网络控制器服务器（并重启），这玩意好像是Windows的，Linux有没有不知道。说白了就是要通过*SDN*这个技术完成。所谓*SDN*，就是“软件定义的网络”的缩写。详见【[Microsoft Learn, 使用Windows PowerShell部署网络控制器](https://learn.microsoft.com/zh-cn/windows-server/networking/sdn/deploy/deploy-network-controller-using-windows-powershell)】。

> 特别强调了这玩意不是在物理机上部署！！
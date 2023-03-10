# HyperV创建Win虚拟机

[toc]



# 创建Win10_LTSC_2019的虚拟机

使用第二代虚拟机，安装按`F2`进入安装界面。

> 按了`F2`之后稍等一会，（我这里还挺久的）
>
> 一闪而过，开始转圈圈：
>
> ![image-20230127151928453](HyperV创建Win虚拟机.assets/image-20230127151928453.png)
>
> 然后会出现安装界面：
>
> ![image-20230127145027854](HyperV创建Win虚拟机.assets/image-20230127145027854.png)
>
> > 在这之前长这样：
> >
> > ![image-20230127145123893](HyperV创建Win虚拟机.assets/image-20230127145123893.png)
> >
> > 有时还会显示“Press any key to boot from CD or DVD...”：
> >
> > ![image-20230127145436156](HyperV创建Win虚拟机.assets/image-20230127145436156.png)
> >
> > 然后不管按什么都会这样：
> >
> > ![image-20230127145311687](HyperV创建Win虚拟机.assets/image-20230127145311687.png)
>
> 我选择好就到下一步。
>
> 两个选项，点击“现在安装”。
>
> ![image-20230127145740376](HyperV创建Win虚拟机.assets/image-20230127145740376.png)
>
> 然后出现：
>
> ![image-20230127145920721](HyperV创建Win虚拟机.assets/image-20230127145920721.png)
>
> 接受许可，下一步。
>
> ![image-20230127145946294](HyperV创建Win虚拟机.assets/image-20230127145946294.png)
>
> 这里我的虚拟机是空硬盘，我选择第二个选项。
>
> ![image-20230127150014135](HyperV创建Win虚拟机.assets/image-20230127150014135.png)
>
> 然后就是分配空间：
>
> ![image-20230127150124752](HyperV创建Win虚拟机.assets/image-20230127150124752.png)
>
> 这里可以点新建，然后会出现4个分区，只有一个可以用于安装系统。如果不管，直接点击”下一步“，也会开始安装，如图：
>
> > 选中磁盘，点击”新建“。不管它，直接点”应用“。
> >
> > ![image-20230127152254111](HyperV创建Win虚拟机.assets/image-20230127152254111.png)
> >
> > 这时出现提示：
> >
> > ![image-20230127152337266](HyperV创建Win虚拟机.assets/image-20230127152337266.png)
> >
> > 点击确定，出现四个分区：
> >
> > ![image-20230127152407090](HyperV创建Win虚拟机.assets/image-20230127152407090.png)
> >
> > 这四个中，只有这默认选中的这一个能继续安装系统。
> >
> > > 另外三个，都会出现提示，并且无法点击”下一步“：
> > >
> > > ![image-20230127152546444](HyperV创建Win虚拟机.assets/image-20230127152546444.png)
> >
>
> 选中第四个，点击”下一步“，开始安装。
>
> 开始安装：
>
> ![image-20230127151727379](HyperV创建Win虚拟机.assets/image-20230127151727379.png)
>
> > 这个时候我强制关机，再次进入后发现和点击”新建“的结果是差不多的。都分了四个分区：
> >
> > ![image-20230127152106173](HyperV创建Win虚拟机.assets/image-20230127152106173.png)
>
> 自动重启一下：
>
> ![image-20230127152931098](HyperV创建Win虚拟机.assets/image-20230127152931098.png)
>
> 准备就绪：
>
> ![image-20230127152956846](HyperV创建Win虚拟机.assets/image-20230127152956846.png)
>
> 又重启了一下，进入windows初始化
>
> ![image-20230127153035160](HyperV创建Win虚拟机.assets/image-20230127153035160.png)
>
> 选好区域，点”是“
>
> ![image-20230127153126340](HyperV创建Win虚拟机.assets/image-20230127153126340.png)
>
> 键盘布局，选好拼音就行了
>
> ![image-20230127153203098](HyperV创建Win虚拟机.assets/image-20230127153203098.png)
>
> 可以不管，点击”跳过“
>
> ![image-20230127153221832](HyperV创建Win虚拟机.assets/image-20230127153221832.png)
>
> 个人不推荐使用联机账户登录，没必要
>
> ![image-20230127153606941](HyperV创建Win虚拟机.assets/image-20230127153606941.png)
>
> 设置密码，确认密码
>
> 设置安全问题
>
> 问是否发送信息，这里是虚拟机，那就没必要了，点击”否“：
>
> ![image-20230127154751708](HyperV创建Win虚拟机.assets/image-20230127154751708.png)
>
> 隐私设置这边无所谓了，随便选，然后点击”接受“：
>
> ![image-20230127154854702](HyperV创建Win虚拟机.assets/image-20230127154854702.png)
>
> > 2023-1-28补充：“量身定制的体验”关掉吧，没必要，会有任务计划，占CPU还没用。或者把位置以外的都关闭。或者都关了。
>
> 然后就是等了：
>
> ![image-20230127154951646](HyperV创建Win虚拟机.assets/image-20230127154951646.png)
>
> 

## 配置网络交换机

网友([link](https://blog.csdn.net/Qwertyuiop2016/article/details/126440731))：

> Windows10开启虚拟机的话，会有一个Defaullt Switch的默认网路，这个网络会给虚拟机自动分配ip和dns，奇葩的是每次分配的IP都是不固定的。
>
> 所以需要自己建个网络，让虚拟机里的IP固定。有三种网络：外部(桥接)、内部(Nat)和专用(不知道)。一般选择内部(Nat)就足够了，桥接的话有一些小问题，比如只支持有线网卡桥接。
>
> 新建虚拟机网络交换机->内部->改个名字点应用就创建完成了



## 删除磁盘

直接在管理界面，点击”删除“，然后应用。

> 如图
> 
> ![image-20230127151223514](HyperV创建Win虚拟机.assets/image-20230127151223514.png)

## 激活LTSC

找到配置，在开启了管理员权限的powershell中运行。

![image-20230128181635053](HyperV创建Win虚拟机.assets/keep_local/image-20230128181635053.png)

![image-20230128181654761](HyperV创建Win虚拟机.assets/keep_local/image-20230128181654761.png)

貌似失效了。

![image-20230128181728762](HyperV创建Win虚拟机.assets/keep_local/image-20230128181728762.png)


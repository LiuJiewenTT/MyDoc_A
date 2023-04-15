# Win10的虚拟机无法被ssh连接

links:

1. <https://blog.csdn.net/zadaya/article/details/105456227>

## 1

问题：
在学习linux过程中，一直都是使用ssh登录到linux系统上，在尝试使用ssh登录win10的时候却发现超时无响应

![img](https://img-blog.csdnimg.cn/20200411172926436.png)

分析：
经过查询资料问题解决，主要是使用ssh命令并不代表开启了ssh服务器，我们通常在powershell中直接使用的ssh命令其实是win10专业版默认开启了OpenSSH客户端（OpenSSH Client），而现在想要远程ssh登录到win10，则需要开启ssh服务端，下面介绍一下如何如何开启ssh服务端

解决步骤：

1、打开设置——应用，找到可选功能，点击进入

![img](https://img-blog.csdnimg.cn/20200411171247325.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3phZGF5YQ==,size_16,color_FFFFFF,t_70)

2、在可选功能页面，点击添加功能，找到OpenSSH 服务器并安装

![img](https://img-blog.csdnimg.cn/20200411171626912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3phZGF5YQ==,size_16,color_FFFFFF,t_70)

![img](https://img-blog.csdnimg.cn/20200411171726168.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3phZGF5YQ==,size_16,color_FFFFFF,t_70)

3、接下来启动sshserver服务，按win+r打开运行，输入services.msc，并回车键打开

![img](https://img-blog.csdnimg.cn/20200411171950818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3phZGF5YQ==,size_16,color_FFFFFF,t_70)

4、在服务中找到OpenSSH SSH Server 和 OpenSSH Authentication Agent 两个服务，启动它们并右键——属性，设置为自动启动

![img](https://img-blog.csdnimg.cn/20200411172413557.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3phZGF5YQ==,size_16,color_FFFFFF,t_70)

结果：

如此，我们再次尝试ssh登录到win10，成功~

![img](https://img-blog.csdnimg.cn/20200411172845923.png)


------------------------------------------------
版权声明：本文为CSDN博主「zadaya」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/zadaya/article/details/105456227
# ssh与socket

links:

1. <https://www.zhihu.com/question/23575977>

## 1

**问：socket5和ssh的区别？**

ssh 是一种加密的安全传输协议，socket5是代理协议，其实也是一种可加密的传输协议，这两个有什么区别呢？我们经常看到SSH+SOCKS5的说法，SOCKS5本身就能加密了为何还要增加SSH为其提供加密通道呢？

**答：**

SSH 是一种安全协议。

SOCK5是一种代理上网的加密协议。但是用的太普遍，大部分防火墙都能认识，一样能点对点封你使用sock5代理访问的网站。

SSH -D 这种是开的一个SSH的隧道，但是可以传输SOCK5的协议

在防火墙来看。 你访问的只是一个SSH链接。 而在SSH隧道里面使用sock5访问的页面是看不到的。

也就能正常翻墙了。

简单说一句，如果直接使用国外sock5代理,  以前被GFW的网站还是被禁。

如果你用了国外SSH+sock5， 就可以完美穿墙了。

听说现在长期使用某个SSH， 也会被GFW干掉了。

解决办法就是勤换端口换IP

作者：忆风
链接：https://www.zhihu.com/question/23575977/answer/27052797
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
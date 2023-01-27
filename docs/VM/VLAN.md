# VLAN

A link that explains: <https://info.support.huawei.com/info-finder/encyclopedia/zh/VLAN.html>.

已理解:

- [x] 什么是VLAN
- [ ] VLAN vs 子网

未知：

- [ ] VLANIF接口



## 什么是VLAN

VLAN（Virtual Local Area Network）即**虚拟局域网**，是将一个物理的LAN在逻辑上划分成多个广播域的通信技术。

每个VLAN是一个**广播域**，**VLAN内的主机间可以直接通信，而VLAN间则不能直接互通**。这样，广播报文就被限制在一个VLAN内。

<mark>VLAN与VLAN不互通，除非两VLAN在共同广播域。</mark>

**VLAN作用**：

- **限制广播域**：广播域被限制在一个VLAN内，节省了带宽，提高了网络处理能力。
- **增强局域网的安全性**：不同VLAN内的报文在传输时相互隔离，即一个VLAN内的用户不能和其它VLAN内的用户直接通信。
- **提高了网络的健壮性**：故障被限制在一个VLAN内，本VLAN内的故障不会影响其他VLAN的正常工作。
- **灵活构建虚拟工作组**：用VLAN可以划分不同的用户到不同的工作组，同一工作组的用户也不必局限于某一固定的物理范围，网络构建和维护更方便灵活。

## VLAN vs 子网

通过将IP地址的网络部分进一步划分为若干个子网，可以解决IP地址空间利用率低和两级IP地址不够灵活的问题。

与VLAN相类似的是，子网也可以隔离主机间的通信。属于不同VLAN的主机之间不能直接通信，属于不同的子网的主机之间也不能直接通信。**但二者没有必然的对应关系。**

![VLAN vs 子网](https://download.huawei.com/mdl/image/download?uuid=147da9864db1436982755b69d9355464)
*VLAN vs 子网*

这里要明白网段的概念。子网是在同LAN下不同网段的网络。


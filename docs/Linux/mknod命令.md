# mknod命令

links：

1. <https://baike.baidu.com/item/mknod/3561210?fr=aladdin>
2. <https://zhuanlan.zhihu.com/p/32298826>





## 1

## 用途

创建特殊文件。

### 描述

mknod 命令建立一个目录项和一个特殊文件的对应[索引节点](https://baike.baidu.com/item/索引节点/4506518?fromModule=lemma_inlink)。第一个参数是 Name 项设备的名称。选择一个描述性的设备名称。mknod 命令有两种形式，它们有不同的标志。

### 语法

只能由 root 用户或系统组成员运行: 

``` bash
mknod Name { b | c } Major Minor
```

创建 FIFO（已命名的管道）

``` bash
mknod Name { p }
```

## 2


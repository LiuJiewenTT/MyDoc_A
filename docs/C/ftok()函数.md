# ftok()函数

links:

1. <https://developer.aliyun.com/article/1080475>
2. 

## 1

### ftok 函数

ftok 函数介绍

```c
#include<sys/types.h>
#include<sys/ipc.h>
Key_t ftok(const char *pathname, int proj_id);
```

功能：

获得项目相关的唯一的IPC键值。

参数：

pathname: 路径名

Proj_id:  项目ID,非0整数（只有低8位有效）

返回值：

成功返回 key 值，失败返回-1

第一个参数是路径，通过 ftok 函数，只要传进的路径不同，得到的 key 值就不同

第二个参数是共程号，当路径一样时，就通过共程号来区别不同 key 值。

若通过 ftok 函数，传进的路径相同，共程号相同，得到的 key 就相同。

若路径相同，共程号相同，得到的 key 值也相同。

若路径不同，共程号不同，得到的 key 值也不同。

注意：

在操作消息队列的时候，尽量用 ftok 函数指定 key 值，不要人为指定 key 值。
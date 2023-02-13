# semctl()函数

links:

1. <https://www.cnblogs.com/LiuYanYGZ/p/14293309.html>



## 1

### [semctl函数](https://www.cnblogs.com/LiuYanYGZ/p/14293309.html)

摘自：https://blog.csdn.net/shenwansangz/article/details/44259349

**信号量集**

当利用信号量机制解决了单个资源的互斥访问后，我们讨论如何控制同时需要多个资源的互斥访问。**信号量集**是指同时需要 *多个资源* 时的信号量操作。

一般来说，**我们也可以把各进程之间发送的消息作为信号量看待**。

与进程互斥时不同的是，这里的信号量只与制约进程及被制约进程有关而不是与整组并发进程有关。因此，我们称该信号量为私用信号量(Private **Semaphore**)。

一个进程Pi的私用信号量Semi是从制约进程发送来的进程Pi的执行条件所需要的消息。

*互斥时使用的信号量为公用信号量*。

-----------------------------------------------------------------------------------------------------

semctl函数对一个信号量执行各种控制操作。



### 函数声明

------------------------------------------------------------------------------------

``` c
#include <sys/sem.h>
int semctl(int semid, int semnum, int cmd, ... );
```

-------------------------------------------------------------------------------------

 

### 描述

semctl() 在 *semid* 标识的信号量集上，或者该集合的第*semnum* 个信号量上执行 *cmd* 指定的控制命令。(信号量集合索引起始于零。)

根据 *cmd* 不同，这个函数有三个或四个参数。当有四个参数时，第四个参数的类型是 *unionsemun*。*调用程序* 必须按照下面方式定义这个联合体：

``` c
union semun { 
         int              val;               // SETVAL使用的值   
         struct semid_ds *buf;  // IPC_STAT、IPC_SET 使用缓存区
         unsigned short  *array;  // GETALL,、SETALL 使用的数组 
         struct seminfo  *__buf;  // IPC_INFO(Linux特有) 使用缓存区 
}; 
注意：该联合体没有定义在任何系统头文件中，因此得用户自己声明。(centos6.5中/linux/sem.h可以找到)
semid_ds 数据结构在头文件 <sys/sem.h> 有如下定义：
struct semid_ds { 
       struct ipc_perm sem_perm;   // 所有者和权限
       time_t          sem_otime;           // 上次执行 semop 的时间  
       time_t          sem_ctime;           // 上次更新时间 
       unsigned short  sem_nsems;   // 在信号量集合里的索引
 };
结构体 ipc_perm 在头文件 <sys/ipc.h>
中的定义如下（高亮的字段可以使用 IPC_SET 设置）：
struct ipc_perm { 
       key_t          __key;    // 提供给 semget（）的键 
       uid_t          uid;      // 所有者有效 UID  
       gid_t          gid;      // 所有者有效 GID 
       uid_t          cuid;     // 创建者有效 UID 
       gid_t          cgid;     // 创建者有效 GID
       unsigned short mode;     // 权限 
       unsigned short __seq;    // 序列号
}; 

```

cmd 的有效值是：

IPC_STAT

从关联于 *semid* 的内核数据结构复制数据到 *arg.buf* 指向的*semid_ds* 数据结构。参数 *semnum* 被忽略。调用进程必须在保量集合里有读权限。

IPC_SET

把 *arg.buf* 指向的 *semid_ds*结构的一个成员值写入相关于该信号量集合内核结构，同时更新 *sem_ctime*成员。结构中下列成员被更新：*sem_perm.uid*、*sem_perm.gid* 以及*sem_perm.mode* (低端 9位)。调用进程的有效用户ID必须匹配信号量集合的所有者(*sem_perm.uid*)或创建者(*sem_perm.cuid*)，或者调用者必须有特权。参数*semnum* 被忽略。

IPC_RMID

立即删除信号量集合，唤醒所有因调用semop（） 阻塞在该信号量集合里的所有进程(相应调用会返回错误且 *errno*被设置为 EIDRM)。调用进程的有效用户ID必须匹配信号量集合的创建者或所有者，或者调用者必须有特权。参数*semnum* 被忽略。

IPC_INFO （Linux 定义的）

通过 *arg.buf* 指向的结构返回系统范围内的信号量限制和参数。这个结构的类型是*seminfo*，如果宏 _GNU_SOURCE 特性宏被定义，则该结构定义在头文件*<sys/sem.h>* 。

```
struct  seminfo { 
     int semmap;  // 信号量映射里的条数，内核未使用 
     int semmni;  // 信号量集合的最大个数 
     int semmns;  // 在所有信号量集合里信号量个数上限  
     int semmnu;  // 系统范围内的 undo 结构最大个数，内核未使用 
     int semmsl;  // 一个信号量集合里信号量个数上限 
     int semopm;  // 执行的最大操作个数  
     int semume;  // 每个进程内 undo 结构最大个数，内核未使用
     int semusz;  // 结构 sem_undo 的尺寸 
     int semvmx;  // 信号量值的上限
     int semaem;  // Max. value that can be recorded for
                    semaphore adjustment (SEM_UNDO) 
};
```

*semmsl*、*semmns*、*semopm* 和 *semmni* 设置可以通过*/proc/sys/kernel/sem* 更改。



### 返回值

```
失败时 semctl() 返回 -1 并设置 errno 指明错误。

否则该系统调用返回一个依赖于 cmd 的非负值：
```
GETNCNT
semncnt 的值。
GETPID
sempid 的值。
GETVAL
semval 的值。
GETZCNT
semzcnt 的值。
IPC_INFO
内核内部关于所有信号量集合的记录数组的最大索引值。(这个信息可以用于重复执行 SEM_STAT来获得系统内所有信号量集合的信息。)
SEM_INFO
如同 IPC_INFO。
SEM_STAT
索引为 semid 的信号量集合的标识。



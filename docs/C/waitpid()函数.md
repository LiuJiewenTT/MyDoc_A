# waitpid()函数

Links:

1. <https://blog.csdn.net/yiyi__baby/article/details/45539993>
2. https://www.jianshu.com/p/37317590d38b

## 1



## 2

大家知道，当用fork启动一个新的子进程的时候，子进程就有了新的生命周期，并将在其自己的地址空间内独立运行。但有的时候，我们希望知道某一个自己创建的子进程何时结束，从而方便父进程做一些处理动作。同样的，在用ptrace去attach一个进程滞后，那个被attach的进程某种意义上说可以算作那个attach它进程的子进程，这种情况下，有时候就想知道被调试的进程何时停止运行。

以上两种情况下，都可以使用Linux中的waitpid()函数做到。先来看看waitpid函数的定义：

```c
#include <sys/types.h> 
#include <sys/wait.h>
pid_t waitpid(pid_t pid,int *status,int options);
```

如果在调用waitpid()函数时，当指定等待的子进程已经停止运行或结束了，则waitpid()会立即返回；但是如果子进程还没有停止运行或结束，则调用waitpid()函数的父进程则会被阻塞，暂停运行。
 下面来解释以下调用参数的含义：

## pid_t pid

参数pid为欲等待的子进程识别码，其具体含义如下：

| 参数值 | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| pid<-1 | 等待**进程组**号为pid绝对值的**任何子进程**。                |
| pid=-1 | 等待任何子进程，此时的waitpid()函数就退化成了普通的wait()函数。 |
| pid=0  | 等待**进程组号**与**目前**进程相同的**任何子进程**，也就是说任何和调用waitpid()函数的进程在同一个进程组的进程。 |
| pid>0  | 等待进程号为pid的子进程。                                    |

## int *status

这个参数将保存子进程的状态信息，有了这个信息父进程就可以了解子进程为什么会推出，是正常推出还是出了什么错误。如果status不是空指针，则状态信息将被写入器指向的位置。当然，如果不关心子进程为什么推出的话，也可以传入空指针。
 Linux提供了一些非常有用的宏来帮助解析这个状态信息，这些宏都定义在sys/wait.h头文件中。主要有以下几个：

| 宏                  | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| WIFEXITED(status)   | 如果子进程正常结束，它就返回真；否则返回假。                 |
| WEXITSTATUS(status) | 如果WIFEXITED(status)为真，则可以用该宏取得子进程exit()返回的结束代码。 |
| WIFSIGNALED(status) | 如果子进程因为一个未捕获的信号而终止，它就返回真；否则返回假。 |
| WTERMSIG(status)    | 如果WIFSIGNALED(status)为真，则可以用该宏获得导致子进程终止的信号代码。 |
| WIFSTOPPED(status)  | 如果当前子进程被暂停了，则返回真；否则返回假。               |
| WSTOPSIG(status)    | 如果WIFSTOPPED(status)为真，则可以使用该宏获得导致子进程暂停的信号代码。 |

## int options

参数options提供了一些另外的选项来控制waitpid()函数的行为。如果不想使用这些选项，则可以把这个参数设为0。
 主要使用的有以下两个选项：

| 参数      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| WNOHANG   | 如果pid指定的子进程没有结束，则waitpid()函数立即返回0，而不是阻塞在这个函数上等待；如果结束了，则返回该子进程的进程号。 |
| WUNTRACED | 如果子进程进入暂停状态，则马上返回。                         |

- 这些参数可以用“|”运算符连接起来使用。
- **如果waitpid()函数执行成功，则返回子进程的进程号**；
- 如果有错误发生，则返回-1，并且将失败的原因存放在errno变量中。失败的原因主要有：
  - 没有子进程（errno设置为ECHILD），调用被某个信号中断（errno设置为EINTR）或选项参数无效（errno设置为EINVAL）

如果像这样调用waitpid函数：waitpid(-1, status, 0)，这此时waitpid()函数就完全退化成了wait()函数。

作者：Li_Xianglin
链接：https://www.jianshu.com/p/37317590d38b
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


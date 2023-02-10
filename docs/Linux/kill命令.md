# kill命令

linux 的 **kill** 命令是向进程发送信号，**kill** 不是杀死的意思，**-9** 表示无条件退出，但由进程自行决定是否退出，这就是为什么 **kill -9** 终止不了系统进程和守护进程的原因。

links：

1. <https://www.runoob.com/linux/linux-comm-kill.html>
2. [https://baike.baidu.com/item/kill()/2680256](https://baike.baidu.com/item/kill()/2680256)

## Mine

### 信号用途备注

`SIGTERM`：正常退出的信号。

`SIGKILL`：强制退出

## 1



## 2

### Linux C

信号发送函数—kill() [2] 

**头文件**：#include <sys/types.h>#include <signal.h>

**原型**： `int kill(pid_t pid,int signo)`

**功能**

向进程或进程组发送一个信号 （**成功返回 0； 否则，返回 -1 **）

**返回值**

成功返回 0； 否则，返回 -1

**参数说明**

pid：接收信号的进程（组）的进程号

pid>0：发送给进程号为pid的进程

pid=0：发送给当前进程所属进程组里的所有进程

pid=-1：发送给除1号进程和自身以外的所有进程

pid<-1：发送给属于进程组-pid的所有进程

signo：发送的信号值

Signo = **0**：**不发送信号,可用于检查目标进程是否存在**，以及当前进程是否具有向目标进程发送信号的权限（[root权限](https://baike.baidu.com/item/root权限/7460870?fromModule=lemma_inlink)的进程可以向任何进程发送信号，非root权限的进程只能向属于同一个session或者同一个用户的进程发送信号）。

信号值 1 - 31叫做不可靠信号 [3] 不支持排队, 信号可能会丢失, 也叫做非实时信号。

34 - 64 叫做可靠信号，支持排队, 信号不会丢失, 也叫做实时信号

比较常用的一些信号值

SIGHUP 1 A 终端挂起或者控制进程终止

SIGINT 2 A 键盘中断（如break键被按下）

SIGQUIT 3 C 键盘的退出键被按下

SIGILL 4 C 非法指令

SIGABRT 6 C 由abort(3)发出的退出指令

SIGFPE 8 C 浮点异常

SIGKILL 9 AEF Kill信号

SIGSEGV 11 C 无效的内存引用

SIGPIPE 13 A 管道破裂: 写一个没有读端口的管道

SIGALRM 14 A 由alarm(2)发出的信号

SIGTERM 15 A 终止信号

SIGUSR1 30,10,16 A 用户自定义信号1

SIGUSR2 31,12,17 A 用户自定义信号2

SIGCHLD 20,17,18 B 子进程结束信号

SIGCONT 19,18,25 进程继续（曾被停止的进程）

SIGSTOP 17,19,23 DEF 终止进程

SIGTSTP 18,20,24 D 控制终端（tty）上按下停止键

SIGTTIN 21,21,26 D 后台进程企图从控制终端读

SIGTTOU 22,22,27 D 后台进程企图从控制终端写
# signal()函数是什么

**原型：**

``` c
_crt_signal_t __cdecl signal(_In_ int _Signal, _In_opt_ _crt_signal_t _Function);
```

Links：

1. <https://blog.csdn.net/yyyljw/article/details/80741264>

## Mine



## 1

1. 功能
**设置某一信号的对应动作**

2. 声明

  ``` c
#include <signal.h>
typedef void (*sighandler_t)(int);
sighandler_t signal(int signum, sighandler_t handler);
  ```

3. 参数说明　
    第一个参数**signum**：指明了所要处理的信号类型，**它可以取除了SIGKILL和SIGSTOP外的任何一种信号。** 
    第二个参数**handler**：描述了与信号关联的动作，它可以取以下三种值： 


（1）SIG_IGN 　　

这个符号表示**忽略该信号**。 
例如：

``` c
#include <stdio.h>
#include <signal.h>
int main(int argc, char *argv[]) {
    signal(SIGINT, SIG_IGN);
    while(1);
    return 0;
}
```

SIGINT信号代表由InterruptKey产生，通常是CTRL +C 或者是DELETE 。执行上述代码时，按下CTRL + C程序没有反应。这就对了，如果我们想结束该程序可以按下CTRL +\来结束，当我们按下CTRL +\组合键时，产生了SIGQUIT信号，此信号并没有被忽略。

（2）SIG_DFL 　　

这个符号表示**恢复对信号的系统默认处理**。不写此处理函数默认也是执行系统默认操作。 
例如

``` c
#include <stdio.h>
#include <signal.h>
int main(int argc, char *argv[]) {
    signal(SIGINT, SIG_DFL);
    while(1);
    return 0;
}
```

这时就可以按下CTRL +C 来终止该进程了。把signal(SIGINT, SIG_DFL);这句去掉，效果是一样的

（3）sighandler_t类型的函数指针 
上面提到了sighandler_t类型声明：

``` c
typedef void (*sighandler_t)(int);
sighandler_t signal(int signum, sighandler_t handler);
```

此函数必须在signal()被调用前申明，handler中为这个函数的名字。当接收到一个类型为sig的信号时，就执行handler 所指定的函数。（int）signum是传递给它的唯一参数。执行了signal()调用后，进程只要接收到类型为sig的信号，不管其正在执行程序的哪一部分，就立即执行func()函数。当func()函数执行结束后，控制权返回进程被中断的那一点继续执行。 
例如

``` c
#include <stdio.h>
#include <signal.h>
typedef void (*signal_handler)(int);

void signal_handler_fun(int signum) {
    printf("catch signal %d\n", signum);
}

int main(int argc, char *argv[]) {
    signal(SIGINT, signal_hander_fun);
    while(1);
    return 0;
}
```

执行时，当我们按下CTRL +C键时，会执行我们定义的信号处理函数。

``` 
catch signal 2
catch signal 2
catch signal 2
catch signal 2
=退出
```



每当我们按下CTRL +C键时会打印该信号的number.可以看出该信号的num为2。要想退出可以按下CTRL +\ 打印结果为最后一行。

4. 函数说明　
signal()会依参数signum 指定的信号编号来设置该信号的处理函数。当指定的信号到达时就会跳转到参数handler指定的函数执行。

当一个信号的信号处理函数执行时，如果进程又接收到了该信号，该信号会自动被储存而不会中断信号处理函数的执行，直到信号处理函数执行完毕再重新调用相应的处理函数。但是如果在信号处理函数执行时进程收到了其它类型的信号，该函数的执行就会被中断。

5. 返回值
返回先前的信号处理函数指针，如果有错误则返回SIG_ERR(-1)。

6. 一些常用的Signal ：
Signal	Description
SIGABRT	由调用abort函数产生，进程非正常退出
SIGALRM	用alarm函数设置的timer超时或setitimer函数设置的interval timer超时
SIGBUS	某种特定的硬件异常，通常由内存访问引起
SIGCANCEL	由Solaris Thread Library内部使用，通常不会使用
SIGCHLD	进程Terminate或Stop的时候，SIGCHLD会发送给它的父进程。缺省情况下该Signal会被忽略
SIGCONT	当被stop的进程恢复运行的时候，自动发送
SIGEMT	和实现相关的硬件异常
SIGFPE	数学相关的异常，如被0除，浮点溢出，等等
SIGFREEZE	Solaris专用，Hiberate或者Suspended时候发送
SIGHUP	发送给具有Terminal的Controlling Process，当terminal 被disconnect时候发送
SIGILL	非法指令异常
SIGINFO	BSD signal。由Status Key产生，通常是CTRL+T。发送给所有Foreground Group的进程
SIGINT	由Interrupt Key产生，通常是CTRL+C或者DELETE。发送给所有ForeGround Group的进程
SIGIO	异步IO事件
SIGIOT	实现相关的硬件异常，一般对应SIGABRT
SIGKILL	无法处理和忽略。中止某个进程
SIGLWP	由Solaris Thread Libray内部使用
SIGPIPE	在reader中止之后写Pipe的时候发送
SIGPOLL	当某个事件发送给Pollable Device的时候发送
SIGPROF	Setitimer指定的Profiling Interval Timer所产生
SIGPWR	和系统相关。和UPS相关。
SIGQUIT	输入Quit Key的时候（CTRL+\）发送给所有Foreground Group的进程
SIGSEGV	非法内存访问
SIGSTKFLT	Linux专用，数学协处理器的栈异常
SIGSTOP	中止进程。无法处理和忽略。
SIGSYS	非法系统调用
SIGTERM	请求中止进程，kill命令缺省发送
SIGTHAW	Solaris专用，从Suspend恢复时候发送
SIGTRAP	实现相关的硬件异常。一般是调试异常
SIGTSTP	Suspend Key，一般是Ctrl+Z。发送给所有Foreground Group的进程
SIGTTIN	当Background Group的进程尝试读取Terminal的时候发送
SIGTTOU	当Background Group的进程尝试写Terminal的时候发送
SIGURG	当out-of-band data接收的时候可能发送
SIGUSR1	用户自定义signal 1
SIGUSR2	用户自定义signal 2
SIGVTALRM	setitimer函数设置的Virtual Interval Timer超时的时候
SIGWAITING	Solaris Thread Library内部实现专用
SIGWINCH	当Terminal的窗口大小改变的时候，发送给Foreground Group的所有进程
SIGXCPU	当CPU时间限制超时的时候
SIGXFSZ	进程超过文件大小限制
SIGXRES	Solaris专用，进程超过资源限制的时候发
------------------------------------------------
版权声明：本文为CSDN博主「怀想天空2010」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/yyyljw/article/details/80741264
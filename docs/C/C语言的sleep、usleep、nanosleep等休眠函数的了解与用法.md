# C语言的sleep、usleep、nanosleep等休眠函数的了解与用法

## Contents

links:

1. <https://blog.csdn.net/weixin_44732817/article/details/90143888>

[toc]



## Mine

### sleep()

简单地说， sleep 函数实现的功能是 让程序休眠若干秒钟，时间的最小刻度是「秒」。

```c
extern unsigned int sleep (unsigned int __seconds);
```

**sleep 函数的返回值**，
（2）正常：返回值是0,
（3）不会返回表示 错误 信息的值，但是如果返回的值与设定的休眠时间的值一样的话，很可能 sleep 函数其实并没有执行，
（4）返回值类型是 unsigned int 型，也就是说，是一个 非负数 。
**sleep 函数的参数**，
（1）参数的类型是 unsigned int 型，也就是说，是一个 非负数 ，
（2）参数的时间单位是 秒 。

### usleep()

简单地说， usleep 函数实现的功能是 让程序休眠若干秒钟，时间的最小刻度是「微秒」。(1e-6秒)

  ```c
extern int usleep(__useconds_t __useconds);
  ```

**usleep()返回值**：

1. 成功为0，出错为-1

**usleep()参数：**

1. 其实就是unsigned int

### nanosleep()

简单地说， nanosleep 函数实现的功能是 让程序休眠若干秒钟，时间的最小刻度是「纳秒」。(1e-9秒)

``` c
extern int nanosleep (const struct timespec *__requested_time,
		      struct timespec *__remaining);
```

**nanosleep()返回值**：

1. 成功为0，出错为-1

> 这个函数功能是暂停某个进程直到你规定的时间后恢复，参数 req 就是你要暂停的时间，其中 req->tv_sec 是以秒为单位，而 tv_nsec 以纳秒为单位（10的-9次方秒）。
>
> 由于调用 nanosleep 是进程进入 **TASK_INTERRUPTIBLE** ，这种状态是**会响应信号而进入 TASK_RUNNING 状态的**，这就意味着有可能会没有等到你规定的时间就因为其它信号**而唤醒**，此时函数返回 -1 ，切换**剩余的时间**会被记录在 rem 中。
>
> return值: 若进程暂停到参数 *req 所指定的时间，成功则返回0；若有信号中断则返回-1，并且将剩余微秒数记录在 *rem 中。

**nanosleep()参数：**

1. 

## 1

<https://blog.csdn.net/weixin_44732817/article/details/90143888>



<iframe style="width:100%; height:800px" src="https://blog.csdn.net/weixin_44732817/article/details/90143888"></iframe>



Github Page version do not show iframe.

### 注意

注意
`unistd.h` 是 `unix` 系统标准头文件，用于系统调用，相当于 *win32* 中的 `windows.h` ， `unistd.h` 定义的函数只能用于 *UNIX* 环境中，而不能用于 *windows* 。
所以 sleep 和 usleep 只能用于 Linux / Unix 下，而不能用于 windows 。

> （Windows记得是可以用sleep()的）

nanosleep 和 其它时间日期操作函数 一样，都是定义在 time.h 中的，所以都适用。
使用 clang 编译c程序文件的时候，提示「警告」说， usleep 和 nanosleep 在 C99 中是非法的。不过因为实际采用的是 C11 标准，所以还是编译通过了，也能正常执行。这里只是 clang 的一个善意的提醒吧。


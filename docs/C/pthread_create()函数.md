# pthread_create()函数



links:

1. <https://blog.csdn.net/wushuomin/article/details/80051295>



## 1

总述：pthread_create是（Unix、Linux、Mac OS X）等操作系统的创建线程的函数。它的功能是创建线程（实际上就是确定调用该线程函数的入口点），在线程创建以后，就开始运行相关的线程函数。
pthread_create的返回值表示成功，返回0；表示出错，返回表示-1。

### pthread_create函数如何创造线程

函数原型声明：

``` c
#include <pthread.h>
int pthread_create(
                 pthread_t *restrict tidp,   //新创建的线程ID指向的内存单元。
                 const pthread_attr_t *restrict attr,  //线程属性，默认为NULL
                 void *(*start_rtn)(void *), //新创建的线程从start_rtn函数的地址开始运行
                 void *restrict arg //默认为NULL。若上述函数需要参数，将参数放入结构中并将地址作为arg传入。
                  );
```

1.传递参数注意的问题

问题：
避免直接在传递的参数中传递发生改变的量，否则会导致结果不可测。
即使是只再创造一个单线程，也可能在线程未获取传递参数时，线程获取的变量值已经被主线程进行了修改。

通常解决方案：
重新申请一块内存，存入需要传递的参数，再将这个地址作为arg传入。

2.使用时注意防止内存泄漏
在默认情况下通过pthread_create函数创建的线程是非分离属性的，由pthread_create函数的第二个参数决定，在非分离的情况下，当一个线程结束的时候，它所占用的系统资源并没有完全真正的释放，也没有真正终止。

只有在pthread_join函数返回时，该线程才会释放自己的资源。
或者是设置在分离属性的情况下，一个线程结束会立即释放它所占用的资源。

如果要保证创建线程之后，确保无内存泄漏，必须采用如下方法来规范pthread_create的使用:

1. 设置线程是detached（分离属性的）

```c
void run() { 
    return;
} 

int main(){ 
    pthread_t thread; 
    pthread_attr_t attr; 
    pthread_attr_init( &attr ); 
    pthread_attr_setdetachstate(&attr,1); 
    pthread_create(&thread, &attr, run, 0); //第二个参数决定了分离属性
    //...... 
    return 0; 
} 
```
但是，在博客：https://blog.csdn.net/qiurisuixiang/article/details/6648213评论中，有人提到：

![评论者](pthread_create()函数.assets/2018042315245090)


2. 配套使用pthread_join函数
pthread_join()函数会一直阻塞调用线程，直到指定的线程终止。当pthread_join()返回之后，应用程序可回收与已终止线程关联的任何数据存储空间。
但是，同时需要注意，一定要和上面创建的某一线程配套使用，这样还可以起到互斥的作用。否则多线程可能抢占CPU资源，导致运行结果不确定。

牛客一道题目： 下面程序输出结果是什么？（不能确定）

```c
#include<stdio.h>
#include<string.h>
#include <pthread.h>

void* print1(void* data){
    printf("1 ");
}

void* print2(void* data){
    printf("2 ");
}

void* print3(void* data){
    printf("3 ");
}

int main(void){
    pthread_t t,t1,t2;
    pthread_create(&t,0,print1,NULL);
    pthread_create(&t1,0,print2,NULL);
    pthread_create(&t2,0,print3,NULL);

    pthread_join(t,NULL);
    pthread_join(t1,NULL);
    pthread_join(t2,NULL);
    printf("\n");
}

```
分析：
在pthread_join()之前，3个线程都已提交，它们可能都已经顺序随机地执行了，也可能没有，所以结果也是不可预测的。不过这样也可以起到回收内存的作用吧？

``` c
//这样才是按顺序的。
pthread_create(&t, 0, print1, NULL);
pthread_join(t, NULL);
pthread_create(&t1, 0, print2, NULL);
pthread_join(t1, NULL);
pthread_create(&t2, 0, print3, NULL);
pthread_join(t2, NULL);
```

### 补充：pthread_join（）函数
函数原型：

``` c
int pthread_join(
               pthread_t tid, //需要等待的线程,指定的线程必须位于当前的进程中，而且不得是分离线程
               void **status  //线程tid所执行的函数返回值（返回值地址需要保证有效），其中status可以为NULL
                 );
```


pthread非linux系统的默认库， 需手动链接-线程库 -lpthread

返回值：
调用成功返回0.
ESRCH
描述: 没有找到与给定的线程ID 相对应的线程。（如果多个线程等待同一个线程终止，则所有等待线程将一直等到目标线程终止。然后一个等待线程成功返回。其余的等待线程将失败返回ESRCH错误）
EDEADLK
描述: 将出现死锁，如一个线程等待其本身，或者线程A和线程B 互相等待。
EINVAL
描述: 与给定的线程ID相对应的线程是分离线程。

------------------------------------------------
版权声明：本文为CSDN博主「wushuomin」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/wushuomin/article/details/80051295
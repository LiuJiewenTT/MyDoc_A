# python打包后，执行报错：NameError: name ‘exit‘ is not defined

出现问题的伪代码如下：

```python
try:
    file_name = os.path.basename(src)
    file_size = os.stat(src).st_size
except Exception:
    print("源文件不存在:", src)
    exit()
```
在ide使用中没有问题，但是封装成应用程序时就出现问题：

![online picture](https://img-blog.csdnimg.cn/20210629161346585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDIxNDgzMA==,size_16,color_FFFFFF,t_70)

<p style="color:red">NameError: name 'exit' is not defined</p>

百度了一圈后解决办法如下：将`exit()`，改为`sys.exit()`

``` python
import sys

   try:
        file_name = os.path.basename(src)
        file_size = os.stat(src).st_size
    except Exception:
        print("源文件不存在:", src)
        sys.exit()
```


# Python 中的 exit() 和 sys.exit() 的区别
现在来了解下 Python 中的 `exit()` 和 `sys.exit()`

> exit is a helper for the interactive shell - sys.exit is intended for use in programs.

> The site module (which is imported automatically during startup, except if the -S command-line option is given) adds several constants to the built-in namespace (e.g. exit). They are useful for the interactive interpreter shell and should not be used in programs.

> Note that there is a third exit option, namely os._exit, which exits without calling cleanup handlers, flushing stdio buffers, etc. (and which should normally only be used in the child process after a fork()).

上面的意思是 `exit` 用于给交互式 Shell 返回值，而 `sys.exit` 是用于程序内部。

- `exit()`/`quit()`, 抛出 SystemExit 异常. 一般在交互式 Shell 中退出时使用.
- `sys.exit(n)` 退出程序引发 SystemExit 异常, 可以捕获异常执行些清理工作. n 默认值为 0, 表示正常退出. 其他都是非正常退出. 还可以 sys.exit(“sorry, goodbye!”); 一般主程序中使用此退出.
- `os._exit(n)`, 直接退出, 不抛异常, 不执行相关清理工作. 常用在子进程的退出.

------------------------------------------------
版权声明：本文为CSDN博主「马克图布s」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_44214830/article/details/118337774
# fork()函数

**复刻**（英语：fork，又译作**派生**、**分支**）是UNIX或类UNIX中的分叉函数，*fork函数将运行着的程序分成2个（几乎）完全一样的进程，每个进程都启动一个从代码的**同一位置**开始执行的线程。这两个进程中的线程继续执行，就像是两个用户同时启动了该应用程序的两个副本*。

**返回值**：

1. 负值：创建子进程失败
2. 零：表示进入子进程。
3. 正值：表示进入父进程，但值为子进程的id
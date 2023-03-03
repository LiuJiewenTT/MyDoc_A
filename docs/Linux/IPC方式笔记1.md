# IPC方式笔记

IPC(Inter-Process Communication)，进程间通信。

## IPC的五种方式

1. 管道
2. 消息队列
3. 共享内存
4. 信号量
5. socket

## 比较

|   Approach    | Wait Fetching Out | Copy Memory | Disorder in Calling | Far Distance Tranfer |
| :-----------: | :---------------: | :---------: | :-----------------: | :------------------: |
|     Pipe      |         y         |      y      |          -          |          -           |
| Message Queue |         x         |      y      |          -          |          -           |
| Shared Memory |         x         |      x      |          y          |          x           |
|   Semaphore   |         x         |      x      |          x          |          x           |
|    Socket     |         x         |      -      |          -          |          y           |

<small>Note: '-' is not sure. 'y' is confirm. 'x' is denial. </small>


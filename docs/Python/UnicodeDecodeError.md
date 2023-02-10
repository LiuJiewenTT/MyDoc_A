# UnicodeDecodeError

links:

1. <https://blog.csdn.net/mighty13/article/details/107132272>



## 1

问题现象：

在Windows下使用Python读文件时，经常遇到UnicodeDecodeError: 'gbk' codec can't decode byte 0xff in position 0: illegal multibyte sequence错误。

在open函数参数中设置encoding='utf-8'也不能解决问题，会出现UnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte类似错误。

问题原因：

该问题的根源在于Windows中与Unicode的编码方法。

以系统自带的记事本为例:
记事本“另存为”中有4种编码方式，含义为：

ANSI: 对英文系统即ASCII 对中文系统即gbk/big5
Unicode: UTF-16(LE)
Unicode big endian: UTF-16(BE)
UTF-8:UTF-8-SIG
其中Unicode相关编码方式有3种，这3种编码方式的区别不再赘述，我们可以从文件的头部（即Windows中的特色！BOM:byte order mark）来区分一个文件是属于哪种编码。当头部开始的两个字节为 FF FE时，是UTF-16(LE)编码；当头部的两个字节为FEFF时，是UTF-16(BE)编码；当头部两个字节为EF BB时，是UTF-8-sig编码。

因此，错误信息中0xff说明文件的编码为UTF-16！因此，设置UTF-8编码根本不解决问题。

解决方法：

在open函数encoding参数中设置正确的文件编码。

推荐使用chardet模块，检测文件编码方式。chardet非标准库模块，需要安装：pip install chardet

示例代码：

``` python
def check_charset(file_path):
    import chardet
    with open(file_path, "rb") as f:
        data = f.read(4)
        charset = chardet.detect(data)['encoding']
    return charset

your_path = 你的文件路径
with open(your_path, encoding=check_charset(your_path)) as f:
    data = f.read()
    print(data)
```

------------------------------------------------
版权声明：本文为CSDN博主「mighty13」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/mighty13/article/details/107132272
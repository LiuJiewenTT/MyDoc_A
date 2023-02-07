# 获取package资源

本文摘抄，部分修改。

## Contents

[toc]

## 链接

1. <https://www.jb51.net/article/195624.htm>
2. <https://learnku.com/docs/pymotw/pkgutil-package-utilities/3493#94d86d>
   <https://docs.python.org/3.8/library/pkgutil.html>

## 获取package中的资源的正确方法

使用`importlib`中的`resources`。（需要python3.7， 否则用笨办法获取完整路径）

``` python
from importlib import resources 
from . import deep_folder 

def read_file(): 
  with resources.open_text(deep_folder, 'test.txt') as f: 
    content = f.read() 
  print('文件中的内容为：', content) 
```

笨办法：

``` python
import os 
def read_file(): 
  current_folder = os.path.dirname(__file__) 
  resource_path = os.path.join(current_folder, 'test.txt') 
  with open(resource_path) as f: 
    content = f.read() 
  print('文件中的内容为：', content) 
```

如果你读取的不是文本文件，那么你可以把`resources.open_text`改成`resources.open_binary`，从而读取二进制文件。

但需要注意的是，资源文件必须放在包的根目录。这样才能正确读取。如果资源文件在包内部的子目录中，importlib.resources是不能直接读取的，*需要把子目录也变成一个包*。

## 使用pkgutl.get_data

除了代码之外， Python 包还可以包含数据文件，例如模板、默认配置文件、图像以及包中代码使用的其他支持文件。 `get_data()` 函数以格式无关的方式访问文件中的数据，因此无论软件包是作为 EGG 冻结二进制文件的一部分，还是文件系统上的常规文件分发都无关紧要。

使用包含 `templates` 目录的包 `pkgwithdata`

``` 
find pkgwithdata -type f

pkgwithdata/__init__.py
pkgwithdata/templates/base.html
```

该程序使用 `get_data()` 来检索模板内容并将其打印出来。

``` python
# File name: pkgutil_get_data.py
import pkgutil

template = pkgutil.get_data('pkgwithdata', 'templates/base.html')
print(template.decode('utf-8'))
```

`get_data()` 的参数是包的点名，以及相对于包顶部的文件名。 返回值是一个**字节序列**，因此在打印之前进行 UTF-8 解码。
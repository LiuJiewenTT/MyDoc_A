# strrchr()函数

本文摘抄自[www.runoob.com](https://www.runoob.com/cprogramming/c-function-strrchr.html).

## 原型

``` c
char *strrchr(const char *str, int c)
```

## 作用

在参数 **str** 所指向的字符串中搜索最后一次出现字符 **c**（一个无符号字符）的位置。

## 参数

- **str** -- C 字符串。
- **c** -- 要搜索的字符。以 int 形式传递，但是最终会转换回 char 形式。

## 返回值

该函数返回 str 中最后一次出现字符 c 的位置。如果未找到该值，则函数返回一个空指针。

## 实例

下面的实例演示了 strrchr() 函数的用法。

## 实例

``` c
#include <stdio.h> 
#include <string.h>  
int main () {   
    int len;   
    const char str[] = "https://www.runoob.com";   
    const char ch = '.';   
    char *ret;    
    ret = strrchr(str, ch);    
    printf("|%c| 之后的字符串是 - |%s|\n", ch, ret);      
    return(0); 
}
```

让我们编译并运行上面的程序，这将产生以下结果：

```
|.| 之后的字符串是 - |.com|
```


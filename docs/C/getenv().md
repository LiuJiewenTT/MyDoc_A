# getenv()

## 百科

**getenv是函数名，从环境中取 字符串 ,获取 环境变量 的值，getenv ()用来取得参数envvar环境变量的内容**。 参数 envvar为环境变量的名称，如果该变量存在则会返回指向该内容的指针。 环境变量的格式为envvar=value。 getenv 函数 的返回值存储在一个全局二维数组里，当你再次使用getenv函数时不用担心会覆盖上次的调用结果。

**中文名:** getenv

**功能:** 环境中取字符串获取环境变量的值

**头文件:** stdlib.h

**相关函数:** _wgetenv

**获取:** 环境变量

参考: [baike.baidu.com/item/getenv/935515](https://baike.baidu.com/item/getenv/935515#:~:text=getenv是函数名，从环境中取 字符串 %2C获取 环境变量 的值，getenv ()用来取得参数envvar环境变量的内容。,参数 envvar为环境变量的名称，如果该变量存在则会返回指向该内容的指针。 环境变量的格式为envvar%3Dvalue。 getenv 函数 的返回值存储在一个全局二维数组里，当你再次使用getenv函数时不用担心会覆盖上次的调用结果。)

## 菜鸟

C 库函数 **char \*getenv(const char \*name)** 搜索 name 所指向的环境字符串，并返回相关的值给字符串。

```
char *getenv(const char *name)
```

- **name** -- 包含被请求 *变量名称* 的 C 字符串。

**返回值**

该函数返回一个以 null 结尾的字符串，该字符串为被请求环境变量的值。如果该环境变量不存在，则返回 NULL。


# python sql占位符说明

links:

1. <https://www.jianshu.com/p/117a8fe38096>



## 1

 [李鸭还有礼了](https://www.jianshu.com/u/f2ecfe559bf2) IP属地: 浙江

2019.05.26 22:51:44字数 118阅读 2,070

```python
 sql2 = "insert into stu_inf (id,sex,age,grade,name) VALUES (%d,%s,%s,%s,%s) "  #执行插入数据语句
```

在执行上述语句的过程中，sql会进行 一下报错：

```bash
  unsupported format character 'd' (0x64) at index 53
```

产生的报错的主要原因是因为python的sql占位符引起的，sql中的字符串格式化不是标准的python的字符串格式化；

**python中无论整数，字符串占位符都为 %s，且不需加单引号**

若产生以上描述的错误，只需将上述的sql脚本改为如下即可：

```python
 sql2 = "insert into stu_inf (id,sex,age,grade,name) VALUES (%s,%s,%s,%s,%s) "  #正确脚本，只需将原先int型“%d”占位符改为“%s”即可
```

[link](https://www.jianshu.com/p/117a8fe38096)
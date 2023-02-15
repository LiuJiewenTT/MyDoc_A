---
author: unknown
---

# JS代码放在head和body中的区别

link: 

1. <https://www.jb51.net/article/29038.htm>

> **放在head中的JS代码会在页面加载完成之前就读取，而放在body中的JS代码，会在整个页面加载完成之后读取**。

那么有什么不同呢？先看一个例子：
一个二级级联动态下拉列表框，一级分类（即大类别）id="vSort0".

复制代码代码如下:

``` html
<head>
function changelocation(id)
{…………}
</head>
<body>
    <select class="input1" id="vSort0" name="vSort0" onChange="changelocation(document.form4.vSort0.options[document.form4.vSort0.selectedIndex].value);" style="width:100px;">……省略……</select>
………………
</body>
```


现在有个js脚本：

复制代码代码如下:

``` HTML
<script LANGUAGE= "JavaScript" >
    changelocation(document.form4.vSort0.options[document.form4.vSort0.selectedIndex].value); 
// 初始化第一个一级分类的二级分类，去掉后第一个一级分类的二级分类在页面载入之后不显示。回选才显示。将一级分类的value传给changelocation()函数,生成二级分类的列表
</script>
```

那么把这个js脚本放head里面还是body里面呢？
答案是不仅要放到body里面，而且还得放到定义id='vSort0'的列表框后面，因为这个js脚本中有document.form4.vSort0.selectedIndex，如果放到head里或者body的id='vSort0'前，页面加载后顺序执行代码，执行到这个js发现vSort0未定义（即undefind），这个js也就失去了作用。
而为什么我们经常看到有很多的人把js脚本放到head里面没事呢？对！
就是因为你看到的在head里的js代码有onclick等事件传递了变量给函数。
这就告诉我们，如果我们想定义一个全局对象，而这个对象与页面中的某个按钮（等等）有关时， 我们必须将其放入body中，道理很明显：如果放入head，那当页面加载head部分的时候，那个按钮（等等）都还没有被定义（也可以说是还没有被加 载，因为加载的过程就是执行代码的过程，包括了定义），你能得到的只可能是一个undefind。
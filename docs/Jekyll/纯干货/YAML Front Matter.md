# YAML Front Matter

如果你要设置：

1. 日期(date)
2. 类编(categories)
3. 标签(tags)

这里为了使用方便，统一不使用`category`和`tag`，而采用相应的`categories`和`tags`。

## Date

``` yaml
date: 2023-5-8 20:49:00 +0800
```

最后一个参数是与UTC时间的偏移。相信我，这个参数是有必要的。

## Categories and Tags

他们是相同的格式，都是使用相应的数组表示方法。

``` yaml
categories: [classA, class B, newclass]
tags: [tag1, tag2, tag3]
```

**以下**用法是**错误**的：

---

**第一种**：使用逗号分隔。

``` yaml
tags: Create, Mod, Stars
```

![image-20230508205315479](YAML HEADER.assets/image-20230508205315479.png)

结果：

> 被识别为：`Create, Mod, Stars`一个标签，是的，就**一个！**
>
> 有图为证：![image-20230508205558432](YAML HEADER.assets/image-20230508205558432.png)

**第二种**：使用单纯空格分隔

``` yaml
tags: Minecraft MC Create Mod
```

![image-20230508205500631](YAML HEADER.assets/image-20230508205500631.png)

结果：

> 被识别为：`Minecraft MC Create Mod`一个标签，是的，就**一个！**
>
> 有图为证：![image-20230508205709363](YAML HEADER.assets/image-20230508205709363.png)
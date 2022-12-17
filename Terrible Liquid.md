# Terrible Liquid

To record tips and bugs....

天天看天天看，麻的照着官方Template都没折腾出来。。。做好模板以后就不轻易动了。。

## 不要嵌套，不要嵌套！

不管是把*Liquid code*放在哪里，运行指令的不要嵌套不和其他语言混合排版，尽量单独一行，特别是markdown文件中！

**以下不可以**：

{% raw %}

1. `<small>{% if ... %}<small>`：编译错误！
2. `[...a]({% raw %})`和`[...a]({% endraw %})`：编译错误！
3. `<!-- {% if ... %} -->`：无效！！照样运行！

{% endraw %}

**正确**：

在**markdown**中：

{% raw %}

```
{% raw %}
...something
{% endraw %}
```

{% endraw %}
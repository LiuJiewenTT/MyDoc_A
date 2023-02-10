# mysql特殊的项目名称

此处的项目指 *数据库名、表名、字段名*，*值* 仍然是使用`'`或`"`包围。

``` mysql
UPDATE `临时a4数据库`.`1635370493@qq.com` SET `id` = 1, `email` = 'abc@xyz.com' WHERE `id` = 1 AND `email` = 'abc@xyz.com' LIMIT 1;
```

以上是我通过 *Navicat* 导出的 *UPDATE* 语句。很明显了吧？
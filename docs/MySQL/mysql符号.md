# MySQL符号

links：

1. <https://www.jianshu.com/p/667bcae2fc31>



## 1

# 你需要了解的sql转义符

[![img](https://upload.jianshu.io/users/upload_avatars/6993402/e85bac2a-d845-4634-8b72-506c3a77401f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp)](https://www.jianshu.com/u/da3042538b38) [刘晓佳rachel](https://www.jianshu.com/u/da3042538b38) IP属地: 四川

2021.04.09 14:16:38字数 1,794阅读 6,723

你需要了解的sql转义符
作者：刘晓佳Rachel
一、 问题引入
部分sql报错如下：`mismatched input 'from' expecting {<EOF>, '|'}`
对于在sql方面知识极大欠缺的小白，在测试过程中查询sql语句时，遭遇数据库无情的报错打击。经过分析，发现是由于sql语句中包含特殊字符需要转义，但却无法正确使用转义符（python背景习惯性使用\），结果一再出错。
那么，现在让我们来简单了解下，什么是sql及如何正确使用转义符处理特殊字符？
二、 什么是sql
SQL 是用于访问和处理数据库的标准的计算机语言。结构化查询语言(Structured Query Language)简称SQL，是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统；同时也是数据库脚本文件的扩展名。可以支持包括DB2、SQL/DS、ORACLE、INGRES、SYBASE、SQLSERVER、DBASEⅣ、PARADOX、MICROSOFTACCESS等多种版本数据库。
此处敲黑板：SQL是用于访问和处理数据库的标准的计算机语言，关键“标准“。
虽然SQL是一门ANSI（American National Standards Institute 美国国家标准化组织）标准的计算机语言，但是任然存在着多种不同版本的SQL语言，且大部分SQL数据库程序都有自己的专有扩展。然而，为了与ANSI标准相兼容，它们必须以相似的方式共同地来支持一些主要的命令（比如SELECT、UPDATE、DELETE、INSERT、WHERE等等）。
三、 测试工作中常用的sql语法
显而易见，select你可以站起来发炎了。
select语句是测试工作中常常用到的，用于查询数据库中的内容。如：select * from table where id=123；
说到这里，不得不提一下sql查询中where过滤条件中的一些特殊字符的作用。

1. 特殊字符单、双引号‘’，““
   单、双引号用来包含字符串，不能用来环绕数值。如：
   select * from table where city=‘chengdu’;
2. 特殊字符?
   占位符，经常在单个行或组的搜索条件中（即在 sql 语句的 where 或 having子句中）用作占位符，通过传入参数或设定参数取代所占用的位置，完成字符串的拼接。如：
   1）String sql = "SELECT userid,name FROM tuser WHERE userid=? AND password=?" ;
   2）pstmt = conn.prepareStatement(sql) ;
   3）pstmt.setString(1,userid) ; // 这里设置了第一个？的值
   4）pstmt.setString(2,password) ; // 这里设置了第二个？的值 等你“setString”完所有的？后，你的sql就构造好了。
3. 特殊字符$
4. 通配符*
   *通配符的作用是用来匹配所有结果集，就如常用的select *可以搜出出匹配的所有结果。
5. 通配符%
   模糊查询符号，长和like匹配，用于替代一个或多个字符。如：
   select * from table where city like ‘%chengd%’;
   可以查询出city=chengdu的结果，优先级低于*。
6. 通配符_
   可以匹配任意一个字符。如：
   select * from table where city like ‘ch_ng_u’;
   可以查询出city=chengdu的结果。
7. 特殊字符|
   逻辑非，用于将过滤条件取非。如：
   select * from table where city !=’chengdu’;
   可以查询出所有city不等于chengdu的结果。注意：该运算符不能与其他运算符一起使用。例如，不能将 ! 和 > 运算符组合为 !>. 运算符。
8. 特殊字符^
   位异或，对两个整数值执行“位异或”运算。它会将第一个操作数的每一位与第二个操作数中对应的每一位进行比较。两个条件必须都为有符号的整数数据类型，或都为无符号的整数数据类型。
9. 特殊字符|
   位或，对两个整数值执行“位或“运算，相当于字符串比较重的or。
10. 特殊字符~
    位非，对两个整数值执行“位非“运算，相当于字符串比较中的not。
11. 特殊字符&
    位与，对两个整数值执行“位与”运算，相当于字符串比较中的and。
12. 其他特殊字符<，>等
    在此不一一解释。
    四、 什么情况需要对特殊字符转义
    举个栗子。
    select * from table where city=’che’gdu’;
    当你输入这样一个sql的时候，数据库会告诉你：错啦错啦~
    为什么呢？
    因为，单引号表示字符串的开始和结束，你使用三个单引号，数据库不知道什么时候结束（懵逼脸）。
    这个时候，你就需要转义啦！！！
    同样，对于双引号”，分号;，冒号：，小括号(，中括号[，分隔符|（字符串中），斜杠\，@符号也都需要转义。
    因为这些符号在sql语句中有它自身本来的含义，当你仅仅是把它当作一个（没有感情和意义的）字符串符号时，你需要告诉数据库： “嘿，这里的这个字符是我字符串的一部分，请不要像平常一样将其视为特殊字符”。
    五、 如何使用转义符
13. sql转义符是什么
    没有理由，记住就行了，sql的转义符是单引号’。
14. 如何使用转义符
    在需要转义的特殊符号前加单引号’。
    1） 对于字符串中包含单引号‘
    所以select * from table where city=’che’gdu’;这个sql改写为：select * from table where city=’che’’gdu’;就可以了啦。
    2） 对于字符串中包含百分号%
    如：select * from table where city like ‘%%engdu’;
    改写为：select * from table where city like ‘%’%engdu’;
    3） 对于字符串中包含通配符
    如：select * from table where city like ‘%*engdu’;
    改写为：select \* from table where city like ‘%’*engdu’;
    4） 对于字符串中包含双引号”
    注意，双引号转义需要两个单引号’’。
    如：select * from table where city=’cheng”du’;
    改写为：select * from table where city=’cheng’’”du’;
    其他不再一一举例。
15. 如何临时定义转义符
    如果你不知道sql转义符是什么，那么可以使用escapse临时定义。如：select * from table where city like '%_%' escape '';
    在此处指定了ESCAPE''关键字。这意味着\字符将用作转义字符，这将强制*实际使用*而不是用作通配符。
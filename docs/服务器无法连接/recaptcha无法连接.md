# recaptcha无法连接

## Mine

去查询可用IP地址，例如：<www.ip.cn>.

查到后使用`ping`检验一下是否真的能联通。如果可以，添加到本地DNS：

1. 以管理员身份运行*cmd.exe* (或*powershell*).

2. `cd %SystemRoot%/system32/drivers/etc`

3. 存档、修改和备份hosts文件

   1. `mkdir repo`

   2. 如果旧的没备份，那么建议备份一下。可以按照第三步来备份。

   3. 修改

      1. `call notepad.exe hosts`
      2. 修改完保存并关闭*notepad.exe*。

   4. 创建对应时间的文件夹

      1. 手动方案（最简单）

         1. `mkdir repo\[日期]`
         2. `copy hosts repo\[日期]\hosts`

      2. 自动-方案1（最精细、自动化）

         > ps. 可以改用Powershell提到效率，只需稍微改改命令

         1. `for /f "delims=" %i in ('powershell -command "get-date -format o | foreach {$_ -replace \":\",\".\"}" ') do (set timestamp=%i)`
         2. `mkdir repo\%timestamp%`
         3. `copy hosts repo\%timestamp%\hosts`

      3. 自动-方案2（最简洁、自动化）

         > ps. 可以改用Powershell提到效率，只需稍微改改命令

         1. `for /f "delims=" %i in ('powershell -command "get-date -uformat \"%Y-%m-%d\"') do (set timestamp=%i)`
         2. `mkdir repo\%timestamp%`
         3. `copy hosts repo\%timestamp%\hosts`

      4. 自动-方案3（最高效、自动化）

         1. `for /f %i in ("%DATE%") do (set timestamp=%i)`
         2. `mkdir "repo\%timestamp%"`
         3. `copy hosts "repo\%timestamp%\hosts"`

4. 顺手刷新dns缓存：`ipconfig /flushdns`

完成。注意，一定要通过修改hosts的方式，通过浏览器插件重定向到IP大概率是不行的。

---

以下展现效果：

1. 手动方案举例：`repo\20230407\hosts`
2. 自动方案1样例：`repo\2023-04-11T21.36.24.4128152+08.00\hosts`
3. 自动方案2样例：`repo\2023-04-11\hosts`
4. 自动方案3样例：`repo\2023\04\11\hosts`




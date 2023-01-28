# 禁用Windows Update

[toc]

## References

1. [link](https://baijiahao.baidu.com/s?id=1732432888882246429).



## Method 1

1. 禁用服务`Windows Update`，即：`wuauserv`

2. 组策略中禁用`配置自动更新`，启用`删除访问权限`

   > 计算机配置 -> 管理模板 -> Windows组件 -> Windows更新

3. 任务计划中禁用

   > 任务计划程序库 -> Microsoft -> Windows -> WindowsUpdate

4. 注册表中关闭

   > 定位到：[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\UsoSvc]，找到“Start”键，改为4；“FailureActions”键，右键点击修改该键的二进制数据，将“0010”、“0018”行的左起第5个数值由原来的“01”改为“00”。
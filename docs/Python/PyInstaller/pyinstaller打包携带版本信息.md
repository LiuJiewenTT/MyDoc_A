# pyinstaller打包携带版本信息

links：

1. <https://blog.csdn.net/u012219045/article/details/113977724>
2. MS: <https://learn.microsoft.com/zh-cn/windows/win32/api/verrsrc/ns-verrsrc-vs_fixedfileinfo?redirectedfrom=MSDN>
3. <https://zhuanlan.zhihu.com/p/91641869>
4. <https://www.cnblogs.com/comor/p/10607383.html>

## 1

在`.spec`文件中：

``` python
exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    name='labelme',
    debug=False,
    strip=False,
    upx=True,
    runtime_tmpdir=None,
    console=False,
    icon='labelme/icons/icon.ico',
    version="file_verison_info.txt"
)
```

此处使用`version`键指定版本信息文件。

信息文件应当遵循*2*的要求。

## 2


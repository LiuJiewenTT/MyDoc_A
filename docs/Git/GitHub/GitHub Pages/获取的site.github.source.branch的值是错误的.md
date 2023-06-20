---
date: 2023-6-4 22:06:00 +0800
categories: [GitHub, GitHub Pages]
tags: [GitHub, GitHub Pages]
---

# 获取的site.github.source.branch的值是错误的

这个问题我也感到非常迷惑，怎么可能会有这么低级的错误？

然后我转到*Environment*当中，三个准许的选项，我一点开`docs_only`，好家伙！是这样的：

![image-20230604220329966](获取的site.github.source.branch的值是错误的.assets/image-20230604220329966.png)

绝了。我直接就把这条规则移除掉了<del>，现在正常了</del>。
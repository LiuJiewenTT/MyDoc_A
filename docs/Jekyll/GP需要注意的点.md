# GP需要注意的点

GP[^GP]

1. Jekyll官方的说法是`_post`前的路径才会被识别为`categories`，所以如果你的文档不在`_post`下，那就不会生成这些数据。
2. 不在`_post`中的都被识别为`page`，因此引用对应的`tags`应当使用`page.tags`而不是`post.tags`。
3. <del>似乎</del>只有`_post`的`tag`才会被考虑到`site.tags`当中，而`page.tags`似乎不会。按官方的说法，就是指**Post**。`categories`也是同理。
4. 



[^GP]: Github Pages
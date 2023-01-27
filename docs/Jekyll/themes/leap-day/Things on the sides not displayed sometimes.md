# Things on the sides not displayed sometimes

有时屏幕尺寸不够，左侧右侧的东西都不会显示。也就看不到导航了。

我去翻了翻主题的项目文件[_sass/jekyll-theme-leap-day.scss](https://github.com/pages-themes/leap-day/blob/master/_sass/jekyll-theme-leap-day.scss), 以脚注`footer`距离，定位到第358行：

``` scss
footer {
  width:180px;
  position: fixed;
  left:50%;
  margin-left:-530px;
  bottom:20px;
  text-align: right;
  line-height: 16px;
}
```

我想，这是因为`margin-left`这个属性。它被设置为负值，所以<del>左侧剩余空间达不到这个数值的时候就不会显示</del>。是因为`display`属性被设置为`none`了。

再往下做了分辨率的适配，这里发现设置都很简单，比如`footer`的`text-align`属性被从`right`改成了`center`。
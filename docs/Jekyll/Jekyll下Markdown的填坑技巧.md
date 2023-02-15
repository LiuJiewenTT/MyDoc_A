# Jekyll下Markdown的填坑技巧

本文摘抄自：[网页](https://eipi10.cn/others/2019/12/07/jekyll-markdown-skills/)，详细请查看原文章。

## Techniques

### 支持[Mermaid](https://mermaidjs.github.io/)

Mermaid是一个从文本生成图形的工具。目前它可以生成流程图（Flowchart），序列图（Sequence Diagram），类图（Class Diagram），状态图（State Diagram），甘特图（Gantt ）和饼图（Pie Chart）。

默认情况下，Jekyll不能正确显示它，需要把下面的代码添加到MD文件所使用的[Layout](https://jekyllrb.com/docs/layouts/)中去。

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.0.0/mermaid.min.js"></script>
<script>
  var config = {
    startOnLoad:true,
    theme: 'forest',
    flowchart:{
            useMaxWidth:false,
            htmlLabels:true
        }
  };
  mermaid.initialize(config);
  window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
</script>
```

添加上述两个脚本即可。

## More

这个人的博客做的相当不错，他对Github Pages的配置值得参考！
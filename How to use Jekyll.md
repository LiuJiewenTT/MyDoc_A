---
categories: Jekyll
tags: Jekyll, how
---

# How to use Jekyll

## Websites

- English(Official): [ https://jekyllrb.com/](https://jekyllrb.com/)
- Chinese: [ https://jekyllcn.com/](https://jekyllcn.com/)

Non-official versions might be out-dated or incomplete. Recommend to view the official version.

## Displaying an index of posts

[Permalink](https://jekyllrb.com/docs/posts/#displaying-an-index-of-posts)

Creating an index of posts on another page should be easy thanks to [Liquid](https://shopify.github.io/liquid/) and its tags. Here’s a simple example of how to create a list of links to your blog posts:

```html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
```

You have full control over how (and where) you display your posts, and how you structure your site. You should read more about [how templates work](https://jekyllrb.com/docs/templates/) with Jekyll if you want to know more.

Note that the `post` variable only exists inside the `for` loop above. If you wish to access the currently-rendering page/posts’s variables (the variables of the post/page that has the `for` loop in it), use the `page` variable instead.



## Variables in layout

[Permalink](https://jekyllrb.com/docs/layouts/#variables)

You can set front matter in **layouts**, the only difference is when you’re using in Liquid, you need to use the `layout` variable instead of `page`. For example:

```
---
city: San Francisco
---
<p>{{ layout.city }}</p>

{{ content }}
```
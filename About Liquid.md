# About Liquid

For more information, refer to some other documents or view online official pages: [Liquid](https://shopify.github.io/liquid/).

## Liquid Project-gh_pages branch

Here we talk about its project published on Github.

Repository URL: [https://github.com/Shopify/liquid](https://github.com/Shopify/liquid)
the branch: [https://github.com/Shopify/liquid/tree/gh-pages](https://github.com/Shopify/liquid/tree/gh-pages)

*ps. I also saved a copy of the project's gh_pages under folder 'liquid_web'.*

## File Structure

It's a screenshot taken on Dec. 17th, 2022:

![image-20221218183224756](About Liquid.assets/image-20221218183224756.png)

### _config.yaml

``` yaml
title: Liquid template language
description: Liquid is a template language and accompanying rendering engine. It is built for security, so is perfect for rendering custom templates from your users.

# Build settings
baseurl:                /liquid # the subpath of your site, e.g. /blog/
url:                    https://shopify.github.io # the base hostname & protocol for your site
permalink:              pretty
exclude:
  - README.md
  - CNAME
  - Gemfile
  - Gemfile.lock
  - Gruntfile.js
  - package.json
  - package-lock.json
  - node_modules
  - vendor
  - tags
keep_files:             ["css"]

# Collections
collections:
  basics:
    output: true
  tags:
    output: true
  filters:
    output: true

# Plugins
plugins:
  - jekyll-redirect-from

# Front matter defaults
defaults:
  - scope:
      path: "" # an empty string here means all files in the project
    values:
      layout: default

```

From the codes shown above, we focus on the following points:

- What is `baseurl`?
- What is the plugin `jekyll-redirect-from`?
- What is `keep_files`?

#### What is baseurl?

Well, Liquid has filters processing urls. And one is "absolute_url" and one is "relative_url". If we write a url with filter "relative_url", the url derived will be: "baseurl+the url". Note that *baseurl* is different from *url*, which represent site url. 

*See the Jekyll page: [http://jekyllrb.com/docs/liquid/filters/](http://jekyllrb.com/docs/liquid/filters/)*

![image-20221218184500565](./About Liquid.assets/image-20221218184500565.png)


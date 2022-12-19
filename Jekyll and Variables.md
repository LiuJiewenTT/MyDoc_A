---
categories: [Jekyll,]
---

# Jekyll and Variables

[toc]

## Jekyll's

### iframe

<iframe height="600" src="https://jekyllrb.com/docs/variables/"/>

### Text

Global Variables:

- site
- page
- layout
- theme
- content
- paginator

`site` Variables:

- time
- pages
- posts
- related_posts
- static_files
- html_pages
- html_files
- collections
- data
- documents
- categories.CATEGORY
- tags.TAG
- url
- [CONFIGURATION_DATA]

`page` Variables:

- content
- title
- excerpt
- url
- date
- id
- categories
- collections
- tags
- dir
- name
- path
- next
- previous

`theme` Variables:

- root
- authors
- description
- version
- dependencies
- metadata

`paginator` Varibles:

- page
- per_page
- posts
- total_posts
- total_pages
- previous_page
- orevious_page_path
- next_page
- next_page_path



## Github Metadata

### iframe

Here is an iframe to view that [webpage](https://jekyll.github.io/github-metadata/site.github/).

<iframe height="600" src="https://jekyll.github.io/github-metadata/site.github/" />

### Text

```css
{
    "versions": {
        "jekyll": <version>,
        "kramdown": <version>,
        "liquid": <version>,
        "maruku": <version>,
        "rdiscount": <version>,
        "redcarpet": <version>,
        "RedCloth": <version>,
        "jemoji": <version>,
        "jekyll-mentions": <version>,
        "jekyll-redirect-from": <version>,
        "jekyll-sitemap": <version>,
        "github-pages": <version>,
        "ruby": <version>"
    },
    "hostname": "github.com",
    "pages_hostname": "github.io",
    "api_url": "https://api.github.com",
    "help_url": "https://help.github.com",
    "environment": "dotcom",
    "pages_env": "dotcom",
    "public_repositories": [ Repository Objects ],
    "organization_members": [ User Objects ],
    "build_revision": "cbd866ebf142088896cbe71422b949de7f864bce",
    "project_title": "metadata-example",
    "project_tagline": "A GitHub Pages site to showcase repository metadata",
    "owner_name": "github",
    "owner_url": "https://github.com/github",
    "owner_gravatar_url": "https://github.com/github.png",
    "repository_url": "https://github.com/github/metadata-example",
    "repository_nwo": "github/metadata-example",
    "repository_name": "metadata-example",
    "zip_url": "https://github.com/github/metadata-example/zipball/gh-pages",
    "tar_url": "https://github.com/github/metadata-example/tarball/gh-pages",
    "clone_url": "https://github.com/github/metadata-example.git",
    "releases_url": "https://github.com/github/metadata-example/releases",
    "issues_url": "https://github.com/github/metadata-example/issues",
    "wiki_url": "https://github.com/github/metadata-example/wiki",
    "language": null,
    "is_user_page": false,
    "is_project_page": true,
    "show_downloads": true,
    "url": "http://username.github.io/metadata-example", // (or the CNAME)
    "baseurl": "/metadata-example",
    "contributors": [ User Objects ],
    "releases": [ Release Objects ],
    "latest_release": [ Release Object ],
    "private": false,
    "archived": false,
    "disabled": false,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit"
    },
    "source": {
      "branch": "gh-pages",
      "path": "/"
    }
}
```


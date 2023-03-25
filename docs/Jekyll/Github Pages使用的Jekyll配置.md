# Github Pages使用的Jekyll配置

| Version | yml                              | Jekyll | Ruby     | Liquid |
| ------- | -------------------------------- | ------ | -------- | ------ |
| 228     | actions/jekyll-build-pages@1.0.7 | 3.9.3  | 2.7.0    | 4.0.3  |
| -       | jekyll-docker                    | 4.2.2  | 3.1.1p18 |        |

如果要使用别的版本，那就必须自己提供镜像，因为Jekyll是预装在镜像中的。

Github Pages使用的镜像是：

- <https://github.com/actions/jekyll-build-pages/pkgs/container/jekyll-build-pages>列表中的

  > 即(Redirected from)：<https://ghcr.io/actions/jekyll-build-pages>

- 镜像通常被[它](https://github.com/actions/jekyll-build-pages/blob/main/action.yml)选择，即：<https://github.com/actions/jekyll-build-pages/blob/main/action.yml>.

  > 它默认使用v1.0.7的镜像
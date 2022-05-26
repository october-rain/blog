# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm install
```

### Local Development

```
$ pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# 写作格式

### 文章meta信息

```yml
---
id: dp
title: 动态规划全优化理解
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 动态规划全优化理解
keywords:
  - JavaScript
  - frontend
image: https://i.imgur.com/mErPwqL.png
---
```
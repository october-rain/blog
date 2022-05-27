---
id: ssh
title: 使用 ssh 连接 github
---

## 生成 ssh 密钥

使用命令 `ssh-keygen` 可以生成配对的 `id_rsa` 与 `id_rsa.pub` 文件

```shell
# 生成一个 ssh-key
# -t: 可选择 dsa | ecdsa | ed25519 | rsa | rsa1，代表加密方式
# -C: 注释，一般写自己的邮箱
$ ssh-keygen -t rsa -C <OctoberRain@xxx.com>

# 生成 id_rsa/id_rsa.pub: 配对的私钥与公钥
$ ls ~/.ssh
config   id_rsa   id_rsa.pub   known_hosts   known_hosts.old
```

## 在 GitHub 添加 ssh 密钥

生成之后只需把 `id_rsa.pub` 扔到 `github` 即可
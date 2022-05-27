---
id: zsh
title: 配置 zsh
---


## 在 MacOS 环境下配置

[参考此条 github gist](https://gist.github.com/derhuerst/12a1558a4b408b3b2b6e#installing-zsh-on-a-mac)

## 在 centos7 环境下配置

查看当前 shell 

```sh
echo $SHELL

/bin/bash
```

查看bin下是否有zsh包

```sh
cat /etc/shells

/bin/sh
/bin/bash
/usr/bin/sh
/usr/bin/bash
/bin/tcsh
/bin/csh
```

安装 GCC Development Tools 

```sh
yum groupinstall "Development tools"
```

检查 gcc 版本
```sh
gcc -v
```

安装 ncurses 依赖 

```sh
yum install ncurses-devel
```

安装 zsh 安装包，最新的版本可以在[这里](https://zsh.sourceforge.io/News/)查看

```
wget https://www.zsh.org/pub/zsh-5.9.tar.xz
```

解压安装包

```sh
xz -d zsh-5.9.tar.xz
tar xvf zsh-5.9.tar
```

安装 zsh

```sh
cd zsh
$ ./configure && make # Make a binary
$ make install # Install the binary
```

查看是否安装成功

```sh
cat /usr/local/bin/zsh
```

编辑 `/etc/shells` 文件以便让 `CentOS` 感知到 `Zsh`

```sh
vim /etc/shells
# 添加 /usr/local/bin/zsh 到文件中
```


改变系统默认的 `shell`

```sh
chsh -s /usr/local/bin/zsh
```
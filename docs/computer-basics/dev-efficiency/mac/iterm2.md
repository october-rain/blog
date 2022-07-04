---
id: iterm2
title: 使用 iterm2 + zsh 打造 mac 下最佳终端
---

## 配置 iterm2

![item2-hotkey](./assets/iterm-hotkey.png)

## 配置 oh my zsh

参考[Oh My Zsh + PowerLevel10k = 😎 terminal](https://dev.to/abdfnx/oh-my-zsh-powerlevel10k-cool-terminal-1no0)

### 下载 powerlevel10k 主题

[参考知乎此文](https://zhuanlan.zhihu.com/p/265525597)

## ls 的 替代品

`lsd` `exa`, 我这次选择的是 `lsd`。

在 `~/.zshrc` 中的配置为:

```sh
if [ -x "$(command -v lsd)" ]; then
    alias ls="lsd"
    # alias la="exa --long --all"
fi
```

## bash

```shell
# set shell prompt
PS1='\u@ \w\n$ '

# set alias
alias ls='ls -G'
alias ll='ls -alh'
alias grep='grep --color'
alias dk='docker'
alias dkc='docker-compose'
alias tree='tree -N'
alias de='cd ~/Desktop'
alias brew-up='brew update && brew upgrade && brew cleanup'
alias tnpm='npm --registry=http://registry.npm.taobao.org'
alias convert-gb='iconv -f gb18030'
alias du0='du -hd0'

# optional nvm
alias nvm_init='. "/usr/local/opt/nvm/nvm.sh"'
alias node6='nvm_init && nvm use --delete-prefix 6'
alias node0='nvm_init && nvm use --delete-prefix 0.12'
```

## git

```
git config --global core.quotepath false

[user]
	name = cbdyzj
	email = cbdyzj@gmail.com
[alias]
	ss = status -s
	cm = commit
	br = branch
	co = checkout
	sm = submodule
```

## input

```
# .inputrc
set completion-ignore-case on
```

## dd

```shell
# 查看设备
diskutil list

# 卸载u盘
diskutil unmountDisk /dev/diskx

# dd (r使用raw mode，速度更快)
dd if=in.iso of=/dev/rdiskx bs=1m

# 弹出u盘
diskutil eject /dev/diskx
```

## dock

```shell
defaults write com.apple.dock ResetLaunchPad -bool TRUE; killall Dock
```

## 微信的bug，删除微信的缓存

```
 rm -rf ~/Library/Containers/com.tencent.xinWeChat
```
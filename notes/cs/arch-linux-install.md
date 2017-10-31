## 安装基础系统

```shell
# 检查启动模式
efivar -l
ls /sys/firmware/efi/efivars

# 检查网络
ping -c4 archlinux.org

# 检查系统时间
timedatectl status

# 磁盘分区
lsblk
parted
mkfs.vfat -F32 sda1
mkfs.ext4 sda2

# 挂载
mount /dev/sda1 /mnt

# 安装
vi /etc/pacman.d/mirrorlist
pacman -Syy
pacstrap -i /mnt base base-devel

# 配置
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt /bin/bash

# 设置时间
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
hwclock --systohc --utc

# 设置Locale
vi /etc/locale.gen
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf

# 设置主机名
vi /etc/hostname
vi /etc/hosts
passwd

# 安装引导
pacman -S grub os-prober
grub-install --recheck /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg

# 重启
exit
umount -R /mnt
reboot

# 启动dhcp  
systemctl enable dhcpcd
```

## 用户管理

```shell
# 添加新用户
useradd -m -g users -s /bin/bash cbdyzj
passwd cbdyzj

# 添加到sudo
visudo
```

## 安装X

```shell
# 检查显卡
lspci | grep VGA

# 显卡驱动
pacman -S xf86-video-vesa

# 触摸板
pacman -S xf86-input-synaptics

# X
pacman -S xorg-server xorg-server-utils
pacman -S xorg-xinit xorg-utils

# 安装桌面
pacman -S gnome gnome-extra

# 字体
pacman -S ttf-dejavu wqy-microhei

# 主题
pacman -S gnome-tweak-tool

# 开启服务
systemctl enable  gdm
```

## Pacman

```shell
# 滚动更新
pacman -Syu

# 同步软件包
pacman -S

# 删除软件包
pacman -R

# 已安装软件包
pacman -Q
```
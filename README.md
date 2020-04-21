## 咸粽子主题

　　咸粽子主题是扁平化的 GTK3 主题。基于 [Qogir-theme](https://github.com/vinceliuice/Qogir-theme)，主要变更为换色和换成直角。

## 安装

　　使用 `./install.sh [选项……]` 进行。

|  选项：      | |
|:-------------|:-------------|
| -d, --dest   | 安装的目录（默认：`$HOME/.themes`） |
| -n, --name   | 名字（默认：XianZongzi） |
| -t, --theme  | theme primary color variant(s) (standard/manjaro/ubuntu) |
| -l, --logo   | theme nautilius logo variant(s) (default/arch/budgie/debian/fedora/gnome/manjaro/ubuntu) |
| -c, --color  | color variant(s) (standard/light/dark) |
| -i, --image  | Install theme with nautilus background image |
| -w, --win    | titlebutton variant(s) (standard/square) |
| -g, --gdm    | Install GDM theme, you should run this with sudo!|
| -r, --revert | revert GDM theme, you should run this with sudo!|
| -h, --help   | Show this help |

**示例：**
```sh
./install.sh  # 安装所有主题
```

```sh
./install.sh -i  (Install themes with nautilus background image)
```

```sh
sudo ./install.sh -g -c dark -t standard  (Install standard dark gdm theme)
```

## Nautilus logos
```sh
./install.sh -l [LOGO NAME...] (Install themes with selected nautilus logo)
```

![logo](https://github.com/XianZongzi/XianZongzi-theme/blob/images/logos.png?raw=true)

## Firefox theme
[Intall Firefox theme](src/firefox)

![firefox-theme](src/firefox/preview.png?raw=true)

### Kde theme
[Qogir-kde](https://github.com/vinceliuice/Qogir-kde)

### Icon theme
[Qogir](https://github.com/vinceliuice/Qogir-icon-theme)

## Screenshots
![1](https://github.com/XianZongzi/XianZongzi-theme/blob/images/screenshots/screenshot01.png?raw=true)
![2](https://github.com/XianZongzi/XianZongzi-theme/blob/images/screenshots/screenshot02.png?raw=true)
![3](https://github.com/XianZongzi/XianZongzi-theme/blob/images/screenshots/screenshot03.png?raw=true)
![4](https://github.com/XianZongzi/XianZongzi-theme/blob/images/screenshots/screenshot04.png?raw=true)
![5](https://github.com/XianZongzi/XianZongzi-theme/blob/images/screenshots/screenshot05.png?raw=true)

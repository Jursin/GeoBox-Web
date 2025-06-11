---
outline: deep
---

# 开始使用

## 准备
- <Badge type="tip" text="系统要求" /> Windows 7/10/11
- 下载完 GeoBox2.0 压缩包，将其解压缩到合适文件夹 **（不是直接预览）**，目录结构如下
  ```text
  GeoBox2.0/
  │  geobox.exe
  │
  ├─bin
  │      package.dat
  │      preview.bin
  │
  ├─preview
  │      index.html
  │
  └─win7系统请先下载补丁
         webview2runtime_win7.exe
         win7补丁使用说明.html
  ```
  ::: warning 注意
  Windows 7 和部分早期 Windows 10 系统需要安装 [WebView2 Runtime](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH#download) 才能正常使用，可以直接运行文件夹下 `webview2runtime_win7.exe` 在线安装程序 **（需联网）**，如果 Windows 7 系统版本太低，可能会导致打包工具和包文件使用出现异常，建议升级系统。
  :::
- 运行 `geobox.exe` 主程序，界面如下（支持切换深色/浅色模式）：
  ![main](/preview.png)

## 使用
- 单击指定区域并在弹出的窗口中选择文件或直接拖动文件到指定区域以添加 GeoGebra 文件，支持添加多个 GeoGebra 文件，不会影响原文件
- 拖动可改变顺序，支`持按名称排序⬆`和`按大小升序排序`
- 自定义编辑选项
- 点击`预览结果`，查看展示效果
- 点击`打包编译`，选择导出文件类型：
  - EXE 可执行文件(推荐)：生成独立运行的单一可执行文件，无需安装任何 GeoGebra 环境，但有被防火墙和杀毒软件误报的风险
  - 在线网页文件：生成单一网页文件，可在浏览器中打开 **（需联网）**，适合在线分享使用
  - 离线网页文件：生成单一网页文件，需先[下载 2.0 版本离线包](https://www.xhdds.cn/geobox/offline/geobox2_0_offline.rar)

    ::: tip 提示
    将离线包解压缩，再将导出的 `HTML` 文件放到解压缩后的 `geobox2_0_offline` 文件夹内，打开 `HTML` 文件
    :::
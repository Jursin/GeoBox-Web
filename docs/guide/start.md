# 开始使用
<ArticleMetadata />

## 准备
- <Badge type="tip" text="系统要求" /> **Windows 7/10/11**
- 下载完软件压缩包，将其**解压缩**到合适文件夹 **（不是直接预览）**，目录结构如下
  ```text
  GeoBox3.0/
  │  Geobox.exe
  |  update.exe
  |  WebView2Loader.dll
  │
  ├─bin
  │      package.dat
  │      preview.bin
  │
  ├─preview
  │      index.html
  │
  ├─web
  |      index.html
  |      ├─assets
  |      |      …
  └─win7系统请先下载补丁
         webview2runtime_win7.exe
         win7补丁使用说明.html
  ```
  ::: warning 注意
  Windows 7 和部分早期 Windows 10 系统需要安装 [WebView2 Runtime](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH#download) 才能正常使用，可以直接运行文件夹下 `webview2runtime_win7.exe` 在线安装程序 **（需联网）**，如不能联网请进 [QQ群｜1025239875](https://qm.qq.com/q/5qsNgfa6fm) 下载。如果 Windows 7 系统版本太低，可能会导致打包工具和包文件使用出现异常，建议升级系统。
  :::
- 运行 `Geobox.exe` 主程序，界面如下（支持切换深色/浅色模式）：
  ![main](/screenshots/main.png)

## 使用
- 单击指定区域并在弹出的窗口中选择文件或直接拖动文件到指定区域以添加 GeoGebra 文件，支持添加多个 GeoGebra 文件，不会影响源文件
- 拖动可改变顺序，支`持按名称排序⬆`和`按大小升序排序`
- 自定义编辑选项
- 点击`预览结果`，查看展示效果
- 点击`打包编译`，选择导出文件类型：
  - EXE 可执行文件(推荐)：生成独立运行的单一可执行文件，无需安装任何 GeoGebra 环境，但有被防火墙和杀毒软件误报的风险
  - 在线网页文件：生成单一网页文件，可在浏览器中打开 **（需联网）**，适合在线分享使用
  - 离线网页文件：生成单一网页文件，需先[下载 3.0 版本离线包](https://www.xhdds.cn/geobox/offline/geobox3.0_offline.rar)

    ::: tip 提示
    将下载的离线包压缩包**解压缩**，再将导出的**离线网页 `HTML` 文件**放到解压缩后的 `geobox3_0_offline` 文件夹内，再用浏览器打开 `HTML` 文件即可
    :::

## 更新日志
::: warning 注意
更新前请先备份好原数据
:::

### 3.05
- 进一步优化
### 3.04
- 添加自动暂存功能
### 3.03
- 优化了一些功能，提高了使用体验
### 3.0
- 重构了打包工具内核，使导出的 exe 文件被误杀的概率大大减少
- 进一步完善和美化了部分界面元素
- 增加 `update.exe` 更新程序
- 版权声明页面增加官网地址
# 常见问题
<ArticleMetadata />

## 软件授权相关

### 软件是否收费？是否有使用限制？
本软件**完全免费**，可二次分发。但需遵守以下条款：
1. 严禁反编译、破解或修改软件代码
2. 未经授权不得用于商业用途

## 常见问题排查
### 运行 Geobox.exe 时提示 Error `WebView2Loader.dll file not found!` 怎么办？
![not-found](/screenshots/not-found.png)

重新解压缩，确保 `WebView2Loader.dll` 文件存在

### 打包编译时提示"缺少文件"如何解决？
![missing](/screenshots/missing.png)

此问题通常由以下原因导致：

❌ **未正确操作**：
  - 直接预览压缩包并运行主程序会无法识别依赖（必须**完整解压**压缩包后运行）
  - 可能因在 U 盘上直接运行被安全软件拦截（建议解压到**本地磁盘**）

🛡️ **杀毒软件误报**：
  - 可能因触发系统防火墙或者杀毒软件的防护规则，造成误报并自动删除关键文件（本软件绝无病毒，可**临时关闭**杀毒软件或将软件目录添加至**白名单**）

# API

widget-js 封装了一套易用的 API，帮助开发者快速构建功能丰富的桌面组件。以下是主要的 API 分类及其简要说明：

- [AppApi](../api/AppApi.md) — 与应用程序全局配置、路径、版本以及内置窗口相关的操作（例如获取应用路径、设置主题 CSS、管理代理等）。
- [BroadcastApi](../api/BroadcastApi.md) — 广播/订阅机制，用于在不同模块或组件包之间发送和接收事件。适合跨模块通信和消息传递。
- [BrowserWindowApi](../api/BrowserWindowApi.md) — 窗口控制相关的方法集合（显示/隐藏、移动、调整大小、聚焦、设置代理等），用于管理组件或应用窗口行为。
- [DialogApi](../api/DialogApi.md) — 弹窗选择接口，提供文件/文件夹选择等常用对话框功能。
- [LogApi](../api/LogApi.md) — 日志输出接口，帮助将日志保存到本地文件并按级别记录信息、错误和警告。
- [MenuApi](../api/MenuApi.md) — 菜单相关操作，包括添加/移除自定义菜单和上下文菜单，以及显示菜单的能力。
- [MouseApi](../api/MouseApi.md) — 鼠标相关工具，例如创建/清除屏幕边缘热点，用于实现贴边隐藏等效果。
- [NotificationApi](../api/NotificationApi.md) — 通知接口，用于发送信息、成功、失败或提醒类通知并控制其显示时长或隐藏。
- [ProcessApi](../api/ProcessApi.md) — 进程与系统级信息查询，如内存统计、系统版本和底层运行时信息获取。
- [ShortcutApi](../api/ShortcutApi.md) — 全局快捷键注册/注销接口，支持在快捷键触发时发送广播事件。
- [StorageApi](../api/StorageApi.md) — 本地存储接口，包含加密/解密、获取/设置和对象存储等功能，支持 DPAPI 加密（Windows）。
- [SystemApi](../api/SystemApi.md) — 系统信息相关接口，获取硬件、传感器信息以及系统壁纸等。
- [WidgetApi](../api/WidgetApi.md) — 组件运行时管理接口，用于注册、获取、重载组件、打开配置页面以及设置拖拽行为等。
- [WidgetPackageApi](../api/WidgetPackageApi.md) — 组件包管理接口，提供安装、升级、获取包信息和入口/首页 URL 获取等功能。

更多 API 细节与使用示例请点击对应链接查看每个 API 的单独文档页面。

## 使用示例

获取应用版本号：
```typescript
AppApi.getVersion('app').then(appVersion => {
  console.log('App Version:', appVersion)
})
```

发送通知：
```typescript
NotificationApi.info('This is an informational message.', 5000)
```

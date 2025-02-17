# 发布前准备工作

1. 确保组件界面正常显示且无明显BUG。
2. 如果有修改组件或组件包信息，确保版本号已更新
3. 在根目录下的`widget.package.ts`文件中，完善组件包信息：
```typescript
export default new WidgetPackage({
  author: 'Neo Fu',         // 👈改成你的名字
  description: {
    'zh-CN': '时钟组件',      // 👈组件包描述
    'en-US': 'Clocks',      // 👈组件包英语描述
  },
  version: '1.0.0',         // 👈版本号可不填，默认使用package.json中的版本号
  hash: true,
  remote: {
    base: '/web',           // 👈部署到服务器的路径 注意：开头要加上斜杠
    hostname: 'itime.fun',  // 👈部署到服务器的域名
  },
  name: 'itime.fun',        // 👈组件包名，通常为域名，这个是组件包的唯一标识，不可更改
  title: {
    'zh-CN': 'iTime',       // 👈组件包标题
    'en-US': 'iTime',       // 👈组件包英文标题
  },
})
```
4. 申请发布token

开发中

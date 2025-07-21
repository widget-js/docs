# 发布前准备工作

## 1. 检查组件功能
确保组件界面正常显示，无明显 BUG。

## 2. 更新版本号
如有修改组件或组件包信息，请同步更新 `package.json` 的版本号。

## 3. 完善组件包信息
在根目录下的 `widget.package.ts` 文件中，完善以下信息：

```typescript
export default new WidgetPackage({
  author: '你的名字', // 👈 填写作者
  description: {
    'zh-CN': '组件包描述', // 👈 中文描述
    'en-US': 'English description', // 👈 英文描述
  },
  version: '1.0.0', // 👈 可不填，默认读取 package.json
  hash: true,
  zipUrl: 'https://widgetjs.cn/widget.zip', // 👈 vite 编译后自动生成
  name: 'widgetjs.cn.clocks', // 👈 组件包唯一标识，不可更改
  title: {
    'zh-CN': '组件包标题', // 👈 中文标题
    'en-US': 'English title', // 👈 英文标题
  },
})
```

> **提示**：组件包信息将直接影响发布和后续使用，请务必准确填写。

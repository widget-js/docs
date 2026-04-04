# Preparation Before Publishing

## 1. Check Widget Functionality
Ensure the widget interface displays correctly and there are no obvious bugs.

## 2. Update Version Number
If you modify the widget or widget package information, please synchronously update the version number in `package.json`.

## 3. Complete Widget Package Information
In the `widget.package.ts` file in the root directory, complete the following information:

```typescript
export default new WidgetPackage({
  author: 'Your Name', // 👈 Fill in the author
  description: {
    'zh-CN': 'Widget package description', // 👈 Chinese description
    'en-US': 'English description', // 👈 English description
  },
  version: '1.0.0', // 👈 Optional, reads from package.json by default
  hash: true,
  zipUrl: 'https://widgetjs.cn/widget.zip', // 👈 Automatically generated after vite compilation
  name: 'widgetjs.cn.clocks', // 👈 Unique identifier for the widget package, cannot be changed
  title: {
    'zh-CN': 'Widget package title', // 👈 Chinese title
    'en-US': 'English title', // 👈 English title
  },
})
```

> **Note**: The widget package information will directly affect the publishing and subsequent use, so please be sure to fill it out accurately.
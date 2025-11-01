# 编译离线包

:::warning
离线包一定要将路由模式设置为 `Hash` 模式，否则组件包无法正常使用。
:::

## 1. 配置路由为 Hash 模式

在`vue-router`路由配置文件中，设置 `createWebHashHistory()` 以启用 Hash 路由模式：

```js
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 👈 启用 Hash 路由模式
  routes: [
  ],
})
```

## 2. 设置组件包 Hash 路由

在根目录下的 `widget.package.ts` 文件中，将 `hash` 设置为 `true`：

```ts
export default new WidgetPackage({
  author: 'Neo Fu',
  description: {
    'zh-CN': '时钟组件',
    'en-US': 'Clocks',
  },
  version: '1.0.0',
  hash: true, // 👈 启用 Hash 路由
  // ...其他配置
})
```

## 3. 离线编译打包

在项目根目录下运行以下命令进行离线打包：

```shell
npm run build:offline
```

打包完成后，`dist` 目录下会生成：
- **widget.json**：组件包元数据（包含基本信息、路由等）
- **widget.zip**：组件包压缩包（包含所有代码和资源）

![](/assets/guide/publish/dist-folder.png)

## 4. 安装离线组件包

将 `widget.zip` 拖拽到`搜索界面`中，即可完成离线安装。

![](/assets/guide/publish/drop.png)

# Build Offline Package

:::warning
For offline packages, the routing mode must be set to `Hash` mode, otherwise the widget package will not work properly.
:::

## 1. Configure Routing to Hash Mode

In the `vue-router` routing configuration file, set `createWebHashHistory()` to enable the Hash routing mode:

```js
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 👈 Enable Hash routing mode
  routes: [
  ],
})
```

## 2. Set Widget Package Hash Routing

In the `widget.package.ts` file in the root directory, set `hash` to `true`:

```ts
export default new WidgetPackage({
  author: 'Neo Fu',
  description: {
    'zh-CN': 'Clock Widget',
    'en-US': 'Clocks',
  },
  version: '1.0.0',
  hash: true, // 👈 Enable Hash routing
  // ...other configurations
})
```

## 3. Compile and Package Offline

Run the following command in the project root directory to package it offline:

```shell
npm run build:offline
```

After packaging is complete, the following will be generated in the `dist` directory:
- **widget.json**: Widget package metadata (including basic info, routing, etc.)
- **widget.zip**: Widget package compressed file (containing all code and resources)

![](/assets/guide/publish/dist-folder.png)

## 4. Install Offline Widget Package

Drag and drop `widget.zip` into the `Search Interface` to complete the offline installation.

![](/assets/guide/publish/drop.png)
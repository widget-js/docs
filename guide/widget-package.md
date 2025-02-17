# 组件包

组件包是多个组件的合集，可理解成一个网站，这个网站包含多个页面，每个页面是一个组件。


## widget.package.ts

每个项目根目录下都要有一个`widget.package.ts`文件，用于定义组件包的基本信息，如名称、描述、作者、版本、路由信息等等。
widget-vite-plugin，会扫描项目根目录下的`widget.package.ts`文件，根据配置信息，最终在dist目录生成`widget.json`文件。

```shell{25}
.
├── public
├── src
│   ├── App.vue
│   ├── assets
│   ├── main.ts
│   ├── router
│   ├── widgets
│   │   ├── clock
│   │   │   ├── Clock.widget.ts
│   │   │   ├── ClockConfigView.vue
│   │   │   ├── ClockWidgetRoutes.ts
│   │   │   ├── ClockWidgetView.vue
│   │   │   ├── model
│   │   │   │   └── ClockModel.ts
│   │   └── widget-router.ts
├── .vscode
├── env.d.ts
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── vite.config.ts
├── widget.package.ts                     # 👈 组件包信息
└── ...
```
### 示例
```ts
import { WidgetPackage } from '@widget-js/core'

export default new WidgetPackage({
  author: 'Neo Fu',
  description: {
    'zh-CN': '组件描述',
  },
  hash: true,                              // 是否开启hash路由
  remote: {                                // 配置网站的远程部署信息，域名，base路径
    base: '/web',
    hostname: 'widgetjs.cn',
  },
  homepage: 'https://widgetjs.cn',
  name: 'itime.fun',                       // 组件包名，可以直接设置为域名
  title: {
    'zh-CN': '组件标题',
  },
  devOptions: {                            // 可选
    folder: './src/widgets/',              //
    devUrl: 'http://localhost:5173/web',   // 可选，默认会与vite保持一致
  },
})
```



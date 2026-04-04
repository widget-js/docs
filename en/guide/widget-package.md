# Widget Package

A widget package is a collection of multiple widgets. It can be thought of as a website, where this website contains multiple pages, and each page is a widget.

## widget.package.ts

Each project's root directory must have a `widget.package.ts` file, which is used to define the basic information of the widget package, such as name, description, author, version, routing information, and so on.
The `widget-vite-plugin` will scan the `widget.package.ts` file in the project's root directory and generate a `widget.json` file in the `dist` directory based on the configuration information.

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
├── widget.package.ts                     # 👈 Widget package information
└── ...
```

### Example
```ts
import { WidgetPackage } from '@widget-js/core'

export default new WidgetPackage({
  author: 'Neo Fu',
  description: {
    'zh-CN': 'Widget Description',
  },
  hash: true,                              // Whether to enable hash routing
  remote: {                                // Configure remote deployment information of the website, domain name, base path
    base: '/web',
    hostname: 'widgetjs.cn',
  },
  homepage: 'https://widgetjs.cn',
  name: 'itime.fun',                       // Widget package name, can be directly set as the domain name
  title: {
    'zh-CN': 'Widget Title',
  },
  devOptions: {                            // Optional
    folder: './src/widgets/',              //
    devUrl: 'http://localhost:5173/web',   // Optional, will be consistent with vite by default
  },
})
```
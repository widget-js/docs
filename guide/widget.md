# 组件

组件可以是一个时钟、天气、日历等等，可理解成一个HTML页面，只是以组件的形式显示在桌面上。

## xx.widget.ts

每个组件都要有一个`.widget.ts`描述文件，用于定义组件的基本信息，如标题、描述、作者、版本、路由信息等等。

```shell{9}
├── public
├── src
│   ├── App.vue
│   ├── assets
│   ├── main.ts
│   ├── router
│   ├── widgets
│   │   ├── clock
│   │   │   ├── Clock.widget.ts       # 👈 组件信息
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
├── widget.package.ts
└── ...
```
### 示例
```ts
import { Widget, WidgetKeyword } from '@widget-js/core'

const ClockWidget = new Widget({
  path: '/widget/clock',                        // 组件路径
  configPagePath: '/widget/config/clock',       // 组件配置页面路径
  name: '.clock',                               // 组件名
  title: { 'zh-CN': '时钟' },                    // 组件标题
  description: { 'zh-CN': '带动画的时钟' },       // 组件描述
  categories: ['time'],                         // 组件搜索类别
  lang: 'zh-CN',                                // 组件默认使用的语言
  width: 2,                                     // 默认网格宽度
  height: 2,                                    // 默认网格高度
  minWidth: 2,                                  // 最小网格宽度
  maxWidth: 4,                                  // 最大网格宽度
  minHeight: 2,                                 // 最小网格高度
  maxHeight: 4,                                 // 最大网格高度
  previewImage: '/images/preview_clock.png',    // 预览图
  socialLinks: [
    { name: 'github', link: 'https://github.com/rtugeek/stocks-desktop' },
  ],
})
export default ClockWidget
```
## 组件名
:::tip
组件名是组件的唯一标识，组件名由`组件包名`和`组件名`组成。
:::

在上面的示例代码中，`.clock`是组件名简写，但实际的的组件名会是`widgetjs.cn.widgets.clock`。
## 组件类型
组件类型有3种：
1. 桌面组件(DeployMode.NORMAL)：固定在系统桌面上的组件
2. 悬浮组件(DeployMode.OVERLAP)：悬浮在桌面上的可拖动组件，类似于Windows的窗口
3. 后台组件(DeployMode.BACKGROUND)：在后台运行的组件，不会显示在桌面上，通过快捷键或特点条件才激活的组件

默认的组件支持的类型为：`桌面组件`和`悬浮组件`两种，可以通过`supportDeployMode`进行配置
```ts{5}
const ClockWidget = new Widget({
  name: '.clock',
  title: { 'zh-CN': '时钟' },
  description: { 'zh-CN': '带动画的时钟' },
  supportDeployMode: DeployMode.NORMAL | DeployMode.OVERLAP | DeployMode.BACKGROUND // 代表支持三种类型
  ...
})
export default ClockWidget
```

## 组件路由

在上面的示例代码中，组件有两个基本路由信息 `path` 和 `configPagePath`
path为组件页面地址，configPagePath为组件配置页面地址（用户通过`右键菜单`，点击`设置`后打开的页面）


例如：
- 时钟组件网址为：https://widgetjs.cn/clock/#/widget/clock
- 配置页面的网址为：https://widgetjs.cn/clock/#/widget/config/clock

那么这个组件widget.ts的路由信息为：
- `path`为 `/widget/clock`
- `configPagePath`为 `/widget/config/clock`

## 组件尺寸

组件的尺寸是根据用户设置的网格大小决定的，例如，用户设置网格大小为90px，那么组件的宽度 width * 90px

```typescript{3-8}
const ClockWidget = new Widget({
  ...
  width: 2,                                     // 默认网格宽度
  height: 2,                                    // 默认网格高度
  minWidth: 2,                                  // 最小网格宽度
  maxWidth: 4,                                  // 最大网格宽度
  minHeight: 2,                                 // 最小网格高度
  maxHeight: 4,                                 // 最大网格高度
  ...
})
```
在这个例子中，组件的最小宽度为2，最大宽度为4，最小高度为2，最大高度为4
那么组件的宽度范围为180px ~ 320px，高度范围为180px ~ 320px

## 搜索分类 categories


组件搜索类别 `categories` 是为了方便用户查找组件，例如，用户想要查找资讯类组件，那么可以在组件搜索界面中，选中`资讯`类别，就可以快速筛选出所有时钟组件

![Add Widget](/assets/guide/widget-categories.png)

通过`categories`设置组件的搜索类别
```typescript{3}
const ClockWidget = new Widget({
  ...
  categories: ['time'],                         //👈 组件搜索类别设置
  ...
})
```

## 社会化链接 socialLinks

社会化链接是为了方便用户查看组件的源码、使用教程或博客等信息而设置的。通过`socialLinks`设置社会化链接信息
```typescript{3-5}
const ClockWidget = new Widget({
  ...
  socialLinks: [
    { name: 'github', link: 'https://github.com/rtugeek/stocks-desktop' },
  ],
  ...
})
```

当前可设置的name有：
- github
- gitee
- qq
- bilibili
- discord
- tiktok
- douyin
- email
- qq
- gitee
- youtube
- wechat

设置好后，用户可以在搜索界面查看到组件的社会化链接图标，点击图标会打开对应的链接。
![Add Widget](/assets/guide/widget-social-link.png)

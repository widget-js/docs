# React组件/widget-react

使用 `widget-react` skill 可以在 `@widget-js/react` 包内优先复用现有公开组件、表单组件和 hooks，统一处理 widget 页面状态、宿主事件、窗口行为与桌面挂件 UI。

## 安装

执行下面的命令：

```bash
npx skills@latest add widget-js/react
```

## 使用

对 AI 助手说：

```text
/widget-react 给这个 widget 页面接入主题、参数和语言监听，再套一个现成容器
```

或者：

```text
/widget-react 当前 overlap 模式加默认右键菜单和贴边自动隐藏
```

这个 skill 适合这些场景：

- 新增或改造 widget 页面、配置页、设置页、悬浮页
- 读取 widget 参数、主题、语言、尺寸或保存配置
- 监听广播、IPC、快捷键、菜单、鼠标、通知、托盘事件
- 实现 overlap 模式、贴边隐藏、窗口动画、默认右键菜单
- 复用窗口标题栏、窗口控制按钮、通用挂件外壳
- 复用主题表单、代理配置、颜色、字体、快捷键等现有字段组件
- 先判断“当前该用哪个组件 / hook”

## 技能说明

- `name`：`widget-react`
- `description`：提供 `@widget-js/react` 中组件与 hooks 的统一选型、组合建议和实现约定。只要用户要处理 widget 参数、主题、语言、尺寸、广播、IPC、窗口动画、贴边隐藏、overlap 右键菜单、窗口壳层、标题栏按钮、悬浮挂件容器、配置页表单字段，或只是想先判断“当前该用哪个组件 / hook”，都应优先调用本技能，而不是重复封装一套新的状态或 UI。

## 何时调用

当用户有以下意图时，优先使用 `widget-react`：

- 要在当前包内新增或改造 widget 页面、配置页、设置页、悬浮页
- 要读取 widget 参数、主题、语言、尺寸或保存配置
- 要监听广播、IPC、快捷键、菜单、鼠标、通知、托盘事件
- 要实现 overlap 模式、贴边隐藏、窗口动画、默认右键菜单
- 要接入窗口标题栏、窗口控制按钮、通用挂件外壳
- 要复用已有表单字段、主题表单、代理配置、颜色/字体/快捷键编辑组件
- 要先判断“应该用哪个组件 / hook”，或者明确说“别重复造轮子”

## 推荐用法

`widget-react` 的核心目标是优先复用 `@widget-js/react` 已有能力，而不是在当前任务里重新封装一套状态或 UI。

推荐按这个顺序使用：

1. 先判断任务更偏 `UI 壳层 / 表单`，还是 `状态 / 宿主事件 / 窗口行为`
2. 先选高层 API，再补低层 API，不要重复订阅同类事件
3. 如果页面初始化已经可以用 `useWidget` 解决，就不要再单独拼参数、主题、语言监听
4. 如果已有公开组件已经覆盖窗口壳层，就优先直接组合 `WidgetWrapper`、`OverlapWidgetWrapper`、`Window` 等组件

常见组合方式：

- 页面级 widget：`useWidget` + `WidgetWrapper` / `OverlapWidgetWrapper` / `Window`
- overlap 场景：`OverlapWidgetWrapper` + `useAutoHideOnEdge` + `useDefaultOverlapContextMenu`
- 配置页 / 设置页：`Window` + `WindowTitleBar` + `Window.footer` + `WidgetThemeForm` 或其他 `Widget*Field`

## 使用流程

1. 先判断任务更偏 `UI 壳层 / 表单`，还是 `状态 / 宿主事件 / 窗口行为`
2. 如果已经能定位到组件或 hook 名称，就继续查对应的单项文档或实现，不要只停在索引层
3. 如果任务同时涉及页面状态和界面壳层，至少组合一个高层 hook 和一个高层组件
4. 优先从 `@widget-js/react` 的公开导出中选型，只有维护当前包内部组件时才考虑内部基础件

## 它会帮你优先选这些能力

常用组件：

- `WidgetWrapper`
- `OverlapWidgetWrapper`
- `Window`
- `WindowTitleBar`
- `WindowControls`
- `WidgetThemeForm`

常用 hooks：

- `useWidget`
- `useWidgetParams`
- `useWidgetTheme`
- `useWidgetSize`
- `useAutoHideOnEdge`
- `useDefaultOverlapContextMenu`
- `useAppBroadcast`
- `useIpcListener`
- `useWidgetStorage`

## 使用约定

- 优先从 `@widget-js/react` 导入公开导出
- 用户没有明确要求内部实现时，优先回答“如何复用现有 API”
- 涉及 `BrowserWindowApi`、`DeviceApi`、`MouseApi` 或宿主广播时，先确认代码运行在 Widget 宿主环境

## 相关链接

- Storybook 文档：<https://widget-js.github.io/react>
- GitHub：<https://github.com/widget-js/react>

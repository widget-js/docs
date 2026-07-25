# 创建组件（AI）

使用 `widget-new` skill 可以在 React 模板项目中生成一个新的桌面组件模块，并自动接入路由。

## 前提

请先确保你已经安装了 skills，并且已经有一个项目（可以用 [创建项目（AI）](/guide/skills/create-project) 创建）。

## 安装

```bash
npx skills@latest add widget-js/create-widget
```

安装过程中会提示你选择要安装的 skill，请确保 `widget-create` 和 `widget-new` 都被选中。

## 使用

对 AI 助手说：

```text
Use Skill: widget-new
帮我创建一个天气组件，支持配置页
```

或：

```text
Use Skill: widget-new
帮我创建一个番茄钟组件，不需要配置页
```

`widget-new` 会先询问：

- 组件名
- 是否需要配置页

然后生成并接入：

- `src/widgets/<name>/<name>.widget.ts`
- `src/widgets/<name>/<name>-widget-view.tsx`
- `src/widgets/<name>/<name>-config-view.tsx`（可选）
- `src/widgets/<name>/<name>-widget-routes.ts`
- `src/widgets/widget-router.ts`（自动更新）

# 创建项目（AI）

使用 `widget-create` skill 可以通过 AI 助手快速初始化一个 widget-js 桌面组件项目。

## 安装

```bash
npx skills@latest add widget-js/create-widget
```

安装过程中会提示你选择要安装的 skill，请确保 `widget-create` 和 `widget-new` 都被选中。

## 使用

对 AI 助手说：

```text
Use Skill: widget-create
帮我在当前目录创建一个 React 桌面组件项目，使用 npmmirror
```

`widget-create` 会按顺序询问：

- 创建到当前目录还是指定目录（绝对/相对路径均可）
- 模板类型（React 推荐，Vue 已弃用）
- 是否使用 npmmirror
- 如果目标目录非空，是否允许覆盖

创建完成后，项目生成在你选择的目录里。接着在项目根目录执行：

```bash
npm install
npm run dev
```

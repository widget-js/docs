# Skills

WidgetJS 现在提供了两个配套的 AI Skills，用来加速桌面组件项目初始化和组件模块生成：

- `widget-create`：创建桌面组件项目
- `widget-new`：在项目里创建具体桌面组件

这两个 skill 来自同一个安装源，一次安装即可一起使用。

## 安装 Skills

执行下面的命令：

```bash
npx skills@latest add widget-js/create-widget
```

安装过程中会提示你选择要安装的 skill，请确保 `widget-create` 和 `widget-new` 都被选中：

```shell
Need to install the following packages:
skills@1.5.20
Ok to proceed? (y) y

Source: `https://github.com/widget-js/create-widget.git`
Repository cloned
Found 2 skills

Select skills to install
● widget-create  👈勾选
● widget-new     👈勾选
```

## `widget-create`

`widget-create` 用来初始化一个新的 widget-js 桌面组件项目。

它会按照提示帮你完成这些事情：

- 询问项目创建目录
- 询问模板类型，推荐使用 React，Vue 已弃用
- 询问是否使用 `npmmirror`
- 当目标目录非空时，询问是否覆盖
- 将模板复制到目标目录
- 如果选择 `npmmirror`，自动写入 `.npmrc`

你可以这样使用：

```text
Use Skill: widget-create
帮我在当前目录创建一个 React 桌面组件项目，使用 npmmirror
```

或者直接自然语言描述：

```text
帮我创建一个 widget-js 桌面组件项目，放到 ./my-widget，使用 React 模板
```

创建完成后，可以继续执行：

```bash
npm install
npm run dev
```

## `widget-new`

`widget-new` 用来在 React 模板项目中新增一个具体组件模块。

它会根据你的需求生成并接入以下内容：

- `src/widgets/<name>/<name>.widget.ts`
- `src/widgets/<name>/<name>-widget-view.tsx`
- `src/widgets/<name>/<name>-config-view.tsx`（可选）
- `src/widgets/<name>/<name>-widget-routes.ts`
- `src/widgets/widget-router.ts` 中的路由注册

这个 skill 会先询问：

- 组件名
- 是否需要配置页

然后自动完成英文目录名转换、路由接入，以及基础响应式布局生成。

你可以这样使用：

```text
Use Skill: widget-new
帮我创建一个天气组件，支持配置页
```

或者：

```text
Use Skill: widget-new
帮我创建一个番茄钟组件，不需要配置页
```

## 推荐使用顺序

1. 先安装 skills
2. 使用 `widget-create` 创建项目
3. 进入项目后，使用 `widget-new` 创建具体组件
4. 运行 `npm install` 和 `npm run dev` 进行调试

## 相关页面

- [创建项目](/guide/create-project)
- [创建组件](/guide/create-widget)

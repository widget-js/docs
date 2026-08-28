# Skills

WidgetJS 现在提供了三类常用的 AI Skills，用来加速项目初始化、组件模块生成，以及 `@widget-js/react` 组件与 hooks 的复用选型：

- `widget-create`：创建桌面组件项目
- `widget-new`：在项目里创建具体桌面组件
- `widget-react`：优先复用 `@widget-js/react` 中现成的组件、表单组件和 hooks

其中 `widget-create` 与 `widget-new` 来自同一个安装源，`widget-react` 单独安装。

## 安装 Skills

### 安装 `widget-create` 和 `widget-new`：

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

### 安装 `widget-react`：

```bash
npx skills@latest add widget-js/react
```


## 推荐使用顺序

1. 先安装 skills
2. 使用 `widget-create` 创建项目
3. 进入项目后，使用 `widget-new` 创建具体组件
4. 需要复用 `@widget-js/react` 现有组件或 hooks 时，使用 `widget-react`
5. 运行 `npm install` 和 `npm run dev` 进行调试

## 相关页面

- [创建项目](/guide/create-project)
- [创建组件](/guide/create-widget)

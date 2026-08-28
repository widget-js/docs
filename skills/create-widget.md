# 创建组件

使用 `widget-new` skill 可以在 React 模板项目中生成一个新的桌面组件模块，并自动接入路由。


## 使用

对 AI 助手说：

```text
/widget-new 帮我创建一个新年倒计时组件，用户可以自定义设置目标日期，标题
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

# 创建组件

## 创建组件

在项目根目录执行以下命令
```shell
widget create
```
根据提示调整组件信息（示例中创建一个叫 clock 时钟组件）

```shell
? 请输入组件名(大驼峰式)，如：CountdownClock Clock
Clock                                                                                                                                   16:59:02
? 请输入组件标题，如：倒计时 时钟
时钟                                                                                                                                    16:59:07
? 请选择组件宽度，最多选3个，例如选中2,4,6，代表组件最小宽为2，默认宽为4，最大宽为6，单选代表不可拉伸 2, 3
2,3                                                                                                                                     16:59:12
? 请选择组件高度，最多选3个，例如选中1,2，代表组件最小高为1，默认高为2，最大高为2，单选代表不可拉伸 3, 4
3,4                                                                                                                                     16:59:14
? 组件是否可配置，例如修改背景颜色，字体大小等 Yes
true
```
现在在`/src/widgets`目录下会多出一个`clock`文件夹，里面包含了组件的模板代码
```shell
/src/widget/clock/Clock.widget.ts       #组件信息（标题，宽高、描述等基础信息）
/src/widget/clock/ClockConfigView.vue   #组件配置页面
/src/widget/clock/ClockWidgetRoutes.ts  #组件路由
/src/widget/clock/ClockWidgetView.vue   #组件页面
```

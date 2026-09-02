# 生成离线包

在开发阶段，我们使用 `npm run dev` 命令启动开发服务来预览和调试组件。但开发服务是临时的一旦重启软件或电脑，组件就无法使用了，必须重新执行 `npm run dev` 才能再次加载。

为了让组件能够长期稳定地运行，我们需要将其打包成离线包，这样安装后就不需要一直开启开发服务了。

<PromptTypewriter title="打包组件提示词" text="/widget 打包组件" />

打包完成后，会在项目的 `dist` 目录下生成一个 zip 压缩包（例如 `widget-weather_v0_1_0.zip`），这就是组件的离线安装包。

接下来，打开 客户端 的「添加组件」界面，点击右上角的「安装离线组件」按钮，选择刚才生成的 zip 文件即可完成安装。

<DocImage src="/assets/guide/install_offline.png" alt="组件安装 - 离线" />

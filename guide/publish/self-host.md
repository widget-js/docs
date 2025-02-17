# 通过服务器发布

::: warning
阅读本文前，请确保已掌握云主机以及Nginx这类Web服务的使用。部署组件包的过程与部署网页一致，只是加了个组件包的发布步骤。
:::

## 准备工作
1. 准备一台云服务器
2. 安装好Nginx或者其他Web服务器，文档将与Nginx为例
3. 将代码编译，生成`dist`文件夹

本文将以组件包部署到`https://widgetjs.cn/hotspot` 为例，其中:
- `widgetjs.cn` 为域名（hostname）
- `/hotspot` 为部署目录(base)。

修改根目录下的`widget.package.ts`文件中的信息
```typescript
export default new WidgetPackage({
  remote: {
    base: '/hotspot',          // 👈 部署目录，注意：开头要加上斜杠
    hostname: 'widgetjs.cn',  // 👈 域名
  },
})

```
## 部署
将dist文件夹上传到服务器，然后配置Nginx，将dist文件夹作为静态资源目录。

配置Nginx，将dist文件夹作为静态资源目录：
```nginx
server {
    listen 80;
    server_name widgetjs.cn;  # 👈 部署域名

    location /hotspot {       # 改为你部署路径
        alias /path/to/dist;  # 👈 服务器上dist目录
        index index.html;
        try_files $uri $uri/ /hotspot/index.html;
    }
}
```

## 发布组件包
在项目根目录运行以下命令发布组件包：
```shell
widget publish -k <your-publish-token>
```
输出以下信息表示发布成功：
```shell
✔ Widget.json found: C:/xxx/xx/xx/widget.json
i Package name: xx.xxx.xx
i Widget size: xx
✔ Widget published successfully.
```

::: warning
发布完成后需要等待管理员审核，审核通过后组件包才能在桌面组件客户端中搜索到。联系管理员 rtugeek@gmail.com 可加速审核。
:::



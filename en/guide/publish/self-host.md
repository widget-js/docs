# Publish via Server

::: warning
Before reading this article, please make sure you have mastered the use of cloud hosts and Web services like Nginx. The process of deploying a widget package is consistent with deploying a webpage, just adding a step for publishing the widget package.
:::

## Preparation
1. Prepare a cloud server
2. Install Nginx or other Web servers, this document will use Nginx as an example
3. Compile the code to generate the `dist` folder

This article will use deploying the widget package to `https://widgetjs.cn/hotspot` as an example, where:
- `widgetjs.cn` is the domain name (hostname)
- `/hotspot` is the deployment directory (base).

Modify the information in the `widget.package.ts` file in the root directory
```typescript
export default new WidgetPackage({
  remote: {
    base: '/hotspot',          // 👈 Deployment directory, note: must start with a slash
    hostname: 'widgetjs.cn',  // 👈 Domain name
  },
})

```
## Deployment
Upload the `dist` folder to the server, then configure Nginx to use the `dist` folder as the static resource directory.

Configure Nginx to use the `dist` folder as the static resource directory:
```nginx
server {
    listen 80;
    server_name widgetjs.cn;  # 👈 Deployment domain name

    location /hotspot {       # Change to your deployment path
        alias /path/to/dist;  # 👈 The dist directory on the server
        index index.html;
        try_files $uri $uri/ /hotspot/index.html;
    }
}
```

## Publish Widget Package
Run the following command in the project root directory to publish the widget package:
```shell
widget publish -k <your-publish-token>
```
The output of the following information indicates a successful publication:
```shell
✔ Widget.json found: C:/xxx/xx/xx/widget.json
i Package name: xx.xxx.xx
i Widget size: xx
✔ Widget published successfully.
```

::: warning
After publication, you need to wait for administrator approval. Once approved, the widget package can be searched in the desktop widget client. Contact the administrator at rtugeek@gmail.com to expedite the review.
:::
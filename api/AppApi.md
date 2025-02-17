# AppApi

AppApi 接口定义了与应用程序相关的一系列方法。这些方法提供了应用程序配置管理、版本信息获取、路径获取以及应用内置窗口操作等功能。  




参考：

- [Electron API App](https://www.electronjs.org/docs/latest/api/app)

## getAppPath

获取应用安装路径  


**return**: Promise&lt;string&gt;  

## getConfig

获取配置  


**return**: Promise&lt;string | number | boolean&gt;  

## getDevMode

是否使用开发者模式  

## getIconFile

获取应用图标文件路径  


**return**: Promise&lt;string&gt;  

## getPreloadPath

获取Preload JS路径  


**return**: Promise&lt;string&gt;  




参考：

- [Using Preload Scripts](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload)

## getProxy

## getThemeCSS

获取应用全局主题CSS  


**return**: Promise&lt;string&gt;  如果没有设置全局主题，会返回空字符串  

## getVersion

获取版本信息  

- _**type**_:string - 可选。指定要获取的版本类型。


    - `app`: 获取应用程序的版本（默认）。  
    - `electron`: 获取 Electron 框架的版本。  
    - `chrome`: 获取 Electron 使用的 Chromium 版本。  
    - `node`: 获取 Node.js 的版本。  
    - `v8`: 获取 V8 引擎的版本。  



**return**: Promise&lt;string&gt;  

## isWindowsStore

一个布尔值。如果应用程序作为 Windows Store应用程序（appx）运行，则此属性为 true。  


**return**: Promise&lt;boolean&gt;  

## openAddWidgetWindow

打开添加组件窗口  

## openSettingWindow

打开应用设置窗口  

## setConfig

设置配置  

- _**key**_: string  

- _**value**_: string | number | boolean  

## setDevMode

是否使用开发者模式  

## setProxy

设置应用全局网络代理，传空对象会清除代理设置  


**Example:**
```typescript
AppApi.setProxy({
    proxyRules:'socks5://127.0.0.1:7890'
})
```


## setThemeCSS

设置应用全局主题CSS  

# AppApiEvent

|Event|Comment|Payload|
|---|---|---|
|CONFIG_CHANGED|应用设置变更时触发||
|MOVING_GRID_WINDOW|桌面组件网格窗口移动时触发||
|STOP_MOVING_GRID_WINDOW|桌面组件网格窗口停止移动时触发||
|PROXY_CHANGED|应用代理发生变化||

# AppApiConstants

|Event|Comment|Payload|
|---|---|---|
|CONFIG_GRID_CELL_SIZE|桌面组件网格大小||
|CONFIG_WIDGET_THEME_CSS|应用主题CSS设置||
|CONFIG_PROXY|应用全局代理设置||
|CONFIG_DEV_MODE|||
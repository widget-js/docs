# BrowserWindowApi

BrowserWindowApi 接口定义了一系列用于控制窗口的方法，这些方法提供了窗口的显示、隐藏、移动、调整大小等功能  

> 注意：桌面类型组件不支持窗口移动、调整大小、最大化、最小化等操作

## alignToScreen

将窗口对齐到当前屏幕  

- _**align**_:string 对齐位置


    - 'top-left'  
    - 'top-center'  
    - 'top-right'  
    - 'bottom-left'  
    - 'bottom-center'  
    - 'bottom-right'  


## blur

使窗口失去焦点  

## center

将窗口居中  

## close

关闭窗口  

## existsByUrl

检查指定 URL 是否存在  

- _**url**_: - 要检查的 URL  


**return**: Promise&lt;boolean&gt;  

## focus

聚焦窗口  

## getBackgroundThrottling

## getBounds

获取窗口边界  


**return**: Promise&lt;Rectangle&gt;  

## getMaximumSize

获取窗口的最大尺寸  


**return**: 返回一个 Promise，解析为一个数组，包含窗口的最大宽度和高度  

## getMinimumSize

获取窗口的最小尺寸  


**return**: 返回一个 Promise，解析为一个数组，包含窗口的最小宽度和高度  

## getPosition

获取窗口位置  


**return**: 返回一个 Promise，解析为窗口的位置  

## getSize

获取窗口大小  


**return**: Promise&lt;number[]&gt;  

## hide

隐藏窗口  

## isAlwaysOnTop

检查窗口是否总在最前  


**return**: Promise&lt;boolean&gt;  

## isDraggingWindow

检查窗口是否正在拖动  


**return**: Promise&lt;boolean&gt;  

## isFocused


**return**: Promise&lt;boolean&gt;  

## isMaximized

检查窗口是否最大化  


**return**: Promise&lt;boolean&gt;  

## isMinimized

窗口是否最小后  


**return**: Promise&lt;boolean&gt;  

## isResizable

检查窗口是否可调整大小  


**return**: Promise&lt;boolean&gt;  

## isVisible

检查窗口是否可见  


**return**: Promise&lt;boolean&gt;  

## maximize

最大化窗口  

## minimize

最小化窗口  

## moveTop

将窗口置于最前  

## openDevTools

打开开发者工具  

## openUrl

打开指定的 URL  

- _**url**_: string 要打开的 URL  

- _**option**_: OpenUrlOptions - 可选参数，用于配置 URL 打开的方式  

## reload

重新加载窗口  

## restore

还原窗口  

## setAlwaysOnTop

设置窗口是否总在最前  

- _**alwaysOnTop**_: boolean  

## setBackgroundThrottling

Controls whether or not this window's WebContents will throttle animations and timers when the page becomes backgrounded. This also affects the Page Visibility API.  




参考：

- ://www.electronjs.org/docs/latest/api/web-contents#contentssetbackgroundthrottlingallowed

## setBounds

设置窗口边界  

- _**bounds**_: - 窗口的边界矩形  

- _**animate**_: - 是否启用动画  

## setHasShadow

设置窗口是否有阴影  

- _**hasShadow**_: boolean  

## setIgnoreMouseEvent

设置是否忽略鼠标事件  

- _**ignore**_: boolean  

## setMaximumSize

设置窗口的最大尺寸  

- _**width**_: - 最大宽度  

- _**height**_: - 最大高度  

## setMinimumSize

设置窗口的最小尺寸  

- _**width**_: - 最大宽度  

- _**height**_: - 最大高度  

## setMovable

设置窗口是否可移动  

- _**movable**_: boolean - 是否可移动  

## setNoActivate

A top-level window created with this style does not become the foreground window when the user clicks it. The system does not bring this window to the foreground when the user minimizes or closes the foreground window.
The window should not be activated through programmatic access or via keyboard navigation by accessible technology, such as Narrator.  




参考：

- [Extended Window Styles](https://learn.microsoft.com/en-us/windows/win32/winmsg/extended-window-styles)

## setPosition

设置窗口位置  

- _**options**_: - 配置窗口位置的选项  

## setProxy

设置窗口网络代理，设置后所有链接都会断开，最好重新刷新下页面(window.location.reload())  


**Example:**
```typescript
BrowserWindowApi.setProxy({
    proxyRules:'socks5://127.0.0.1:7890'
})
```


## setResizable

设置窗口是否可调整大小  

- _**resizable**_: boolean - 是否可调整大小  

## setSize

设置窗口大小  

- _**width**_: boolean - 窗口宽度  

- _**height**_: boolean - 窗口高度  

- _**animate**_: boolean - 是否使用动画（可选）  

## setZoomFactor

更改缩放倍数 缩放系数是缩放百分比除以 100，即 300% = 3.0  

- _**factor**_: Double - 缩放系数，默认为 1.0  

## setZoomLevel

更改缩放等级 原始尺寸为 0，每升高或将顶代表缩放20%，大和小限制默认分区为 300% 和 50% 缩放公式为 scale := 1.2 ^ level.  

- _**level**_: number - 缩放等级，默认为 0  

## show

显示窗口  

## showInactive

以不激活窗口的方式显示窗口  

## startDraggingWindow

开始拖动窗口  

## stopDraggingWindow

停止拖动窗口  

## unmaximize

取消最大化窗口  
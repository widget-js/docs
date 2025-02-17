# WidgetApi

WidgetApi 接口定义了一系列用于控制组件的方法，这些方法提供了组件的注册、升级、获取、打开设置页面、重新加载等功能  

## getWidget

通过组件名称获取组件  

- _**name**_: string 组件名  


**return**: Promise&lt;Widget&gt;  

## getWidgetPackage

## getWidgetPackages

## getWidgetPackageUrl

## getWidgets

获取所有组件  


**return**: Promise&lt;Widget[]&gt;  

## openConfigPage

打开组件设置页面  

- _**id**_: string 组件id  

## openConfigPageByName

## registerWidgetPackage

## registerWidgets

注册组件  

## reload

重新加载组件  

## setMouseDraggable

设置组件是否可以左键拖动  

- _**draggable**_: boolean true-启用左键拖动 false-禁用左键拖动  

## upgradePackage

升级组件包  

- _**packageName**_: 组件包名  
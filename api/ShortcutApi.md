# ShortcutApi

ShortcutApi 提供了注册快捷键的能力，当快捷键被触发时，会发送广播事件   

## register

注册快捷键, 如果注册成功, 触发快捷键时，会发送广播事件   

- _**shortcut**_: string  


**return**: Promise&lt;boolean&gt; true 注册成功，false 注册失败  


**Example:**
```typescript
//Meta 通常为windows键
ShortcutApi.register('Ctrl+Meta+Y')
```





参考：

- [Electron Accelerator](https://www.electronjs.org/docs/latest/api/accelerator)

## unregister

注销快捷键  

- _**shortcut**_: string  


**Example:**
```typescript
//Meta 通常为windows键
ShortcutApi.unregister('Ctrl+Meta+Y')
```


# ShortcutApiEvent

|Event|Comment|Payload|
|---|---|---|
|TRIGGERED|快捷键触发事件||
# DeployedWidgetApi

## API各个函数功能

### `removeDeployedWidget`

**Signature:**
```typescript
removeDeployedWidget: (id?: string) => Promise<void>
```

### `removeDeployedWidgetByName`

**Signature:**
```typescript
removeDeployedWidgetByName: (name: string) => Promise<DeployedWidget[]>
```

### `getDeployedWidgets`

**Signature:**
```typescript
getDeployedWidgets: () => Promise<DeployedWidget[]>
```

### `openDevTools`

**Signature:**
```typescript
openDevTools: (id: string) => Promise<void>
```

### `openConfigPage`

@deprecated Use WidgetApi.openConfigPage instead

**Params:**

| Param Name | Description |
| --- | --- |
| `id` | - |

**Signature:**
```typescript
openConfigPage: (id?: string, params?: WidgetParams) => Promise<void>
```

### `registerActiveShortcut`

**Signature:**
```typescript
registerActiveShortcut: (id: string, shortcut: string) => Promise<boolean>
```

### `setProxy`

Set proxy for the widget, this will reload the widget after setting the proxy.

**Params:**

| Param Name | Description |
| --- | --- |
| `id` | - |
| `proxy` | - |

**Signature:**
```typescript
setProxy: (id: string, proxy: string) => Promise<boolean>
```

### `getDeployedWidget`

**Signature:**
```typescript
getDeployedWidget: (id: string) => Promise<DeployedWidget>
```

### `addWidget`

Adds a new widget with the specified options.
If in browser environment, it will open widget://widgetjs.cn/widget?packageUrl=xxx&name=xxx&package

**Params:**

| Param Name | Description |
| --- | --- |
| `options` | - The options for the widget to be added. |

**Returns:** A promise that resolves with an array of added widgets. 

**Signature:**
```typescript
addWidget: (options: AddWidgetOption) => Promise<Widget[]>
```

### `createDesktopShortcut`

Create a desktop shortcut

**Params:**

| Param Name | Description |
| --- | --- |
| `widgetName` | Widget name |

**Returns:** Returns true on success, false otherwise 

**Signature:**
```typescript
createDesktopShortcut: (widgetName: string) => Promise<boolean>
```

## API事件 Event

| Event Name | Value | Description |
| --- | --- | --- |
| `SECOND_INSTANCE` | `channel::cn.widgetjs.core.deployed_widget.second_instance` | Second instance start event |

## API常量 Constants

暂无常量


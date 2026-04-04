# WidgetApi

## API各个函数功能

### `registerWidgets`

Register widgets

**Params:**

| Param Name | Description |
| --- | --- |
| `widgets` | - |

**Signature:**
```typescript
registerWidgets: (widgets: Widget[]) => Promise<void>
```

### `registerWidgetPackage`

@deprecated

**Signature:**
```typescript
registerWidgetPackage: (widgetPackage: WidgetPackage) => Promise<void>
```

### `setIgnoreMouseEvents`

ignore mouse events

**Params:**

| Param Name | Description |
| --- | --- |
| `widgetId` | - |
| `ignore` | - |

**Signature:**
```typescript
setIgnoreMouseEvents: (widgetId: string, ignore: boolean) => Promise<void>
```

### `isIgnoreMouseEvents`

Check if the widget is ignoring mouse events.

**Params:**

| Param Name | Description |
| --- | --- |
| `widgetId` | - |

**Signature:**
```typescript
isIgnoreMouseEvents: (widgetId?: string) => Promise<boolean>
```

### `setMouseDraggable`

Set whether the widget can be dragged with the left mouse button
@remarks Note: Only effective for floating window widgets (DeployMode.OVERLAP)

**Params:**

| Param Name | Description |
| --- | --- |
| `draggable` | boolean true-enable left click drag false-disable left click drag |

**Signature:**
```typescript
setMouseDraggable: (draggable: boolean) => Promise<void>
```

### `upgradePackage`

Upgrade widget package

**Params:**

| Param Name | Description |
| --- | --- |
| `packageName` | Widget package name  |

**Signature:**
```typescript
upgradePackage: (packageName: string) => Promise<void>
```

### `getWidgets`

Get all widgets

**Returns:** `Promise<Widget[]>`

**Signature:**
```typescript
getWidgets: () => Promise<Widget[]>
```

### `getWidget`

Get widget by widget name

**Params:**

| Param Name | Description |
| --- | --- |
| `name` | string Widget name |

**Returns:** `Promise<Widget>`

**Signature:**
```typescript
getWidget: (name: string) => Promise<Widget>
```

### `getWidgetPackage`

@deprecated

**Params:**

| Param Name | Description |
| --- | --- |
| `name` | - |

**Signature:**
```typescript
getWidgetPackage: (name: string) => Promise<WidgetPackage | undefined>
```

### `getWidgetPackages`

@deprecated

**Signature:**
```typescript
getWidgetPackages: () => Promise<WidgetPackage[]>
```

### `openConfigPage`

Open widget settings page

**Params:**

| Param Name | Description |
| --- | --- |
| `id` | string Widget id  |

**Signature:**
```typescript
openConfigPage: (id?: string) => Promise<void>
```

### `openConfigPageByName`

**Params:**

| Param Name | Description |
| --- | --- |
| `name` | - |

**Signature:**
```typescript
openConfigPageByName: (name: string) => Promise<void>
```

### `reload`

Reload widget

**Signature:**
```typescript
reload: (id?: string) => Promise<void>
```

### `getWidgetPackageUrl`

@deprecated

**Params:**

| Param Name | Description |
| --- | --- |
| `packageName` | - |

**Signature:**
```typescript
getWidgetPackageUrl: (packageName: string) => Promise<string | null>
```

### `restartWidgets`

**Signature:**
```typescript
restartWidgets: (mode?: DeployMode) => Promise<void>
```

### `updateSyncInfo`

**Signature:**
```typescript
updateSyncInfo: () => Promise<void>
```

### `getSyncInfo`

**Signature:**
```typescript
getSyncInfo: (widgetName?: string) => Promise<WidgetSyncInfo | null>
```

## API事件 Event

暂无事件

## API常量 Constants

暂无常量


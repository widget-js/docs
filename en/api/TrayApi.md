# TrayApi

## API Functions

### `setTray`

Create or update the tray icon with given options.
Resolves once the native tray object is created/updated.

**Params:**

| Param Name | Description |
| --- | --- |
| `options` | AddTrayOptions - image and optional tooltip  |

**Signature:**
```typescript
setTray: (options: AddTrayOptions) => Promise<void>
```

### `removeTray`

Remove the tray icon and free native resources.
Resolves when the tray has been removed.

**Signature:**
```typescript
removeTray: () => Promise<void>
```

### `displayBalloon`

Displays a balloon notification.

**Params:**

| Param Name | Description |
| --- | --- |
| `options` | DisplayBalloonOptions  |

**Signature:**
```typescript
displayBalloon: (options: DisplayBalloonOptions) => Promise<void>
```

### `removeBalloon`

Removes a balloon notification.

**Signature:**
```typescript
removeBalloon: () => Promise<void>
```

### `setContextMenu`

Set the context menu for the tray icon.
Replaces any previously set menu.

**Params:**

| Param Name | Description |
| --- | --- |
| `menus` | Array of WidgetMenuItem describing the menu structure  |

**Signature:**
```typescript
setContextMenu: (menus: WidgetMenuItem[]) => Promise<void>
```

### `closeContextMenu`

Close any open context menu for the tray (if supported by the platform).

**Signature:**
```typescript
closeContextMenu: () => Promise<void>
```

### `popUpContextMenu`

Programmatically pop up a context menu at the optional screen position.
On some platforms the position may be ignored.

**Params:**

| Param Name | Description |
| --- | --- |
| `menus` | menu items to show |
| `position` | optional screen point where the menu should appear  |

**Signature:**
```typescript
popUpContextMenu: (menus: WidgetMenuItem[], position?: Point) => Promise<void>
```

### `isDestroyed`

Returns whether the underlying native tray object has been destroyed.
Useful to check before calling other tray methods.

**Signature:**
```typescript
isDestroyed: () => Promise<boolean>
```

### `getBounds`

Get the bounds of the tray icon on screen.
Returns a Rectangle when available, or `null` if the bounds cannot be determined
on the current platform or if the tray is not present.

**Signature:**
```typescript
getBounds: () => Promise<Rectangle | null>
```

### `focus`

Bring the application to the foreground or focus the window associated with the tray.
Exact behavior depends on platform and application window state.

**Signature:**
```typescript
focus: () => Promise<void>
```

## API Events

| Event Name | Value | Description |
| --- | --- | --- |
| `CLICK` | `'channel::cn.widgetjs.core.tray.click'` | Emitted when the tray icon is clicked (usually left-button click).<br>Channel: 'channel::cn.widgetjs.core.tray.click' |
| `RIGHT_CLICK` | `'channel::cn.widgetjs.core.tray.right-click'` | Emitted when the tray icon receives a right-button click.<br>Channel: 'channel::cn.widgetjs.core.tray.right-click' |
| `MIDDLE_CLICK` | `'channel::cn.widgetjs.core.tray.middle-click'` | Emitted when the tray icon receives a middle-button click (if supported).<br>Channel: 'channel::cn.widgetjs.core.tray.middle-click' |
| `MOUSE_ENTER` | `'channel::cn.widgetjs.core.tray.mouse-enter'` | Emitted when the mouse pointer enters the tray icon area (hover start).<br>Channel: 'channel::cn.widgetjs.core.tray.mouse-enter' |
| `MOUSE_LEAVE` | `'channel::cn.widgetjs.core.tray.mouse-leave'` | Emitted when the mouse pointer leaves the tray icon area (hover end).<br>Channel: 'channel::cn.widgetjs.core.tray.mouse-leave' |

## API Constants

No constants available.


# BrowserWindowApi

## API Functions

### `setIgnoreMouseEvent`

Set whether to ignore mouse events

**Params:**

| Param Name | Description |
| --- | --- |
| `ignore` | boolean  |

**Signature:**
```typescript
setIgnoreMouseEvent: (ignore: boolean) => Promise<void>
```

### `show`

Show window

**Signature:**
```typescript
show: () => Promise<void>
```

### `setHasShadow`

Set whether the window has a shadow

**Params:**

| Param Name | Description |
| --- | --- |
| `hasShadow` | boolean  |

**Signature:**
```typescript
setHasShadow: (hasShadow: boolean) => Promise<void>
```

### `hide`

Hide window

**Signature:**
```typescript
hide: () => Promise<void>
```

### `close`

Close window

**Signature:**
```typescript
close: () => Promise<void>
```

### `showInactive`

Show window without activating it

**Signature:**
```typescript
showInactive: () => Promise<void>
```

### `center`

Center window

**Signature:**
```typescript
center: () => Promise<void>
```

### `minimize`

Minimize window

**Signature:**
```typescript
minimize: () => Promise<void>
```

### `restore`

Restore window

**Signature:**
```typescript
restore: () => Promise<void>
```

### `isMinimized`

Whether the window is minimized

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isMinimized: () => Promise<boolean>
```

### `isMaximized`

Check if the window is maximized

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isMaximized: () => Promise<boolean>
```

### `isVisible`

Check if the window is visible

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isVisible: () => Promise<boolean>
```

### `isResizable`

Check if the window is resizable
@since 24.1.1-beta.6

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isResizable: () => Promise<boolean>
```

### `maximize`

Maximize window

**Signature:**
```typescript
maximize: () => Promise<void>
```

### `stopDraggingWindow`

Stop dragging the window

**Signature:**
```typescript
stopDraggingWindow: () => Promise<void>
```

### `startDraggingWindow`

Start dragging the window

**Signature:**
```typescript
startDraggingWindow: () => Promise<void>
```

### `isDraggingWindow`

Check if the window is being dragged

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isDraggingWindow: () => Promise<boolean>
```

### `setAlwaysOnTop`

Set whether the window is always on top

**Params:**

| Param Name | Description |
| --- | --- |
| `alwaysOnTop` | boolean  |

**Signature:**
```typescript
setAlwaysOnTop: (alwaysOnTop: boolean) => Promise<void>
```

### `isAlwaysOnTop`

Check if the window is always on top

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isAlwaysOnTop: () => Promise<boolean>
```

### `openUrl`

Open specified URL

**Params:**

| Param Name | Description |
| --- | --- |
| `url` | string The URL to open |
| `option` | OpenUrlOptions - Optional parameters for configuring how the URL is opened  |

**Signature:**
```typescript
openUrl: (url: string, option?: BrowserWindowOptions) => Promise<void>
```

### `moveTop`

Move the window to the top

**Signature:**
```typescript
moveTop: () => Promise<void>
```

### `unmaximize`

Unmaximize window

**Signature:**
```typescript
unmaximize: () => Promise<void>
```

### `reload`

Reload window

**Signature:**
```typescript
reload: () => Promise<void>
```

### `setSize`

Set window size

**Params:**

| Param Name | Description |
| --- | --- |
| `width` | boolean - Window width |
| `height` | boolean - Window height |
| `animate` | boolean - Whether to use animation (optional)  |

**Signature:**
```typescript
setSize: (width: number, height: number, animate?: boolean) => Promise<void>
```

### `getSize`

Get window size
@since 24.1.1-beta.6

**Returns:** `Promise<number[]>`

**Signature:**
```typescript
getSize: () => Promise<number[]>
```

### `openDevTools`

Open developer tools

**Signature:**
```typescript
openDevTools: () => Promise<void>
```

### `setPosition`

Set window position

**Params:**

| Param Name | Description |
| --- | --- |
| `{SetPositionOptions}` | options - Options for configuring the window position  |

**Signature:**
```typescript
setPosition: (options: SetPositionOptions) => Promise<void>
```

### `getPosition`

Get window position

**Returns:** {`Promise<Position>`} Returns a Promise that resolves to the window's position

**Signature:**
```typescript
getPosition: () => Promise<Position>
```

### `blur`

Blur window

**Signature:**
```typescript
blur: () => Promise<void>
```

### `focus`

Focus window

**Signature:**
```typescript
focus: () => Promise<void>
```

### `setResizable`

Set whether the window is resizable

**Params:**

| Param Name | Description |
| --- | --- |
| `resizable` | boolean - Whether it is resizable  |

**Signature:**
```typescript
setResizable: (resizable: boolean) => Promise<void>
```

### `setMovable`

Set whether the window is movable

**Params:**

| Param Name | Description |
| --- | --- |
| `movable` | boolean - Whether it is movable  |

**Signature:**
```typescript
setMovable: (movable: boolean) => Promise<void>
```

### `getBounds`

Get window bounds

**Returns:** `Promise<Rectangle>`

**Signature:**
```typescript
getBounds: () => Promise<Rectangle>
```

### `setBounds`

Set window bounds

**Params:**

| Param Name | Description |
| --- | --- |
| `{Partial<Rectangle>}` | bounds - The bounds rectangle of the window |
| `{boolean}` | animate - Whether to enable animation  |

**Signature:**
```typescript
setBounds: (bounds: Partial<Rectangle>, animate: boolean) => Promise<void>
```

### `alignToScreen`

Align the window to the current screen

**Params:**

| Param Name | Description |
| --- | --- |
| `align` | string Alignment position <ol> <li>'top-left'</li> <li>'top-center'</li> <li>'top-right'</li> <li>'bottom-left'</li> <li>'bottom-center'</li> <li>'bottom-right'</li> </ol>  |

**Signature:**
```typescript
alignToScreen: (align: AlignPosition) => Promise<void>
```

### `existsByUrl`

Check if the specified URL exists

**Params:**

| Param Name | Description |
| --- | --- |
| `{string}` | url - The URL to check |

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
existsByUrl: (url: string) => Promise<boolean>
```

### `getMaximumSize`

Get the maximum size of the window

**Returns:** {`Promise<number[]>`} Returns a Promise that resolves to an array containing the maximum width and height of the window

**Signature:**
```typescript
getMaximumSize: () => Promise<number[]>
```

### `getMinimumSize`

Get the minimum size of the window

**Returns:** {`Promise<number[]>`} Returns a Promise that resolves to an array containing the minimum width and height of the window

**Signature:**
```typescript
getMinimumSize: () => Promise<number[]>
```

### `setMaximumSize`

Set the maximum size of the window

**Params:**

| Param Name | Description |
| --- | --- |
| `{number}` | width - Maximum width |
| `{number}` | height - Maximum height  |

**Signature:**
```typescript
setMaximumSize: (width: number, height: number) => Promise<void>
```

### `setMinimumSize`

Set the minimum size of the window

**Params:**

| Param Name | Description |
| --- | --- |
| `{number}` | width - Maximum width |
| `{number}` | height - Maximum height  |

**Signature:**
```typescript
setMinimumSize: (width: number, height: number) => Promise<void>
```

### `setZoomLevel`

Change the zoom level. Original size is 0, each increment or decrement represents a 20% zoom. The default upper and lower limits are 300% and 50%. The zoom formula is scale := 1.2 ^ level.

**Params:**

| Param Name | Description |
| --- | --- |
| `level` | number - Zoom level, default is 0  |

**Signature:**
```typescript
setZoomLevel: (level: number) => Promise<void>
```

### `setZoomFactor`

Change zoom factor. The zoom factor is the zoom percentage divided by 100, i.e., 300% = 3.0
@remarks The factor must be greater than 0.0

**Params:**

| Param Name | Description |
| --- | --- |
| `factor` | Double - Zoom factor, default is 1.0 |

**Signature:**
```typescript
setZoomFactor: (factor: number) => Promise<void>
```

### `setProxy`

Set the proxy config for window. All requests will be sent through the proxy server.
Proxy config will be lost once the window is closed. If you want to set a persistent proxy for widget window, use `DeployWidgetApi.setProxy` instead.
@remarks All links will be disconnected after setting, it is best to refresh the page (window.location.reload())
@example
```typescript
BrowserWindowApi.setProxy({
proxyRules:'socks5://127.0.0.1:7890'
})
```

**Params:**

| Param Name | Description |
| --- | --- |
| `config` | - |

**Signature:**
```typescript
setProxy: (config: ProxyConfig) => Promise<void>
```

### `getProxy`

**Signature:**
```typescript
getProxy: () => Promise<ProxyConfig | undefined>
```

### `isFocused`

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isFocused: () => Promise<boolean>
```

### `setNoActivate`

A top-level window created with this style does not become the foreground window when the user clicks it. The system does not bring this window to the foreground when the user minimizes or closes the foreground window.
The window should not be activated through programmatic access or via keyboard navigation by accessible technology, such as Narrator.
@see [Extended Window Styles](https://learn.microsoft.com/en-us/windows/win32/winmsg/extended-window-styles)

**Signature:**
```typescript
setNoActivate: () => Promise<void>
```

### `setBackgroundThrottling`

Controls whether or not this window's WebContents will throttle animations and timers when the page becomes backgrounded. This also affects the Page Visibility API.
@see https://www.electronjs.org/docs/latest/api/web-contents#contentssetbackgroundthrottlingallowed

**Params:**

| Param Name | Description |
| --- | --- |
| `enabled` | - |

**Signature:**
```typescript
setBackgroundThrottling: (enabled: boolean) => Promise<void>
```

### `getBackgroundThrottling`

**Signature:**
```typescript
getBackgroundThrottling: () => Promise<boolean>
```

### `setSkipTaskbar`

Makes the window not show in the taskbar.

**Params:**

| Param Name | Description |
| --- | --- |
| `boolean` | - |

**Signature:**
```typescript
setSkipTaskbar: (boolean: boolean) => Promise<void>
```

## API Events

No events available.

## API Constants

No constants available.


# AppApi

## API各个函数功能

### `setConfig`

Set configuration

**Params:**

| Param Name | Description |
| --- | --- |
| `key` | string |
| `value` | string | number | boolean  |

**Signature:**
```typescript
setConfig: (key: string | AppApiConstants, value: string | number | boolean) => Promise<any>
```

### `getConfig`

Get configuration

**Params:**

| Param Name | Description |
| --- | --- |
| `key` | - |
| `defaultValue` | - |

**Returns:** `Promise<string | number | boolean>`

**Signature:**
```typescript
getConfig: <T extends string | number | boolean>(key: string | AppApiConstants, defaultValue: T) => Promise<T>
```

### `getVersion`

Get version information

**Params:**

| Param Name | Description |
| --- | --- |
| `type` | string - Optional. Specify the type of version to get. <ol> <li>`app`: Get app's version with Semantic Versioning format. The version is different from Microsoft store's version. For example, if the app's version is `24.1.1`, Microsoft store's version will be `24.1.1.0`</li> <li>`electron`: Get the version of the Electron framework.</li> <li>`chrome`: Get the Chromium version used by Electron.</li> <li>`node`: Get the Node.js version.</li> <li>`v8`: Get the V8 engine version.</li> </ol> |

**Returns:** `Promise<string>`

**Signature:**
```typescript
getVersion: (type?: 'app' | 'electron' | 'chrome' | 'node' | 'v8') => Promise<string>
```

### `getRuntimeInfo`

Get App's runtime info (e.g. app name, os/electron/node version, etc.)

**Signature:**
```typescript
getRuntimeInfo: () => Promise<AppRuntimeInfo>
```

### `getPreloadPath`

Get Preload JS path
@see [Using Preload Scripts](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload)

**Returns:** `Promise<string>`

**Signature:**
```typescript
getPreloadPath: () => Promise<string>
```

### `getAppPath`

Get application installation path

**Returns:** `Promise<string>`

**Signature:**
```typescript
getAppPath: () => Promise<string>
```

### `openAddWidgetWindow`

Open the app's add/search widget window
@deprecated Use `showAppWindow('/widget/add', options)` instead, which is more flexible and supports custom routes.

**Signature:**
```typescript
openAddWidgetWindow: () => Promise<void>
```

### `showAppWindow`

Show a new window with specified route and options
support routes:
/user/profile
/auth/register

**Params:**

| Param Name | Description |
| --- | --- |
| `route` | - |
| `options` | - |

**Signature:**
```typescript
showAppWindow: (route: string | AppRoutes, options?: BrowserWindowOptions) => Promise<void>
```

### `openSettingWindow`

Open the app's setting window
@deprecated Use `showAppWindow('/setting/common', options)` instead, which is more flexible and supports custom routes.

**Signature:**
```typescript
openSettingWindow: () => Promise<void>
```

### `openCheckUpdateWindow`

Open the app's update window
@deprecated Use `showAppWindow('/widget/info', options)` instead, which is more flexible and supports custom routes.

**Signature:**
```typescript
openCheckUpdateWindow: () => Promise<void>
```

### `openWidgetManagerWindow`

open the app's widget manager window
@deprecated Use `showAppWindow('/widget/search', options)` instead, which is more flexible and supports custom routes.

**Signature:**
```typescript
openWidgetManagerWindow: () => Promise<void>
```

### `openWidgetPackageManagerWindow`

@deprecated Use `showAppWindow('/widget/package', options)` instead, which is more flexible and supports custom routes.

**Signature:**
```typescript
openWidgetPackageManagerWindow: () => Promise<void>
```

### `openRuntimeInfoWindow`

Open the app's runtime info window
@deprecated Use `showAppWindow('/setting/info', options)` instead, which is more flexible and supports custom routes.

**Signature:**
```typescript
openRuntimeInfoWindow: () => Promise<void>
```

### `getIconFile`

Get the app's icon file path

**Returns:** `Promise<string>`

**Signature:**
```typescript
getIconFile: () => Promise<string>
```

### `isWindowsStore`

Check if the app is running as Windows Store app (appx)

**Returns:** `Promise<boolean>`

**Signature:**
```typescript
isWindowsStore: () => Promise<boolean>
```

### `getLanguageCode`

Get app's language, if user has not set, return `navigator.language`

**Signature:**
```typescript
getLanguageCode: () => Promise<string>
```

### `setLanguageCode`

Set app's language

**Params:**

| Param Name | Description |
| --- | --- |
| `code` | - |

**Signature:**
```typescript
setLanguageCode: (code: LanguageCode) => Promise<void>
```

### `setProxy`

Set app's global proxy settings, set empty string to disable proxy
@example
```typescript
AppApi.setProxy({
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
getProxy: () => Promise<ProxyConfig>
```

### `setThemeCSS`

Set app's global theme CSS

**Params:**

| Param Name | Description |
| --- | --- |
| `css` | - |

**Signature:**
```typescript
setThemeCSS: (css: string) => Promise<void>
```

### `getThemeCSS`

Get the app's global theme CSS

**Returns:** `Promise<string>` If the theme CSS is not set, return empty string

**Signature:**
```typescript
getThemeCSS: () => Promise<string>
```

### `setDevMode`

enable/disable developer mode

**Signature:**
```typescript
setDevMode: (enable: boolean) => Promise<void>
```

### `getDevMode`

get developer mode is enabled

**Signature:**
```typescript
getDevMode: () => Promise<boolean>
```

### `getGridCellSize`

Get the app's desktop grid system cell size

**Signature:**
```typescript
getGridCellSize: () => Promise<number>
```

### `setGridCellSize`

Set the app's desktop grid system cell size

**Params:**

| Param Name | Description |
| --- | --- |
| `size` | - |

**Signature:**
```typescript
setGridCellSize: (size: number) => Promise<void>
```

### `exit`

exit application

**Signature:**
```typescript
exit: () => Promise<void>
```

## API事件 Event

| Event Name | Value | Description |
| --- | --- | --- |
| `CONFIG_CHANGED` | `'event::cn.widgetjs.core.app.config.changed'` | Triggered when application settings change |
| `MOVING_GRID_WINDOW` | `'event::cn.widgetjs.core.app.moving.grid.window'` | Triggered when the desktop widget grid window moves |
| `STOP_MOVING_GRID_WINDOW` | `'event::cn.widgetjs.core.app.moving.grid.window.stop'` | Triggered when the desktop widget grid window stops moving |
| `PROXY_CHANGED` | `'event::cn.widgetjs.core.app.proxy.changed'` | Application proxy changed |
| `LANGUAGE_CHANGED` | `'event::cn.widgetjs.core.app.language.changed'` | Application language changed |

## API常量 Constants

| Constant Name | Value | Description |
| --- | --- | --- |
| `CONFIG_GRID_CELL_SIZE` | `'cn.widgetjs.config.grid.size'` | Desktop widget grid size |
| `CONFIG_WIDGET_THEME_CSS` | `'cn.widgetjs.config.widget.theme.css'` | Application theme CSS settings |
| `CONFIG_PROXY` | `'cn.widgetjs.config.app.proxy'` | Application global proxy settings |
| `CONFIG_DEV_MODE` | `'cn.widgetjs.config.app.dev.mode'` | - |
| `CONFIG_LANGUAGE` | `'cn.widgetjs.config.app.language'` | Application language settings |


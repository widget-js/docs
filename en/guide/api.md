# API

widget-js encapsulates a set of easy-to-use APIs to help developers quickly build feature-rich Widget Hub. Below are the main API categories and their brief descriptions:

- [AppApi](../api/AppApi.md) — Operations related to application global configuration, paths, versions, and built-in windows (e.g., getting app paths, setting theme CSS, managing proxies, etc.).
- [BroadcastApi](../api/BroadcastApi.md) — Broadcast/subscribe mechanism for sending and receiving events between different modules or widget packages. Suitable for cross-module communication and messaging.
- [BrowserWindowApi](../api/BrowserWindowApi.md) — A collection of methods for window control (show/hide, move, resize, focus, set proxy, etc.), used to manage widget or application window behaviors.
- [DialogApi](../api/DialogApi.md) — Dialog selection interface, providing common dialog functions such as file/folder selection.
- [LogApi](../api/LogApi.md) — Log output interface, helping to save logs to local files and record information, errors, and warnings by level.
- [MenuApi](../api/MenuApi.md) — Menu-related operations, including the ability to add/remove custom menus and context menus, as well as showing menus.
- [MouseApi](../api/MouseApi.md) — Mouse-related tools, such as creating/clearing screen edge hotspots, used to implement effects like edge-hiding.
- [NotificationApi](../api/NotificationApi.md) — Notification interface, used to send informational, success, failure, or reminder notifications and control their display duration or hide them.
- [ProcessApi](../api/ProcessApi.md) — Process and system-level information query, such as memory statistics, system version, and underlying runtime information retrieval.
- [ShortcutApi](../api/ShortcutApi.md) — Global shortcut registration/unregistration interface, supporting sending broadcast events when a shortcut is triggered.
- [StorageApi](../api/StorageApi.md) — Local storage interface, including encryption/decryption, get/set, and object storage functions, supporting DPAPI encryption (Windows).
- [SystemApi](../api/SystemApi.md) — System information-related interfaces, getting hardware, sensor information, and system wallpaper, etc.
- [WidgetApi](../api/WidgetApi.md) — Widget runtime management interface, used to register, get, reload widgets, open configuration pages, and set drag behaviors, etc.
- [WidgetPackageApi](../api/WidgetPackageApi.md) — Widget package management interface, providing installation, upgrade, getting package info, and entry/homepage URL retrieval functions.

For more API details and usage examples, please click the corresponding links to view the individual documentation pages for each API.

## Usage Examples

Get the application version number:
```typescript
AppApi.getVersion('app').then(appVersion => {
  console.log('App Version:', appVersion)
})
```

Send a notification:
```typescript
NotificationApi.info('This is an informational message.', 5000)
```

# SystemApi

## API Functions

### `getWallpaper`

Get system wallpaper absolute path

**Signature:**
```typescript
getWallpaper: () => Promise<string>
```

### `getInfo`

Get system information based on the provided valuesObject. The valuesObject can contain specific keys to retrieve certain information.
@see   https://systeminformation.io/general.html

**Params:**

| Param Name | Description |
| --- | --- |
| `valuesObject` | - |

**Signature:**
```typescript
getInfo: (valuesObject: any) => Promise<any>
```

### `getUptime`

Get system uptime in seconds

**Returns:** `Promise<number>`

**Signature:**
```typescript
getUptime: () => Promise<number>
```

### `launchStoreDetailsPage`

Launches the full product details page (PDP) for a product at Microsoft Store.
@see   https://learn.microsoft.com/en-us/windows/apps/develop/launch/launch-store-app

**Params:**

| Param Name | Description |
| --- | --- |
| `storeId` | - |

**Signature:**
```typescript
launchStoreDetailsPage: (storeId?: string) => Promise<void>
```

### `launchWindowsSettings`

@see https://learn.microsoft.com/en-us/windows/apps/develop/launch/launch-settings-app
@example ms-settings:defaultapps
@example ms-settings:startupapps

**Params:**

| Param Name | Description |
| --- | --- |
| `uri` | Use this URI scheme to launch the Windows Settings app to specific settings pages. |

**Signature:**
```typescript
launchWindowsSettings: (uri: string) => Promise<void>
```

## API Events

| Event Name | Value | Description |
| --- | --- | --- |
| `DATE_CHANGED` | `'event::cn.widgetjs.core.sys.date.changed'` | Date changed event |

## API Constants

No constants available.


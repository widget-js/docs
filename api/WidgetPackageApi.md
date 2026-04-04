# WidgetPackageApi

## API各个函数功能

### `upgrade`

Upgrade widget package

**Params:**

| Param Name | Description |
| --- | --- |
| `packageName` | Widget package name |
| `remoteUrlInfo` | - |

**Signature:**
```typescript
upgrade: (packageName: string, remoteUrlInfo: RemotePackageUrlInfo) => Promise<void>
```

### `getIndexUrl`

Get index url information of the widget package

**Params:**

| Param Name | Description |
| --- | --- |
| `packageName` | - |

**Signature:**
```typescript
getIndexUrl: (packageName: string) => Promise<string | null>
```

### `getEntryUrl`

Get entry url information of the widget package

**Params:**

| Param Name | Description |
| --- | --- |
| `packageName` | - |

**Signature:**
```typescript
getEntryUrl: (packageName: string) => Promise<string | null>
```

### `getPackage`

Get widget package information by package name

**Params:**

| Param Name | Description |
| --- | --- |
| `name` | - |

**Signature:**
```typescript
getPackage: (name: string) => Promise<WidgetPackage | undefined>
```

### `getPackages`

Get installed widget packages

**Signature:**
```typescript
getPackages: () => Promise<WidgetPackage[]>
```

### `install`

Install a widget package, if the package is a string, it will be treated as a path or http url to install the widget.zip file.

**Params:**

| Param Name | Description |
| --- | --- |
| `widgetPackage` | - |

**Signature:**
```typescript
install: (widgetPackage: WidgetPackage | string) => Promise<void>
```

### `uninstall`

Uninstall a widget package by package name.

**Params:**

| Param Name | Description |
| --- | --- |
| `packageName` | - |
| `clearData` | Whether to clear the data of the widget package, default is false.  |

**Signature:**
```typescript
uninstall: (widgetPackage: WidgetPackage | string, clearData?: boolean) => Promise<void>
```

## API事件 Event

| Event Name | Value | Description |
| --- | --- | --- |
| `PACKAGE_UPGRADE` | `'event::cn.widgetjs.core.widget.package.upgraded'` | Widget package upgraded event |
| `PACKAGE_INSTALLED` | `'event::cn.widgetjs.core.widget.package.installed'` | Widget package installed event |

## API常量 Constants

暂无常量


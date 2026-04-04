# ShortcutApi

## API Functions

### `register`

Register shortcut, if successful, when the shortcut is triggered, a broadcast event {@link BroadcastEvent} will be sent.
@see [Electron Accelerator](https://www.electronjs.org/docs/latest/api/accelerator)
@example
```typescript
// Meta is usually the Windows key
ShortcutApi.register('Ctrl+Meta+Y')
```

**Params:**

| Param Name | Description |
| --- | --- |
| `shortcut` | string |

**Returns:** `Promise<boolean>` true on success, false on failure

**Signature:**
```typescript
register: (shortcut: string) => Promise<boolean>
```

### `unregister`

Unregister shortcut
@example
```typescript
// Meta is usually the Windows key
ShortcutApi.unregister('Ctrl+Meta+Y')
```

**Params:**

| Param Name | Description |
| --- | --- |
| `shortcut` | string |

**Signature:**
```typescript
unregister: (shortcut: string) => void
```

## API Events

| Event Name | Value | Description |
| --- | --- | --- |
| `TRIGGERED` | `'channel::cn.widgetjs.core.shortcut.triggered'` | Shortcut triggered event |

## API Constants

No constants available.


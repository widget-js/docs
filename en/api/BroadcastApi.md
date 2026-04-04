# BroadcastApi

## API Functions

### `send`

send broadcast event

**Params:**

| Param Name | Description |
| --- | --- |
| `event` | - |

**Signature:**
```typescript
send: (event: BroadcastEvent) => Promise<void>
```

### `register`

register listener for broadcast event

**Params:**

| Param Name | Description |
| --- | --- |
| `event` | - |

**Signature:**
```typescript
register: (...event: BroadcastEventType[]) => Promise<void>
```

### `unregister`

Unregister broadcast event

**Params:**

| Param Name | Description |
| --- | --- |
| `event` | - |

**Signature:**
```typescript
unregister: (...event: BroadcastEventType[]) => Promise<void>
```

## API Events

No events available.

## API Constants

No constants available.


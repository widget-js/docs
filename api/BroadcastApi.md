# BroadcastApi

## API各个函数功能

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

## API事件 Event

暂无事件

## API常量 Constants

暂无常量


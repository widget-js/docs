# NotificationApi

## API Functions

### `send`

Send custom notification

**Params:**

| Param Name | Description |
| --- | --- |
| `notification` | - |

**Signature:**
```typescript
send: (notification: AppNotification) => Promise<void>
```

### `hide`

Hide notification

**Signature:**
```typescript
hide: () => Promise<void>
```

### `success`

**Params:**

| Param Name | Description |
| --- | --- |
| `message` | string |
| `duration` | number Duration in milliseconds, default 5000  |

**Signature:**
```typescript
success: (message: string, duration?: number) => Promise<void>
```

### `error`

**Params:**

| Param Name | Description |
| --- | --- |
| `message` | string |
| `duration` | number Duration in milliseconds, default 5000  |

**Signature:**
```typescript
error: (message: string, duration?: number) => Promise<void>
```

### `warning`

**Params:**

| Param Name | Description |
| --- | --- |
| `message` | string |
| `duration` | number Duration in milliseconds, default 5000  |

**Signature:**
```typescript
warning: (message: string, duration?: number) => Promise<void>
```

### `info`

**Params:**

| Param Name | Description |
| --- | --- |
| `message` | string |
| `duration` | number Duration in milliseconds, default 5000  |

**Signature:**
```typescript
info: (message: string, duration?: number) => Promise<void>
```

### `reminder`

**Signature:**
```typescript
reminder: (option: ReminderNotificationOption) => Promise<void>
```

## API Events

No events available.

## API Constants

No constants available.


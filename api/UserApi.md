# UserApi

## API各个函数功能

### `login`

Login with user info.

**Params:**

| Param Name | Description |
| --- | --- |
| `token` | - |

**Signature:**
```typescript
login: (session: AuthSession) => Promise<void>
```

### `logout`

Clear user auth token and user info.

**Signature:**
```typescript
logout: () => Promise<void>
```

### `getUser`

Get current logged in user info. If no user is logged in, return null.

**Signature:**
```typescript
getUser: () => Promise<AuthUser | null>
```

### `updateSession`

**Signature:**
```typescript
updateSession: (session: AuthSession) => Promise<void>
```

### `getSession`

**Signature:**
```typescript
getSession: () => Promise<AuthSession | null>
```

### `updateUser`

**Signature:**
```typescript
updateUser: (user: AuthUser) => Promise<void>
```

## API事件 Event

| Event Name | Value | Description |
| --- | --- | --- |
| `USER_UPDATED` | `channel::cn.widgetjs.core.user.updated` | User updated event |
| `SIGNED_OUT` | `channel::cn.widgetjs.core.user.signed.out` | - |
| `SIGNED_IN` | `channel::cn.widgetjs.core.user.signed.in` | - |
| `TOKEN_REFRESHED` | `channel::cn.widgetjs.core.user.token.refreshed` | - |

## API常量 Constants

暂无常量


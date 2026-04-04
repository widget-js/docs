# AiApi

## API各个函数功能

### `addConfig`

**Signature:**
```typescript
addConfig: (config: AiConfig) => Promise<AiConfig>
```

### `deleteConfig`

**Signature:**
```typescript
deleteConfig: (id: string) => Promise<void>
```

### `updateConfig`

**Signature:**
```typescript
updateConfig: (config: AiConfig) => Promise<void>
```

### `getConfigList`

**Signature:**
```typescript
getConfigList: () => Promise<AiConfig[]>
```

### `setConfigList`

**Signature:**
```typescript
setConfigList: (configs: AiConfig[]) => Promise<void>
```

### `getConfig`

**Signature:**
```typescript
getConfig: (id: string) => Promise<AiConfig | undefined>
```

## API事件 Event

| Event Name | Value | Description |
| --- | --- | --- |
| `CONFIG_UPDATED` | `channel::cn.widgetjs.core.ai.config.updated` | Configuration update event |

## API常量 Constants

暂无常量


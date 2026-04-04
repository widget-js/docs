# DialogApi

## API各个函数功能

### `pickFile`

Pick a single file

**Params:**

| Param Name | Description |
| --- | --- |
| `extensions` | Allowed file extension formats, e.g., ["txt", "docx", "gif"]  |

**Signature:**
```typescript
pickFile: (extensions?: string[]) => Promise<string | undefined>
```

### `pickFolder`

Pick a folder

**Signature:**
```typescript
pickFolder: () => Promise<string | undefined>
```

## API事件 Event

暂无事件

## API常量 Constants

暂无常量


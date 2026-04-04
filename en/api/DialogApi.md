# DialogApi

## API Functions

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

## API Events

No events available.

## API Constants

No constants available.


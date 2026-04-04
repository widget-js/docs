# FileApi

## API Functions

### `readDirectory`

Reads the contents of a directory.

**Params:**

| Param Name | Description |
| --- | --- |
| `path` | - The path of the directory to read. |
| `options` | - Optional settings for reading the directory. |

**Returns:** A promise that resolves to a SystemFile object representing the directory contents. 

**Signature:**
```typescript
readDirectory: (path: string, options?: ReadDirOptions) => Promise<SystemFile | undefined>
```

### `isDirectory`

Checks if the specified path is a directory.

**Params:**

| Param Name | Description |
| --- | --- |
| `filePath` | - The path to check. |

**Returns:** A promise that resolves to a boolean indicating if the path is a directory. 

**Signature:**
```typescript
isDirectory: (filePath: string) => Promise<boolean>
```

### `getMimeType`

Gets the MIME type of a file.

**Params:**

| Param Name | Description |
| --- | --- |
| `absoluteFilePath` | - The absolute path of the file. |

**Returns:** A promise that resolves to a FileTypeResult object containing the MIME type. 

**Signature:**
```typescript
getMimeType: (absoluteFilePath: string) => Promise<FileTypeResult>
```

### `downloadUrl`

Downloads a file from a URL.

**Params:**

| Param Name | Description |
| --- | --- |
| `option` | - The options for downloading the file. |

**Returns:** A promise that resolves to the path where the file was saved. 

**Signature:**
```typescript
downloadUrl: (option: DownloadUrlOptions) => Promise<string>
```

### `exists`

Checks if a file exists at the specified path.

**Params:**

| Param Name | Description |
| --- | --- |
| `filePath` | - The path to check. |

**Returns:** A promise that resolves to a boolean indicating if the file exists. 

**Signature:**
```typescript
exists: (filePath: string) => Promise<boolean>
```

### `delete`

Deletes a file at the specified path.

**Params:**

| Param Name | Description |
| --- | --- |
| `filePath` | - The path of the file to delete. |

**Returns:** A promise that resolves to a boolean indicating if the file was successfully deleted. 

**Signature:**
```typescript
delete: (filePath: string) => Promise<boolean>
```

### `getFileInfo`

Gets information about a file.

**Params:**

| Param Name | Description |
| --- | --- |
| `absoluteFilePath` | - The absolute path of the file. |

**Returns:** A promise that resolves to a FileInfo object containing information about the file. 

**Signature:**
```typescript
getFileInfo: (absoluteFilePath: string) => Promise<SystemFile | undefined>
```

### `getDocumentFolder`

Gets the document folder relative to the system user's documents folder.
@example childPath = "/images/" will return "C:/Users/username/Documents/widgets/com/example/widget/images"
@see https://sharp.pixelplumbing.com/api-input

**Params:**

| Param Name | Description |
| --- | --- |
| `childPath` | - The child path to append to the documents folder. |

**Returns:** A promise that resolves to the full path of the document folder.

**Signature:**
```typescript
getDocumentFolder: (childPath?: string) => Promise<string>
```

### `getPictureMetadata`

Gets metadata for a picture file.

**Params:**

| Param Name | Description |
| --- | --- |
| `filePath` | - The absolute path of the picture file. |

**Returns:** A promise that resolves to a Metadata object containing the picture metadata. 

**Signature:**
```typescript
getPictureMetadata: (filePath: string) => Promise<Metadata>
```

### `move`

Moves a file from one path to another.

**Params:**

| Param Name | Description |
| --- | --- |
| `form` | - The source path of the file. |
| `to` | - The destination path of the file. |

**Returns:** A promise that resolves to the new path of the file. 

**Signature:**
```typescript
move: (form: string, to: string) => Promise<string>
```

### `readFile`

Reads the contents of a file.

**Params:**

| Param Name | Description |
| --- | --- |
| `filePath` | - The path of the file to read. |

**Returns:** A promise that resolves to a base64 encoded string of the file contents. 

**Signature:**
```typescript
readFile: (filePath: string) => Promise<string>
```

### `extractIcon`

extract the icon from a file.

**Params:**

| Param Name | Description |
| --- | --- |
| `filePath` | - |
| `size` | default is 96 |

**Returns:** Base64 encoded string of the icon 

**Signature:**
```typescript
extractIcon: (filePath: string, size?: number) => Promise<string>
```

### `readShortcutLink`

Extract shortcut information from a shortcut file.

**Params:**

| Param Name | Description |
| --- | --- |
| `shortcutPath` | - |

**Signature:**
```typescript
readShortcutLink: (shortcutPath: string) => Promise<ShortcutDetails>
```

### `showItemInFolder`

showItemInFolder

**Signature:**
```typescript
showItemInFolder: (fullPath: string) => Promise<void>
```

### `openPath`

**Params:**

| Param Name | Description |
| --- | --- |
| `path` | - |

**Signature:**
```typescript
openPath: (path: string) => Promise<void>
```

### `trashItem`

**Params:**

| Param Name | Description |
| --- | --- |
| `path` | path to the item to be moved to the trash.  |

**Signature:**
```typescript
trashItem: (path: string) => Promise<void>
```

## API Events

No events available.

## API Constants

No constants available.


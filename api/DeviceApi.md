# DeviceApi

## API各个函数功能

### `getCursorScreenPoint`

Gets the current cursor screen position.

**Returns:** A promise that resolves to the current cursor position as a Point. 

**Signature:**
```typescript
getCursorScreenPoint: () => Promise<Point>
```

### `sendCtrlV`

Sends a Ctrl+V keypress event.

**Returns:** A promise that resolves when the event has been sent. 

**Signature:**
```typescript
sendCtrlV: () => Promise<void>
```

### `isAllKeyReleased`

Checks if all keys are released.

**Returns:** A promise that resolves to a boolean indicating if all keys are released. 

**Signature:**
```typescript
isAllKeyReleased: () => Promise<boolean>
```

### `getDisplayNearestPoint`

Gets the display nearest to the specified point.

**Params:**

| Param Name | Description |
| --- | --- |
| `point` | - The point to find the nearest display to. |

**Returns:** A promise that resolves to the nearest Display. 

**Signature:**
```typescript
getDisplayNearestPoint: (point: Point) => Promise<Display>
```

### `getAllDisplays`

Gets all connected displays.

**Returns:** A promise that resolves to an array of all connected Displays. 

**Signature:**
```typescript
getAllDisplays: () => Promise<Display[]>
```

### `getPrimaryDisplay`

Gets the primary display.

**Returns:** A promise that resolves to the primary Display. 

**Signature:**
```typescript
getPrimaryDisplay: () => Promise<Display>
```

### `isCapsLockOn`

Checks if Caps Lock is on.

**Returns:** A promise that resolves to a boolean indicating if Caps Lock is on. 

**Signature:**
```typescript
isCapsLockOn: () => Promise<boolean>
```

## API事件 Event

暂无事件

## API常量 Constants

暂无常量


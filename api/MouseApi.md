# MouseApi

## API各个函数功能

### `createHotspot`

Create a mouse screen edge hotspot, usually used for edge-hiding windows.

**Params:**

| Param Name | Description |
| --- | --- |
| `rect` | - |

**Signature:**
```typescript
createHotspot: (rect: Rectangle) => Promise<void>
```

### `removeHotspot`

Remove the mouse screen edge hotspot.

**Signature:**
```typescript
removeHotspot: () => Promise<void>
```

## API事件 Event

| Event Name | Value | Description |
| --- | --- | --- |
| `HOTSPOT_ACTIVE` | `'event::cn.widgetjs.core.mouse.hotspot.active'` | Triggered when the mouse enters the hotspot area. |

## API常量 Constants

暂无常量


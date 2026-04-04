# MenuApi

## API Functions

### `addMenuItem`

@deprecated

**Signature:**
```typescript
addMenuItem: (menuItems: WidgetMenuItem[]) => Promise<void>
```

### `addContextMenuItem`

Add context menu items, up to two levels of menus are supported

**Params:**

| Param Name | Description |
| --- | --- |
| `menuItems` | - |

**Signature:**
```typescript
addContextMenuItem: (menuItems: WidgetMenuItem[]) => Promise<void>
```

### `removeContextMenuItem`

Remove context menu items

**Params:**

| Param Name | Description |
| --- | --- |
| `menuItemIds` | - |

**Signature:**
```typescript
removeContextMenuItem: (menuItemIds: string[]) => Promise<void>
```

### `removeMenuItem`

@deprecated

**Signature:**
```typescript
removeMenuItem: (menuItemIds: string[]) => Promise<void>
```

### `showMenu`

Show custom menu

**Params:**

| Param Name | Description |
| --- | --- |
| `options` | ShowMenuOption  |

**Signature:**
```typescript
showMenu: (options: ShowMenuOption) => Promise<void>
```

## API Events

No events available.

## API Constants

No constants available.


# 广播事件

广播事件用于不同组件之间的通信、系统事件、应用状态变化等场景。方便组件对特定事件做出响应。

常见场景：
- 系统日期变化时，会发送 `SystemApiEvent.DATE_CHANGED` 广播事件。
- 应用语言变化时，会发送 `AppApiEvent.LANGUAGE_CHANGED` 广播事件。

## 发送广播

下面是一个发送广播事件的示例。通常广播事件包含一个事件名（event）和可序列化的负载（payload）：

```typescript
import { BroadcastApi, BroadcastEvent } from '@widget-js/core'

const event = new BroadcastEvent({
  event: 'your_event_name',
  // payload 可以是任意可序列化的数据；根据实现，有时需要字符串化
  payload: JSON.stringify({ hello: 'world' }),
})

BroadcastApi.send(event)
```

:::warning
如果仅在同一组件包内做组件之间的数据通信，优先考虑使用原生的 [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)，它在这类场景下更高效、延迟更低。
:::

## 接收广播

在 Vue3 环境中，可以使用 `useAppBroadcast` 便捷钩子订阅广播事件：

```typescript
import { useAppBroadcast } from '@widget-js/vue3'
useAppBroadcast(['your_event_name'], (event: BroadcastEvent) => {
  if (event.event == 'your_event_name') {
    // event received
    const payload = event.payload
    // ...
  }
})
```


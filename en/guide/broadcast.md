# Broadcast Events

Broadcast events are used for communication between different components, system events, application state changes, and other scenarios. It helps components respond to specific events.

Common scenarios:
- When the system date changes, a `SystemApiEvent.DATE_CHANGED` broadcast event is sent.
- When the application language changes, an `AppApiEvent.LANGUAGE_CHANGED` broadcast event is sent.

## Sending Broadcasts

Below is an example of sending a broadcast event. Typically, a broadcast event contains an event name (`event`) and a serializable payload (`payload`):

```typescript
import { BroadcastApi, BroadcastEvent } from '@widget-js/core'

const event = new BroadcastEvent({
  event: 'your_event_name',
  // payload can be any serializable data; depending on the implementation, it sometimes needs to be stringified
  payload: JSON.stringify({ hello: 'world' }),
})

BroadcastApi.send(event)
```

:::warning
If you are only doing data communication between components within the same widget package, prefer using the native [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel), as it is more efficient and has lower latency in such scenarios.
:::

## Receiving Broadcasts

In the Vue3 environment, you can use the `useAppBroadcast` convenient hook to subscribe to broadcast events:

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
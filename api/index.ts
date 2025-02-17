import type { DefaultTheme } from 'vitepress'

export function sidebarApi():DefaultTheme.SidebarItem[] {
  return [
    { text: 'AppApi', link: '/api/AppApi' },
    { text: 'BroadcastApi', link: '/api/BroadcastApi' },
    { text: 'BrowserWindowApi', link: '/api/BrowserWindowApi' },
    { text: 'DialogApi', link: '/api/DialogApi' },
    { text: 'LogApi', link: '/api/LogApi' },
    { text: 'MenuApi', link: '/api/MenuApi' },
    { text: 'MouseApi', link: '/api/MouseApi' },
    { text: 'NotificationApi', link: '/api/NotificationApi' },
    { text: 'ProcessApi', link: '/api/ProcessApi' },
    { text: 'ShortcutApi', link: '/api/ShortcutApi' },
    { text: 'StorageApi', link: '/api/StorageApi' },
    { text: 'SystemApi', link: '/api/SystemApi' },
    { text: 'WidgetApi', link: '/api/WidgetApi' },
    { text: 'WidgetPackageApi', link: '/api/WidgetPackageApi' },
  ]
}

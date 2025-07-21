// ページビューの記録
export function trackPageView(path: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    })
  }
}

// カスタムイベントの記録
export function trackCustomEvent(
  eventName: string,
  params: Record<string, unknown> = {},
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

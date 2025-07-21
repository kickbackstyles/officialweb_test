'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Google Analytics 設定コンポーネント
export default function GoogleAnalytics({
  measurementId = process.env.NEXT_PUBLIC_GA_ID || '',
}: {
  measurementId?: string
}) {
  useEffect(() => {
    if (!measurementId) return

    // GA 初期化
    window.dataLayer = window.dataLayer || []
    function gtag(...args: (string | Date | object)[]) {
      window.dataLayer.push(args)
    }

    gtag('js', new Date())

    gtag('config', measurementId)
  }, [measurementId])

  return (
    <>
      {/* GA スクリプトの読み込み */}
      {measurementId && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      )}
    </>
  )
}

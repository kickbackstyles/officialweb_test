'use client'

import { useTransition, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export function useRouterTransition(debugLabel = 'RouterTransition') {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const isNavigatingRef = useRef(false)

  useEffect(() => {
    // ページ遷移開始を検知
    const handleRouteChangeStart = () => {
      if (!isNavigatingRef.current) {
        console.log(`🚀 [${debugLabel}] Route change detected - Starting transition`)
        isNavigatingRef.current = true
        startTransition(() => {
          // 空の関数でstartTransitionを実行
        })
      }
    }

    // ページ遷移完了を検知
    const handleRouteChangeComplete = () => {
      if (isNavigatingRef.current) {
        console.log(`🏁 [${debugLabel}] Route change completed`)
        isNavigatingRef.current = false
      }
    }

    // カスタムイベントを監視
    const handleNavigationStart = () => handleRouteChangeStart()
    const handleNavigationComplete = () => handleRouteChangeComplete()

    // イベントリスナーを追加
    window.addEventListener('beforeunload', handleNavigationStart)
    window.addEventListener('load', handleNavigationComplete)

    // パス名の変化を監視（App Router用）
    const handlePathnameChange = () => {
      if (isNavigatingRef.current) {
        handleRouteChangeComplete()
      }
    }

    // パス名の変化を監視
    const timeoutId = setTimeout(() => {
      if (isNavigatingRef.current) {
        handlePathnameChange()
      }
    }, 100)

    return () => {
      window.removeEventListener('beforeunload', handleNavigationStart)
      window.removeEventListener('load', handleNavigationComplete)
      clearTimeout(timeoutId)
    }
  }, [debugLabel, pathname])

  // 手動ナビゲーション用の関数
  const navigate = (href: string) => {
    console.log(`🔗 [${debugLabel}] Manual navigation to: ${href}`)
    startTransition(() => {
      router.push(href)
    })
  }

  const replace = (href: string) => {
    console.log(`🔄 [${debugLabel}] Manual replace with: ${href}`)
    startTransition(() => {
      router.replace(href)
    })
  }

  const back = () => {
    console.log(`⬅️ [${debugLabel}] Manual back navigation`)
    startTransition(() => {
      router.back()
    })
  }

  const forward = () => {
    console.log(`➡️ [${debugLabel}] Manual forward navigation`)
    startTransition(() => {
      router.forward()
    })
  }

  return {
    navigate,
    replace,
    back,
    forward,
    isPending,
  }
}

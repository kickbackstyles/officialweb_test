'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface RouterTransitionContextType {
  isPending: boolean
  setPending: (pending: boolean) => void
}

const RouterTransitionContext = createContext<RouterTransitionContextType | undefined>(undefined)

export function useRouterTransitionContext() {
  const context = useContext(RouterTransitionContext)
  if (context === undefined) {
    throw new Error('useRouterTransitionContext must be used within a RouterTransitionProvider')
  }
  return context
}

interface RouterTransitionProviderProps {
  children: React.ReactNode
  debugLabel?: string
}

export default function RouterTransitionProvider({ 
  children, 
  debugLabel = 'RouterTransitionProvider' 
}: RouterTransitionProviderProps) {
  const [isPending, setIsPending] = useState(false)
  const pathname = usePathname()
  const previousPathnameRef = useRef(pathname)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const setPending = (pending: boolean) => {
    setIsPending(pending)
  }

  useEffect(() => {
    // パス名が変化した場合
    if (previousPathnameRef.current !== pathname) {
      console.log(`🔄 [${debugLabel}] Pathname changed from ${previousPathnameRef.current} to ${pathname}`)
      
      // 遷移完了を検知
      if (isPending) {
        console.log(`✅ [${debugLabel}] Route transition completed`)
        setIsPending(false)
      }
      
      previousPathnameRef.current = pathname
    }
  }, [pathname, isPending, debugLabel])

  // グローバルなナビゲーション監視
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const href = link.getAttribute('href')
        if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
          console.log(`🔗 [${debugLabel}] Link clicked: ${href}`)
          setIsPending(true)
          
          // タイムアウトでフォールバック
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
          timeoutRef.current = setTimeout(() => {
            console.log(`⏰ [${debugLabel}] Timeout - Auto completing transition`)
            setIsPending(false)
          }, 5000) // 5秒でタイムアウト
        }
      }
    }

    const handleFormSubmit = (event: SubmitEvent) => {
      console.log(`📝 [${debugLabel}] Form submitted`)
      setIsPending(true)
    }

    // イベントリスナーを追加
    document.addEventListener('click', handleLinkClick)
    document.addEventListener('submit', handleFormSubmit)

    return () => {
      document.removeEventListener('click', handleLinkClick)
      document.removeEventListener('submit', handleFormSubmit)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [debugLabel])

  return (
    <RouterTransitionContext.Provider value={{ isPending, setPending }}>
      {children}
    </RouterTransitionContext.Provider>
  )
}

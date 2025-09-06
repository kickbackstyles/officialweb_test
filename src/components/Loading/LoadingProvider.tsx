'use client'

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import LoadingAnimation from './LoadingAnimation'

interface LoadingContextType {
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

interface LoadingProviderProps {
  children: ReactNode
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoading, setShowLoading] = useState(true)

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  // 初回ページ読み込み時のローディング制御
  useEffect(() => {
    const handleLoad = () => {
      // ページ読み込み完了後、少し遅延してからローディングを終了
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {showLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {children}
    </LoadingContext.Provider>
  )
}

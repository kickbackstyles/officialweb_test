'use client'

import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { useLottieAnimation } from './useLottieAnimation'

interface LoadingAnimationProps {
  onComplete?: () => void
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)
  
  // Lottieアニメーションファイルを動的に読み込み
  const { animationData, isLoading, error } = useLottieAnimation('/lottie/kbs_loading.json')

  useEffect(() => {
    // ページの読み込み完了を検知
    const handleLoad = () => {
      // 少し遅延を入れてからフェードアウト開始
      setTimeout(() => {
        setIsFading(true)
        
        // 1秒後に完全に非表示にする
        setTimeout(() => {
          setIsVisible(false)
          onComplete?.()
        }, 1000)
      }, 4000) // 0.5秒の遅延
    }

    // ページが既に読み込まれている場合
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${
        isFading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label="ページを読み込み中"
    >
      <div className="size-32 sm:size-48">
        {isLoading ? (
          // アニメーション読み込み中のフォールバック
          <div className="flex size-full items-center justify-center">
            <div className="size-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"></div>
          </div>
        ) : error ? (
          // エラー時のフォールバック
          <div className="flex size-full items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="mx-auto mb-2 size-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"></div>
              <p className="text-sm">読み込み中...</p>
            </div>
          </div>
        ) : (
          // Lottieアニメーション
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
    </div>
  )
}

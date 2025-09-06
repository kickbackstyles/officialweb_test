'use client'

import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { useLottieAnimation } from '../../components/Loading/useLottieAnimation'

export default function ItemsLoading() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)
  
  // Lottieアニメーションファイルを動的に読み込み
  const { animationData, error } = useLottieAnimation('/lottie/kbs_loading.json')

  useEffect(() => {
    // ローディング表示開始から最低2秒間表示
    const startTime = Date.now()
    
    const handleLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime
      const minDisplayTime = 2000 // 最低2秒間表示
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime)
      
      setTimeout(() => {
        setIsFading(true)
        
        // 1秒後に完全に非表示にする
        setTimeout(() => {
          setIsVisible(false)
        }, 1000)
      }, remainingTime)
    }

    // 少し遅延してからローディング完了処理を開始
    setTimeout(handleLoadingComplete, 100)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${
        isFading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label="アイテムページを読み込み中"
    >
      <div className="size-32 sm:size-48">
        {error ? (
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

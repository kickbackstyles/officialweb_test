'use client'

import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import { useLottieAnimation } from './useLottieAnimation'

interface TransitionIndicatorProps {
  isPending: boolean
  children: React.ReactNode
  className?: string
  debugLabel?: string // デバッグ用のラベル
}

export default function TransitionIndicator({ 
  isPending, 
  children, 
  className = '',
  debugLabel = 'TransitionIndicator'
}: TransitionIndicatorProps) {
  const { animationData } = useLottieAnimation('/lottie/kbs_loading.json')

  // デバッグログ
  useEffect(() => {
    if (isPending) {
      console.log(`🔄 [${debugLabel}] Transition started - Loading indicator shown`)
    } else {
      console.log(`✅ [${debugLabel}] Transition completed - Loading indicator hidden`)
    }
  }, [isPending, debugLabel])

  // アニメーションデータの読み込み状態もデバッグ
  useEffect(() => {
    if (animationData) {
      console.log(`🎬 [${debugLabel}] Lottie animation data loaded`)
    }
  }, [animationData, debugLabel])

  return (
    <>
      {children}
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="size-32 sm:size-48">
            <Lottie
              animationData={animationData || undefined}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}
    </>
  )
}

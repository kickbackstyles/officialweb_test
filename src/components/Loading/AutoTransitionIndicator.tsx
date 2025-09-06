'use client'

import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import { useLottieAnimation } from './useLottieAnimation'
import { useRouterTransitionContext } from './RouterTransitionProvider'

interface AutoTransitionIndicatorProps {
  debugLabel?: string
}

export default function AutoTransitionIndicator({ 
  debugLabel = 'AutoTransitionIndicator' 
}: AutoTransitionIndicatorProps) {
  const { isPending } = useRouterTransitionContext()
  const { animationData } = useLottieAnimation('/lottie/kbs_loading.json')

  // デバッグログ
  useEffect(() => {
    if (isPending) {
      console.log(`🔄 [${debugLabel}] Auto transition started - Loading indicator shown`)
    } else {
      console.log(`✅ [${debugLabel}] Auto transition completed - Loading indicator hidden`)
    }
  }, [isPending, debugLabel])

  // アニメーションデータの読み込み状態もデバッグ
  useEffect(() => {
    if (animationData) {
      console.log(`🎬 [${debugLabel}] Lottie animation data loaded`)
    }
  }, [animationData, debugLabel])

  if (!isPending) return null

  return (
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
  )
}

'use client'

import { useTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useNavigationWithTransition(debugLabel = 'Navigation') {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  // デバッグログ
  useEffect(() => {
    if (isPending) {
      console.log(`🚀 [${debugLabel}] Navigation transition started`)
    } else {
      console.log(`🏁 [${debugLabel}] Navigation transition completed`)
    }
  }, [isPending, debugLabel])

  const navigate = (href: string) => {
    console.log(`🔗 [${debugLabel}] Navigating to: ${href}`)
    startTransition(() => {
      router.push(href)
    })
  }

  const replace = (href: string) => {
    console.log(`🔄 [${debugLabel}] Replacing with: ${href}`)
    startTransition(() => {
      router.replace(href)
    })
  }

  const back = () => {
    console.log(`⬅️ [${debugLabel}] Going back`)
    startTransition(() => {
      router.back()
    })
  }

  const forward = () => {
    console.log(`➡️ [${debugLabel}] Going forward`)
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

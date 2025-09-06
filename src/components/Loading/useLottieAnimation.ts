import { useEffect, useState } from 'react'

export function useLottieAnimation(path: string) {
  const [animationData, setAnimationData] = useState<unknown>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(path)
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`)
        }
        
        const data = await response.json()
        setAnimationData(data)
      } catch (err) {
        console.error('Error loading Lottie animation:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    loadAnimation()
  }, [path])

  return { animationData, isLoading, error }
}

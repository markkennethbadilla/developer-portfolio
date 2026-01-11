import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ value, suffix = '', duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const start = 0
          const end = value
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = start + (end - start) * easeOut

            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref} className="font-mono font-bold">
      {Math.floor(count)}{suffix}
    </span>
  )
}

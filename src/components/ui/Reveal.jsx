import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  once = true,
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, once, threshold])

  return (
    <div
      ref={ref}
      className={`transition-[opacity,filter] duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${visible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'} ${className}`}
    >
      {children}
    </div>
  )
}

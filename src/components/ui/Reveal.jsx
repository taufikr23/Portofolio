// src/components/ui/Reveal.jsx
// Wrapper animasi scroll-reveal: fade-in + slide-up saat masuk viewport.
import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  once = false,
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Hormati preferensi user untuk reduced motion
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
      className={`transition-all duration-[1800ms] ease-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

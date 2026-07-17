// src/components/ui/Button.jsx
// variant: 'primary' (amber), 'secondary' (clay), 'ghost' (outline)
// Bisa jadi <a> (kalau ada `href`) atau <button>.

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-body text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-amber text-ink hover:bg-clay hover:text-cream shadow-card hover:shadow-card-hover hover:-translate-y-0.5',
  secondary:
    'bg-clay text-cream hover:bg-ink hover:-translate-y-0.5 shadow-card',
  ghost:
    'border border-ink/25 text-surface-fg hover:border-amber hover:text-clay hover:-translate-y-0.5',
}

export default function Button({
  as,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant]} ${className}`
  const Tag = as || (href ? 'a' : 'button')
  return (
    <Tag href={href} className={cls} {...props}>
      {children}
    </Tag>
  )
}

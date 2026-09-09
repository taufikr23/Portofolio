const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1020] disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 active:scale-95'

const variants = {
  primary:
    'bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]',
  secondary:
    'glass-panel text-white hover:bg-white/10 hover:border-[#4f46e5]/50 hover:text-[#c7d2fe]',
  ghost:
    'border border-white/10 text-slate-300 hover:border-[#4f46e5]/50 hover:text-white bg-transparent hover:bg-[#4f46e5]/10',
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


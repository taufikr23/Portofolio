// src/components/ui/Badge.jsx
// Badge monospace kecil untuk tech stack & kompetensi.
// tone: 'amber' | 'sage' | 'clay' | 'ink'

const toneMap = {
  amber: 'border-amber/30 text-amber bg-amber-alpha',
  sage: 'border-sage/30 text-sage bg-sage-alpha',
  clay: 'border-clay/30 text-clay bg-clay-alpha',
  ink: 'border-ink/20 text-surface-fg bg-ink-alpha',
}

export default function Badge({ children, tone = 'amber', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-xs font-medium tracking-tight ${toneMap[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

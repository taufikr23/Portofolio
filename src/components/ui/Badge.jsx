// src/components/ui/Badge.jsx
// Badge monospace kecil untuk tech stack & kompetensi.
// tone: 'amber' | 'sage' | 'clay' | 'ink'

const toneMap = {
  amber: 'border-amber/40 text-clay bg-amber/10',
  sage: 'border-sage/40 text-sage bg-sage/10',
  clay: 'border-clay/40 text-clay bg-clay/10',
  ink: 'border-ink/20 text-surface-fg bg-paper/60',
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

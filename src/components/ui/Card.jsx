// src/components/ui/Card.jsx
// Card bertema "sticky note dari kelas": radius lembut + shadow amber transparan.
// hover-lift opsional untuk kartu projek.

export default function Card({
  as: Tag = 'div',
  hover = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={[
        'rounded-2xl border border-ink/10 bg-surface-alt p-6 shadow-card transition-all duration-300',
        hover
          ? 'group hover:-translate-y-1 hover:shadow-card-hover hover:border-amber/40'
          : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}

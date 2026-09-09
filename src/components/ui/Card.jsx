export default function Card({
  as: Tag = 'div',
  hover = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`rounded-3xl glass-panel border border-white/10 p-6 md:p-8 transition-all duration-300 preserve-3d ${
        hover
          ? 'group hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] hover:border-[#4f46e5]/40 hover:rotate-x-2 hover:-rotate-y-2'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}


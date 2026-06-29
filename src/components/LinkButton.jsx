export function LinkButton({ href = '#', icon, label, variant = 'green' }) {
  const base =
    'w-full flex items-center justify-center gap-3 rounded-xl px-5 py-4 font-bold text-sm transition-all duration-150 active:scale-[.98]'

  const variants = {
    green:
      'bg-[#009739] text-white shadow-[0_4px_14px_rgba(0,151,57,0.30)] hover:bg-[#007a2e]',
    yellow:
      'bg-[#FEDD00] text-[#0a2714] shadow-[0_4px_14px_rgba(254,221,0,0.40)] hover:bg-[#e5c800]',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      {label}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </a>
  )
}

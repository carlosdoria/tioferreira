export function LinkButton({ href = '#', icon, label, styles = {} }) {
  const base =
    'w-full flex items-center justify-center gap-3 rounded-xl px-5 py-4 font-bold text-sm transition-all duration-150 active:scale-[.98] bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)]'

  const buttonStyle = {
    '--button-bg': styles.backgroundColor,
    '--button-hover-bg': styles.hoverBackgroundColor || styles.backgroundColor,
    color: styles.textColor,
  }

  if (styles.shadowColor) {
    buttonStyle.boxShadow = `0 4px 14px ${styles.shadowColor}`
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={base}
      style={buttonStyle}
    >
      {label}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </a>
  )
}

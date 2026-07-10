export function PhotoCard({ image, alt, title, subtitle, href, styles = {} }) {
  const baseClass = 'w-full rounded-2xl overflow-hidden shadow-sm'
  const interactiveClass =
    'block cursor-pointer transition-all duration-150 hover:shadow-md active:scale-[.99]'

  const content = (
    <>
      <img src={image} alt={alt} className="w-full h-44 object-cover block" />

      <div
        className="px-2 py-3 border-l-4"
        style={{ borderColor: styles.accentColor }}
      >
        <p
          className="font-bold text-base"
          style={{ color: styles.titleColor }}
        >
          {title}
        </p>

        {subtitle && (
          <p
            className="text-xs mt-0.5 font-medium"
            style={{ color: styles.subtitleColor }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${interactiveClass}`}
        style={{ backgroundColor: styles.backgroundColor }}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={baseClass} style={{ backgroundColor: styles.backgroundColor }}>
      {content}
    </div>
  )
}

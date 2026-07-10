export function PhotoCard({ image, alt, title, subtitle, href }) {
  const baseClass = 'w-full bg-white rounded-2xl overflow-hidden shadow-sm'
  const interactiveClass =
    'block cursor-pointer transition-all duration-150 hover:shadow-md active:scale-[.99]'

  const content = (
    <>
      <img src={image} alt={alt} className="w-full h-44 object-cover block" />

      <div className="px-2 py-3 border-l-4 border-[#FEDD00]">
        <p className="font-bold text-[#0a2714] text-base">{title}</p>

        {subtitle && (
          <p className="text-[#3a7050] text-xs mt-0.5 font-medium">
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
      >
        {content}
      </a>
    )
  }

  return <div className={baseClass}>{content}</div>
}

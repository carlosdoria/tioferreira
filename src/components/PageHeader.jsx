export function PageHeader({ title, description, styles = {} }) {
  return (
    <div className="w-full">
      <h1
        className="w-full whitespace-pre-line font-extrabold text-[28px] text-center leading-tight mb-2"
        style={{ color: styles.titleColor }}
      >
        {title}
      </h1>

      {description && (
        <p
          className="text-base text-center font-medium"
          style={{ color: styles.descriptionColor }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

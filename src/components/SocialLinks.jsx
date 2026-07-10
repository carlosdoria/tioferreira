import { InstagramIcon } from '../icons/InstagramIcon'

const socialButtonClass =
  'w-[42px] h-[42px] rounded-full flex items-center justify-center shadow-md transition-colors bg-[var(--social-bg)] hover:bg-[var(--social-hover-bg)]'

export function SocialLinks({ links, styles = {} }) {
  return (
    <div className="w-full flex justify-center gap-4 mt-4 pt-5 border-t border-green-100">
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={socialButtonClass}
        style={{
          '--social-bg': styles.backgroundColor,
          '--social-hover-bg':
            styles.hoverBackgroundColor || styles.backgroundColor,
          color: styles.textColor,
        }}
      >
        <InstagramIcon />
      </a>
    </div>
  )
}

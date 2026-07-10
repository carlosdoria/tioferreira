import { InstagramIcon } from '../icons/InstagramIcon'

const socialButtonClass =
  'w-[42px] h-[42px] rounded-full bg-[#009739] flex items-center justify-center shadow-md hover:bg-[#007a2e] transition-colors'

export function SocialLinks({ links }) {
  return (
    <div className="w-full flex justify-center gap-4 mt-4 pt-5 border-t border-green-100">
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={socialButtonClass}
      >
        <InstagramIcon />
      </a>
    </div>
  )
}

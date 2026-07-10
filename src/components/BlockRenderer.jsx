import { BriefcaseIcon } from '../icons/BriefcaseIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'
import { LinkButton } from './LinkButton'
import { PageHeader } from './PageHeader'
import { PhotoCard } from './PhotoCard'
import { ProfileLogo } from './ProfileLogo'
import { SocialLinks } from './SocialLinks'

const renderIcon = (icon) => {
  switch (icon) {
    case 'briefcase':
      return <BriefcaseIcon />
    case 'instagram':
      return <InstagramIcon className="w-5 h-5" />
    case 'whatsapp':
      return <WhatsAppIcon className="w-5 h-5" />
    default:
      return null
  }
}

export function BlockRenderer({ block, client }) {
  switch (block.type) {
    case 'profileLogo':
      return (
        <ProfileLogo
          image={block.image}
          alt={block.alt}
          styles={block.styles}
        />
      )

    case 'header':
      return (
        <PageHeader
          title={client.title}
          description={client.description}
          styles={block.styles}
        />
      )

    case 'photoCard':
      return (
        <PhotoCard
          href={block.href}
          image={block.image}
          alt={block.alt}
          title={block.title}
          subtitle={block.subtitle}
          styles={block.styles}
        />
      )

    case 'linkButton':
      return (
        <LinkButton
          href={block.href}
          label={block.label}
          icon={renderIcon(block.icon)}
          styles={block.styles}
        />
      )

    case 'whatsappList':
      return block.items.map((item) => (
        <LinkButton
          key={item.label}
          href={item.whatsapp}
          label={item.label}
          icon={renderIcon('whatsapp')}
          styles={item.styles || block.styles}
        />
      ))

    case 'socialLinks':
      return <SocialLinks links={block.links} styles={block.styles} />

    default:
      return null
  }
}

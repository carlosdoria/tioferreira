import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import { BriefcaseIcon } from './icons/BriefcaseIcon'
import { PhotoCard } from './components/PhotoCard'
import { LinkButton } from './components/LinkButton'
import { ProfileLogo } from './components/ProfileLogo'
import { PageHeader } from './components/PageHeader'
import { SocialLinks } from './components/SocialLinks'
import { UNITS, LINKS } from './data/links'

import feijao from '/feijao.jpg'
import loja from '/loja.jpg'

export default function App() {
  return (
    <div className="min-h-screen bg-[#edf7f0] flex justify-center pt-8 pb-16">
      <div className="w-full max-w-sm flex flex-col items-start gap-4 px-4">
        <ProfileLogo image={feijao} />

        <PageHeader />

        <PhotoCard
          href={LINKS.ofertas}
          image={loja}
          alt="Ofertas"
          title="Receba nossas ofertas"
          subtitle="As melhores promoções da semana"
        />

        {UNITS.map((unit) => (
          <LinkButton
            key={unit.label}
            href={unit.whatsapp}
            label={unit.label}
            icon={<WhatsAppIcon className="w-5 h-5" />}
            variant="green"
          />
        ))}

        <PhotoCard
          href={LINKS.sac}
          image={loja}
          alt="SAC"
          title="SAC — Atendimento pertinho de você"
          subtitle="Fale com nossa equipe"
        />

        <LinkButton
          href={LINKS.instagram}
          label="Confira nosso Instagram"
          icon={<InstagramIcon className="w-5 h-5" />}
          variant="yellow"
        />

        <PhotoCard
          href={LINKS.lojas}
          image={loja}
          alt="Nossas lojas"
          title="Encontre um Tio Ferreira mais próximo de você"
          subtitle="Veja todas as unidades"
        />

        <LinkButton
          href={LINKS.trabalhe}
          label="Trabalhe Conosco"
          icon={<BriefcaseIcon />}
          variant="green"
        />

        {/* <SocialLinks links={LINKS} /> */}
      </div>
    </div>
  )
}

const getAssetUrl = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

export const linktrees = {
  tioferreira: {
    slug: 'tioferreira',
    title: 'Tio Ferreira\nSupermercados',
    description: 'Diferenciado para você',
    theme: {
      backgroundColor: '#edf7f0',
      contentMaxWidth: '24rem',
      contentGap: '1rem',
    },
    blocks: [
      {
        type: 'profileLogo',
        image: getAssetUrl('feijao.jpg'),
        alt: 'Tio Ferreira Supermercados',
        styles: {
          borderColor: '#FEDD00',
        },
      },
      {
        type: 'header',
        styles: {
          titleColor: '#0a2714',
          descriptionColor: '#3a7050',
        },
      },
      {
        type: 'photoCard',
        href: 'https://www.instagram.com/tioferreirasupermercados/',
        image: getAssetUrl('loja.jpg'),
        alt: 'Ofertas',
        title: 'Receba nossas ofertas',
        subtitle: 'As melhores promoções da semana',
        styles: {
          backgroundColor: '#ffffff',
          accentColor: '#FEDD00',
          titleColor: '#0a2714',
          subtitleColor: '#3a7050',
        },
      },
      {
        type: 'whatsappList',
        items: [
          {
            label: 'Unidade Grand Jardim',
            whatsapp: 'https://wa.me/558221400110',
            styles: {
              backgroundColor: '#009739',
              hoverBackgroundColor: '#007a2e',
              textColor: '#ffffff',
              shadowColor: 'rgba(0,151,57,0.30)',
            },
          },
          {
            label: 'Unidade Aeroporto',
            whatsapp: 'https://wa.me/558221408928',
            styles: {
              backgroundColor: '#009739',
              hoverBackgroundColor: '#007a2e',
              textColor: '#ffffff',
              shadowColor: 'rgba(0,151,57,0.30)',
            },
          },
          {
            label: 'Unidade Cruzeiro do Sul',
            whatsapp: 'https://wa.me/558233570303',
            styles: {
              backgroundColor: '#009739',
              hoverBackgroundColor: '#007a2e',
              textColor: '#ffffff',
              shadowColor: 'rgba(0,151,57,0.30)',
            },
          },
        ],
      },
      {
        type: 'photoCard',
        href: 'https://wa.me/558221400110',
        image: getAssetUrl('loja.jpg'),
        alt: 'SAC',
        title: 'SAC - Atendimento pertinho de você',
        subtitle: 'Fale com nossa equipe',
        styles: {
          backgroundColor: '#ffffff',
          accentColor: '#FEDD00',
          titleColor: '#0a2714',
          subtitleColor: '#3a7050',
        },
      },
      {
        type: 'linkButton',
        href: 'https://www.instagram.com/tioferreirasupermercados/',
        label: 'Confira nosso Instagram',
        icon: 'instagram',
        styles: {
          backgroundColor: '#FEDD00',
          hoverBackgroundColor: '#e5c800',
          textColor: '#0a2714',
          shadowColor: 'rgba(254,221,0,0.40)',
        },
      },
      {
        type: 'photoCard',
        href: 'https://maps.google.com/maps/search/Tio+Ferreira+Supermercados',
        image: getAssetUrl('loja.jpg'),
        alt: 'Nossas lojas',
        title: 'Encontre um Tio Ferreira mais próximo de você',
        subtitle: 'Veja todas as unidades',
        styles: {
          backgroundColor: '#ffffff',
          accentColor: '#FEDD00',
          titleColor: '#0a2714',
          subtitleColor: '#3a7050',
        },
      },
      {
        type: 'linkButton',
        href: 'mailto:tioferreiratrabalheconosco@gmail.com',
        label: 'Trabalhe Conosco',
        icon: 'briefcase',
        styles: {
          backgroundColor: '#009739',
          hoverBackgroundColor: '#007a2e',
          textColor: '#ffffff',
          shadowColor: 'rgba(0,151,57,0.30)',
        },
      },
    ],
  },
}

export const defaultSlug = 'tioferreira'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BlockRenderer } from '../components/BlockRenderer'
import { linktrees } from '../data/linktrees'

export function ClientPage() {
  const { slug } = useParams()
  const client = linktrees[slug]

  useEffect(() => {
    if (client) {
      document.title = client.title.replace(/\s*\n\s*/g, ' ')
      return
    }

    document.title = 'Página não encontrada'
  }, [client])

  if (!client) {
    return <ClientNotFound />
  }

  const theme = client.theme || {}

  return (
    <main
      className="min-h-screen flex justify-center pt-8 pb-16"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <div
        className="w-full flex flex-col items-start px-4"
        style={{
          maxWidth: theme.contentMaxWidth,
          gap: theme.contentGap,
        }}
      >
        {client.blocks.map((block, index) => (
          <BlockRenderer
            key={`${block.type}-${index}`}
            block={block}
            client={client}
          />
        ))}
      </div>
    </main>
  )
}

function ClientNotFound() {
  return (
    <main className="min-h-screen bg-[#edf7f0] flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-sm">
        <h1 className="text-xl font-bold text-[#0a2714]">
          Página não encontrada
        </h1>
        <p className="mt-2 text-sm font-medium text-[#3a7050]">
          Verifique se o link foi digitado corretamente.
        </p>
      </div>
    </main>
  )
}

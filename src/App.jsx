import { Navigate, Route, Routes } from 'react-router-dom'
import { defaultSlug } from './data/linktrees'
import { ClientPage } from './pages/ClientPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultSlug}`} replace />} />
      <Route path="/:slug" element={<ClientPage />} />
      <Route path="*" element={<ClientPage />} />
    </Routes>
  )
}

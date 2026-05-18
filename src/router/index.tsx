import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { AluguelPage } from '@/pages/Aluguel/AluguelPage'
import { ContatoPage } from '@/pages/Contato/ContatoPage'
import { EventosPage } from '@/pages/Eventos/EventosPage'
import { HomePage } from '@/pages/Home/HomePage'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'
import { SobrePage } from '@/pages/Sobre/SobrePage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'sobre', element: <SobrePage /> },
      { path: 'eventos', element: <EventosPage /> },
      { path: 'aluguel', element: <AluguelPage /> },
      { path: 'contato', element: <ContatoPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

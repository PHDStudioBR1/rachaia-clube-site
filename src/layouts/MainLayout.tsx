import { Outlet } from 'react-router-dom'
import { BrandLoader } from '@/components/brand/BrandLoader'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/navigation/Navbar'

export function MainLayout() {
  return (
    <>
      <BrandLoader />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

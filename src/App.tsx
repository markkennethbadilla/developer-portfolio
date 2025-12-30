import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from '@/components/pages/HomePage'
import CaseStudyPage from '@/components/pages/CaseStudyPage'
import ContactPage from '@/components/pages/ContactPage'
import Navigation from '@/components/Navigation'
import { Toaster } from '@/components/ui/sonner'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App

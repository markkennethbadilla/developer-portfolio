import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/components/pages/HomePage'
import CaseStudyPage from '@/components/pages/CaseStudyPage'
import ContactPage from '@/components/pages/ContactPage'
import Navigation from '@/components/Navigation'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <BrowserRouter>
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

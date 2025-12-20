import { useState } from 'react'
import HomePage from '@/components/pages/HomePage'
import CaseStudyPage from '@/components/pages/CaseStudyPage'
import ContactPage from '@/components/pages/ContactPage'
import Navigation from '@/components/Navigation'
import { Toaster } from '@/components/ui/sonner'

type Page = 'home' | 'case-study' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'case-study':
        return <CaseStudyPage onNavigate={setCurrentPage} />
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Toaster />
    </div>
  )
}

export default App

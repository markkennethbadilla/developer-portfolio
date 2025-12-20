import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'
import ThemeSwitcher from '@/components/ThemeSwitcher'

type Page = 'home' | 'case-study' | 'contact'

interface NavigationProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (page: Page) => {
    onNavigate(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const NavLink = ({ page, label }: { page: Page; label: string }) => (
    <button
      onClick={() => handleNavigate(page)}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        currentPage === page ? 'text-primary' : 'text-foreground/80'
      }`}
    >
      {label}
    </button>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavigate('home')}
          className="text-xl font-bold font-heading tracking-tight"
        >
          MKB
        </button>

        <div className="hidden md:flex items-center gap-8">
          <NavLink page="home" label="Home" />
          <NavLink page="case-study" label="Case Study" />
          <NavLink page="contact" label="Contact" />
          <Button
            size="sm"
            onClick={() => window.open('/resume.pdf', '_blank')}
            variant="outline"
          >
            Resume
          </Button>
          <ThemeSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button
            className="p-2 -mr-2 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
            <NavLink page="home" label="Home" />
            <NavLink page="case-study" label="Case Study" />
            <NavLink page="contact" label="Contact" />
            <Button
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
              variant="outline"
              className="w-full"
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

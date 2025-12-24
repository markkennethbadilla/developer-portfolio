import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleMobileClick = () => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const NavLink = ({ to, label }: { to: string; label: string }) => {
    const isActive = location.pathname === to
    return (
      <Link
        to={to}
        onClick={handleMobileClick}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive ? 'text-primary' : 'text-foreground/80'
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold font-heading tracking-tight"
        >
          MKB
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/case-study" label="Case Study" />
          <NavLink to="/contact" label="Contact" />
          <Button
            size="sm"
            onClick={() => window.open('https://drive.google.com/file/d/1GVX8nTmYsCNC3v9KIsSzsjOwdKgIi-v1/view?usp=sharing', '_blank')}
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
            <NavLink to="/" label="Home" />
            <NavLink to="/case-study" label="Case Study" />
            <NavLink to="/contact" label="Contact" />
            <Button
              size="sm"
              onClick={() => window.open('https://drive.google.com/file/d/1GVX8nTmYsCNC3v9KIsSzsjOwdKgIi-v1/view?usp=sharing', '_blank')}
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

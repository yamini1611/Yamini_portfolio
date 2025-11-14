import { useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import resumePDF from '../data/Yamini_Resume.pdf'

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  const navItems = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Work Experiences' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact Me' }
  ]

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'Yamini_Priya_J_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col">
            <a
              href="#home"
              className="text-xl font-bold text-purple-600 font-mono"
            >
              &lt;Yamini Priya J /&gt;
            </a>
            <span className="text-gray-700 text-sm font-bold ms-3">
               Software Engineer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm"
            >
              <FaDownload className="text-sm" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={handleResumeDownload}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 w-fit mx-2"
              >
                <FaDownload />
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

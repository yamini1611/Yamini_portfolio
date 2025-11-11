import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <ScrollToTop />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Yamini Priya J. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


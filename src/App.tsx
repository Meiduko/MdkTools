import './styles/App.css'
import './styles/assets/Cards.css'
import './styles/assets/Buttons.css'
import './styles/fonts.css'

import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import Modal from './components/Modal'

const Home = lazy(() => import('./sections/Home'))
const Section = lazy(() => import('./sections/Section'))
const Tools = lazy(() => import('./sections/Tools'))

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const location = useLocation()

  const handleBarsClick = (): void => {
    setOpenSidebar(openSidebar => !openSidebar)
    setShowModal(false)
  }

  const toggleModal = () => {
    setShowModal(showModal => !showModal)
    setOpenSidebar(false)
  }

  const openModal = () => {
    setShowModal(true)
    setOpenSidebar(false)
    document.getElementById('modalInput')?.focus()
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        toggleModal()
      } else if (event.key === 'Escape') {
        event.preventDefault()
        setOpenSidebar(false)
        setShowModal(false)
      }
      return
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleMainClick = (): void => {
    setOpenSidebar(false)
    setShowModal(false)
  }

  return (
    <>
      <Nav openModal={openModal} handleClick={handleBarsClick} />
      <Sidebar openSidebar={openSidebar} handleBarsClick={handleBarsClick} />
      <Modal showModal={showModal} />
      <main onClick={() => handleMainClick()}>
        <Suspense fallback={<div>Loading</div>}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/section/:sectionName' element={<Section />} />
              <Route path='/subsection/:subSectionName' element={<Tools />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App

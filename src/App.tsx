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
  const toggleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  const closeSidebar = () => {
    setOpenSidebar(false)
  }

  const openModal = () => {
    setShowModal(true)
    closeSidebar()
    document.getElementById('modalInput')?.focus()
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const toggleModal = () => {
    if (showModal === false) {
      openModal()
    } else if (showModal === true) {
      closeModal()
    }
  }

  const handleBarsClick = (): void => {
    toggleOpenSidebar()
  }

  const location = useLocation()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault()
      toggleModal()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setShowModal(false)
      closeSidebar()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', e => {
      handleKeyDown(e)
    })
    return () => {
      window.removeEventListener('keydown', e => {
        handleKeyDown(e)
      })
    }
  }, [])

  // useEffect(() => {
  //   document.getElementById('searchBtn')?.addEventListener('click', e => {
  //     e.preventDefault()
  //     document.getElementById('modalInput')?.focus()
  //   })
  //   document.getElementById('navbarInput')?.addEventListener('click', e => {
  //     e.preventDefault()
  //     document.getElementById('modalInput')?.focus()
  //   })
  //   return () => {
  //     document.removeEventListener('click', () => {
  //       document.getElementById('modalInput')?.focus()
  //     })
  //   }
  // })

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

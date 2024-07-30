import './App.css'
import { lazy, Suspense, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { AnimatePresence } from 'framer-motion'

const ToolsSections = lazy(() => import('./sections/ToolsSections'))
const ToolsSection = lazy(() => import('./sections/ToolsSection'))
const ToolsSubSection = lazy(() => import('./sections/ToolsSubSection'))

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const handleBarsClick = (): void => {
    setOpenSidebar(!openSidebar)
  }
  const location = useLocation()

  return (
    <>
      <Nav
        showModal={showModal}
        setShowModal={setShowModal}
        handleClick={handleBarsClick}
      />
      <Sidebar openSidebar={openSidebar} handleBarsClick={handleBarsClick} />
      <main
        onKeyDownCapture={a => console.log(a)}
        className='flex my-16 justify-center content-center min-h-screen'
      >
        <Suspense fallback={<div>Loading</div>}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<ToolsSections />} />
              <Route path='/section/:sectionName' element={<ToolsSection />} />
              <Route
                path='/subSection/:subSectionName'
                element={<ToolsSubSection />}
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App

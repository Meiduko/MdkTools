import './App.css'
import { BarsSvg } from './assets/barsSvg'
import { MagnifyingGlass } from './assets/MagnifyingGlass'
import { ToolsSections } from './components/ToolsSections'
import { useState } from 'react'
import { Footer } from './components/Footer'
import { Sidebar } from './assets/Sidebar'

function App() {
  const [openSidebar, setOpenSidebar] = useState(true)
  const handleBarsClick = (): void => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <>
      <nav className='flex flex-row w-full h-16 m-0 p-3 items-center justify-between gap-3 sm:gap-0 fixed top-0 align-middle z-0 bg-indigo-950/50 backdrop-blur-md'>
        {/* <div className='flex flex-row items-center w-fit gap-x-16 justify-between lg:w-56'> */}
        <BarsSvg handleClick={handleBarsClick} />
        <h1 className='text-2xl inter-regular-400'>MDK Tools</h1>
        {/* </div> */}
        <div className='flex lg:pe-28'>
          <input
            id='searchbar'
            placeholder='ctrl+k'
            className='rounded-s-full sm:ps-3 py-1 inter-300 w-0 sm:w-52 p-0'
            type='text'
          />
          <button className='sm:bg-indigo-700 rounded-e-full w-7 lg:w-10 flex justify-center items-center'>
            <MagnifyingGlass />
          </button>
        </div>
      </nav>
      <Sidebar openSidebar={openSidebar} handleBarsClick={handleBarsClick} />
      <main className='flex justify-center content-center h-screen'>
        <ToolsSections />
      </main>
      <Footer />
    </>
  )
}

export default App

import { Link } from 'react-router-dom'
import { BarsSvg } from '../assets/barsSvg'
import { MagnifyingGlass } from '../assets/MagnifyingGlass'
import { useEffect } from 'react'
export interface NavProps {
  handleClick: () => void
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export function Nav({ handleClick, showModal, setShowModal }: NavProps) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault()
      setShowModal(!showModal)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <nav className='flex flex-row w-full h-16 m-0 p-3 items-center justify-between gap-3 sm:gap-0 fixed top-0 align-middle z-10 bg-indigo-950/50 backdrop-blur-md'>
      <BarsSvg handleClick={handleClick} />
      <Link to={'/'}>
        <h1 className='text-2xl inter-regular-400'>MDK Tools</h1>
      </Link>
      <div className='flex lg:pe-28'>
        <input
          id='searchbar'
          placeholder='ctrl+k'
          className='rounded-s-full sm:ps-3 py-1 inter-300 w-0 sm:w-52 p-0'
          type='text'
          onFocus={() => setShowModal(true)}
        />
        <button className='sm:bg-indigo-700 rounded-e-full w-7 lg:w-10 flex justify-center items-center'>
          <MagnifyingGlass />
        </button>
        <section>
          <div
            className={
              +showModal
                ? 'h-80 w-80 bg-black absolute'
                : 'h-80 w-80 bg-black hidden'
            }
          ></div>
        </section>
      </div>
    </nav>
  )
}

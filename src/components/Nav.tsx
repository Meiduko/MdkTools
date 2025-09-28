import '../styles/components/Nav.css'
import { Link } from 'react-router-dom'
import { BarsSvg } from '../assets/barsSvg'
import { MagnifyingGlass } from '../assets/MagnifyingGlass'
export interface NavProps {
  handleClick: () => void
  openModal: () => void
}
export function Nav({ handleClick, openModal }: NavProps) {
  return (
    // flex  h-16 items-center justify-between
    <nav>
      <BarsSvg handleClick={handleClick} />
      <Link to={'/'}>
        <h1 className='self-center text-3xl font-semibold justify-self-center md:text-5xl lg:text-7xl'>All Tools</h1>
      </Link>
      <div id='searchbarContainer'>
        <button
          id='navbarInput'
          className='hidden searchbar md:flex'
          onClick={() => {
            openModal()
          }}
        >
          ctrl+k
        </button>
        <button
          id='searchBtn'
          className='secondaryBtn size-10'
          onClick={() => {
            openModal()
          }}
        >
          <MagnifyingGlass />
        </button>
      </div>
    </nav>
  )
}

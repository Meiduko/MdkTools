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
        <h1 id='navbarTitle'>All Tools</h1>
      </Link>
      <div id='searchbarContainer'>
        <button
          id='navbarInput'
          className='searchbar'
          onClick={() => {
            openModal()
          }}
        >
          ctrl+k
        </button>
        <button
          id='searchBtn'
          className='secondaryBtn'
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

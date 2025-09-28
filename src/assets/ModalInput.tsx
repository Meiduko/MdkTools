import { MagnifyingGlass } from './MagnifyingGlass'

interface ModalInputProps {
  showModal: boolean
  setSearch: (search: string) => void
}

export default function ModalInput({ showModal, setSearch }: ModalInputProps) {
  return (
    <div id='modalSearchbar'>
      <input
        id='modalInput'
        aria-label='search input'
        className='searchbar'
        placeholder='Search...'
        type='text'
        disabled={!showModal}
        onChange={e => setSearch(e.target.value)}
      />
      <button aria-label='search' id='modalInputBtn' className='shadow-inner secondaryBtn'>
        <MagnifyingGlass />
      </button>
    </div>
  )
}

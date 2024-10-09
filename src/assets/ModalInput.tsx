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
        className='searchbar'
        placeholder='Search...'
        type='text'
        disabled={!showModal}
        onChange={e => setSearch(e.target.value)}
      />
      <button id='modalInputBtn' className='secondaryBtn'>
        <MagnifyingGlass />
      </button>
    </div>
  )
}

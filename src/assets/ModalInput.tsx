import { MagnifyingGlass } from './MagnifyingGlass'

interface ModalInputProps {
  showModal: boolean
}

export default function ModalInput({ showModal }: ModalInputProps) {
  return (
    <div id='modalInputContainer'>
      <div id='modalSearchbar'>
        <input
          id='modalInput'
          className='searchbar inter-500 tertiaryBrown'
          placeholder='Search...'
          type='text'
          disabled={!showModal}
        />
        <button id='modalInputBtn' className='secondaryBtn'>
          <MagnifyingGlass />
        </button>
      </div>
      <div id='modalFilters'>
        <select className=' secondaryBtn'>
          <option value='0'>Section</option>
        </select>
        <select className=' secondaryBtn'>
          <option value='0'>Category</option>
        </select>
        <select className=' secondaryBtn'>
          <option value='0'>Technology</option>
        </select>
      </div>
    </div>
  )
}

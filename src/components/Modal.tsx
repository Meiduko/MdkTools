import '../styles/components/Modal.css'
import { MagnifyingGlass } from '../assets/MagnifyingGlass'
import { useEffect } from 'react'

interface ModalProps {
  showModal: boolean
}

export default function Modal({ showModal }: ModalProps) {
  const a: Array<string> = ['a', 'b', 'c', 'd', '2']
  useEffect(() => {
    if (showModal) {
      document.getElementById('modalInput')?.focus()
    }
  }, [showModal])
  return (
    <section id='modal' className='backdrop-blur-sm' data-show={showModal}>
      <div id='modalInputContainer'>
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
      <div
        id='modalSection'
        className='scrollbar-thin scrollbar-thumb-[#ffb74d] scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar-corner-transparent'
      >
        {a.map(a => (
          <div className='modalResult '>
            <h3 className='modalResultTitle'>Tool Name</h3>
            <div className='modalResultDescriptionContainer'>
              <p className='modalResultDescription'>
                {a}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo aspernatur nemo eaque minima voluptate eligendi
                corporis dignissimos, quia facere quae odit cumque blanditiis
                sunt dolorem dicta officia, harum ipsa eveniet!
              </p>
              <button className='modalResultBtn primaryBtn'>Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import '../styles/components/Modal.css'
import { useEffect } from 'react'
import ModalResult from '../assets/ModalResult'
import ModalInput from '../assets/ModalInput'

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
      <ModalInput showModal={showModal} />
      <div
        id='modalSection'
        className='scrollbar-thin scrollbar-thumb-[#ffb74d] scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar-corner-transparent'
      >
        {a.map((a, _) => (
          <ModalResult key={a + _} a={a} _={_} />
        ))}
      </div>
    </section>
  )
}

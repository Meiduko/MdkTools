import '../styles/components/Modal.css'
import { useEffect, useState } from 'react'
import ModalResult from '../assets/ModalResult'
import ModalInput from '../assets/ModalInput'
import ModalFilters from '../assets/ModalFilters'

interface ModalProps {
  showModal: boolean
}

export default function Modal({ showModal }: ModalProps) {
  const [search, setSearch] = useState<string>('')
  const [sectionFilter, setSectionFilter] = useState('')
  const [subsectionFilter, setSubsectionFilter] = useState('')
  const [techfilter, setTechFilter] = useState('')

  useEffect(() => {
    if (showModal) {
      document.getElementById('modalInput')?.focus()
    }
  }, [showModal])
  return (
    <section id='modal' className='backdrop-blur-sm' data-show={showModal}>
      <div id='modalInputContainer'>
        <ModalInput setSearch={setSearch} showModal={showModal} />
        <ModalFilters
          section={sectionFilter}
          setSection={setSectionFilter}
          setSubsection={setSubsectionFilter}
          setTech={setTechFilter}
        />
      </div>
      <div id='modalSection' className=''>
        <ModalResult
          key={search}
          search={search}
          sectionFilter={sectionFilter}
          subsectionFilter={subsectionFilter}
          techFilter={techfilter}
        />
      </div>
    </section>
  )
}

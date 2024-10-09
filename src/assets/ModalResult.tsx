import { useEffect, useState } from 'react'
// import allTools from '../tools.json'
import { Item } from '../types'
import { searchLogic } from '../logic/searchLogic'

interface ModalResultProps {
  search: string
  sectionFilter: string
  subsectionFilter: string
  techFilter: string
}

export default function ModalResult({
  search,
  sectionFilter,
  subsectionFilter,
  techFilter
}: ModalResultProps) {
  const [results, setResult] = useState<Item[] | null>(null)
  const filters = {
    section: sectionFilter,
    subsection: subsectionFilter,
    tech: techFilter
  }

  useEffect(() => {
    setResult(searchLogic({ filters, search }))
  }, [search, sectionFilter, subsectionFilter, techFilter])
  return results?.map((result, index) => (
    <div key={result.name + index} className='modalResult '>
      <h3 className='modalResultTitle'>{result.name}</h3>
      <div className='modalResultDescriptionContainer'>
        <p className='modalResultDescription'>{result.Description}</p>
        <a
          target='_blank'
          href={result.Url}
          className='modalResultBtn primaryBtn'
        >
          Ver más
        </a>
      </div>
    </div>
  ))
}

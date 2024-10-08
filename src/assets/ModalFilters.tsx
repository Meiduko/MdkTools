import { useState } from 'react'
import allTools from '../tools.json'

export default function ModalFilters() {
  const [sectionFilter, setSectionFilter] = useState('')
  const [subsectionFilter, setSubsectionFilter] = useState('')
  const [techfilter, setTechFilter] = useState('')

  return (
    <div id='modalFilters'>
      <select
        onChange={e => setSectionFilter(e.target.value)}
        className=' secondaryBtn'
      >
        <option value='0'>Section</option>
        {allTools.Tools.map(tools => {
          return (
            <option value={tools.section_name}>{tools.section_name}</option>
          )
        })}
      </select>
      <select
        onChange={e => setSubsectionFilter(e.target.value)}
        className=' secondaryBtn'
      >
        <option value='0'>Category</option>
        {allTools.Tools.map(tools =>
          tools.section_name === sectionFilter
            ? tools.subsections.map(subsection => (
                <option value={subsection.subsection_name}>
                  {subsection.subsection_name}
                </option>
              ))
            : null
        )}
      </select>
      <select
        onChange={e => setTechFilter(e.target.value)}
        className=' secondaryBtn'
      >
        <option value='0'>Technology</option>
      </select>
    </div>
  )
}

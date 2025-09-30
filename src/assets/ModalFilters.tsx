import allTools from '../tools.json'

interface ModalFiltersProps {
  section: string
  setSection: (value: string) => void
  setSubsection: (value: string) => void
  setTech: (value: string) => void
}

export default function ModalFilters({
  section,
  setSection,
  setSubsection,
  setTech
}: ModalFiltersProps) {
  return (
    <div id='modalFilters'>
      <label id='sectionLabel' htmlFor="sectionSelect" className='sr-only'>Filter by section</label>
      <select
        id='sectionSelect'
        aria-labelledby='sectionLabel'
        onChange={e => setSection(e.target.value)}
        className=' secondaryBtn'
      >
        <option value=''>Section</option>
        {allTools.Tools.map(tools => {
          return (
            <option key={tools.section_name} value={tools.section_name}>
              {tools.section_name}
            </option>
          )
        })}
      </select>
      <label id='categoryLabel' htmlFor="categorySelect" className='sr-only' >Filter by section</label>
      <select
        id='categorySelect'
        aria-labelledby='categoryLabel'
        onChange={e => setSubsection(e.target.value)}
        className='secondaryBtn'
      >
        <option value=''>Category</option>
        {allTools.Tools.map(tools =>
          tools.section_name === section
            ? tools.subsections.map(subsection => (
                <option
                  key={subsection.subsection_name}
                  value={subsection.subsection_name}
                >
                  {subsection.subsection_name}
                </option>
              ))
            : null
        )}
      </select>
      <label id='technologyLabel' htmlFor="technologySelect" className='sr-only'>Filter by technology</label>
      <select 
        id='technologySelect'
        aria-labelledby='technologyLabel'
      onChange={e => setTech(e.target.value)} className=' secondaryBtn'>
        <option value=''>Technology</option>
        {allTools.Technologies.map(tech => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </div>
  )
}

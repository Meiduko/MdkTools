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
      <select
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
      <select
        onChange={e => setSubsection(e.target.value)}
        className=' secondaryBtn'
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
      <select onChange={e => setTech(e.target.value)} className=' secondaryBtn'>
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

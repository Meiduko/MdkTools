import { Link, useParams } from 'react-router-dom'
import AllTools from '../tools.json'
import StockImagesIcon from '../assets/StockImagesIcon'
import transition from '../logic/transition'

function ToolsSection() {
  const { sectionName } = useParams()

  return (
    <div className='flex flex-col gap-5 items-center'>
      <h2 className='text-3xl inter-400'>{sectionName}</h2>
      <ul className='toolSections text-center transition-all flex justify-around flex-wrap sm:grid lg:gap-y-32 lg:gap-x-44 md:gap-x-28  gap-x-16 gap-y-12  sm:justify-center'>
        {AllTools.Tools.map(tools => {
          return tools.section_name === sectionName
            ? tools.subsections.map(subsection => {
                return (
                  <Link to={'/subSection/' + subsection.subsection_name}>
                    <li key={subsection.subsection_name}>
                      <div className=''>
                        <StockImagesIcon />
                      </div>
                      {subsection.subsection_name}
                    </li>
                  </Link>
                )
              })
            : null
        })}
      </ul>
    </div>
  )
}

const TransitionToolsSection = transition(ToolsSection)

export default TransitionToolsSection

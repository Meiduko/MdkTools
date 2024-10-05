import '../styles/components/Section.css'
import { useParams } from 'react-router-dom'
import AllTools from '../tools.json'
// import StockImagesIcon from '../assets/StockImagesIcon'
import transition from '../logic/transition'
import { Card } from '../components/Card'

function Section() {
  const { sectionName } = useParams()

  return (
    <div id='Section'>
      <h2 id='sectionName'>{sectionName}</h2>
      <ul className='toolSections'>
        {AllTools.Tools.map(tools => {
          return tools.section_name === sectionName
            ? tools.subsections.map(subsection => {
                return (
                  <Card
                    key={subsection.subsection_name}
                    firstLevel={false}
                    name={subsection.subsection_name}
                  />
                )
              })
            : null
        })}
      </ul>
    </div>
  )
}

const TransitionSection = transition(Section)

export default TransitionSection

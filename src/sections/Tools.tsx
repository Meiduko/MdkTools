import '../styles/components/Tools.css'
import { useParams } from 'react-router-dom'
import AllTools from '../tools.json'
import { type Subsection, type ToolsType } from '../types'
import transition from '../logic/transition'
import { IsToolFree } from '../assets/isToolFree'

function Tools() {
  const subSectionName = useParams()

  return (
    <div id='toolsContainer'>
      <h2>{subSectionName.subSectionName}</h2>
      <ul id='items'>
        {AllTools.Tools.map((Tools: ToolsType, _) => {
          return Tools.subsections.map((subsection: Subsection) => {
            return subsection.subsection_name === subSectionName.subSectionName
              ? subsection.Categories?.map(category => {
                  return (
                    <li id='itemsRow' key={Tools.section_name + _}>
                      <h3 id='categoryTitle'>{category.category_name}</h3>
                      {
                        // Para Visualizar
                      }
                      <ul id='categoryRow'>
                        {category.items?.map(tools => (
                          <a href={tools.Url} target='_blank'>
                            <li
                              id='toolCard'
                              key={tools.Url}
                              className='primaryCard'
                            >
                              <h4 id='toolTitle'> {tools.name}</h4>
                              <p id='toolDescription'>{tools.Description}</p>
                              {tools.Technologies?.length ? (
                                <ul className='techList'>
                                  {tools.Technologies?.map(tech => (
                                    <li key={tech} className='tech'>
                                      {tech}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                              <IsToolFree isFree={tools.Free} />
                            </li>
                          </a>
                        ))}
                      </ul>
                      {
                        // Para Visualizar
                      }
                    </li>
                  )
                })
              : null
          })
        })}
      </ul>
    </div>
  )
}

const TransitionTools = transition(Tools)

export default TransitionTools
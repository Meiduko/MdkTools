import { useParams } from 'react-router-dom'
import AllTools from '../tools.json'
import { type Subsection, type ToolsType } from '../types'
import transition from '../logic/transition'

function ToolsSubSection() {
  const subSectionName = useParams()

  return (
    <div className='flex flex-col gap-5 items-center'>
      <h2 className='text-3xl inter-400'>{subSectionName.subSectionName}</h2>
      <ul className='toolSections text-center transition-all flex justify-around flex-wrap sm:grid lg:gap-y-32 lg:gap-x-44 md:gap-x-28  gap-x-16 gap-y-12  sm:justify-center'>
        {AllTools.Tools.map((Tools: ToolsType) => {
          return Tools.subsections.map((subsection: Subsection) => {
            return subsection.subsection_name === subSectionName.subSectionName
              ? subsection.Categories?.map(category => {
                  return (
                    <li className='toolSection flex flex-col justify-center items-center'>
                      <p className='text-4xl'>{category.category_name}</p>
                      {
                        // Para Visualizar
                      }
                      <ul className='flex flex-col gap-16'>
                        {category.items?.map(tools => (
                          <li>
                            <a
                              href={tools.Url}
                              target='_blank'
                              className='hover:text-indigo-500'
                            >
                              {tools.name}
                            </a>
                            <p>{tools.Description}</p>
                            {tools.Technologies?.length ? (
                              <p className='pt-5 bg-black'>
                                {tools.Technologies?.map(tech => tech + ' ')}
                              </p>
                            ) : null}
                            {tools.Free === 'Freemium' ? (
                              <p>Freemium</p>
                            ) : tools.Free ? (
                              <p className='line-through text-green-900  text-xl'>
                                $
                              </p>
                            ) : (
                              <p className='text-red-800 text-xl'>$</p>
                            )}
                          </li>
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

const TransitionToolsSubSection = transition(ToolsSubSection)

export default TransitionToolsSubSection

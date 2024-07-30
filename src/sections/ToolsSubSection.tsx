import { useParams } from 'react-router-dom'
import AllTools from '../tools.json'

export default function ToolsSubSection() {
  const subSectionName = useParams()
  console.log(subSectionName.subSectionName)

  return (
    <div className='flex flex-col gap-5 items-center'>
      <h2 className='text-3xl inter-400'>{subSectionName.subSectionName}</h2>
      <ul className='toolSections text-center transition-all flex justify-around flex-wrap sm:grid lg:gap-y-32 lg:gap-x-44 md:gap-x-28  gap-x-16 gap-y-12  sm:justify-center'>
        {AllTools.Tools.map(tools => {
          return tools.subsections.map(subsection => {
            return subsection.subsection_name === subSectionName.subSectionName
              ? subsection.specific_tools.map(tool => {
                  console.log(tool)
                  return (
                    <li className='toolSection flex flex-col justify-center items-center'>
                      {tool.specific_tools_name}
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

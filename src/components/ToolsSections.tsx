import AllTools from '../tools.json'
import { StockImagesIcon } from '../assets/StockImagesIcon'

export function ToolsSections() {
  return (
    <ul className='toolSections transition-all mt-16 flex justify-around flex-wrap sm:grid lg:gap-y-32 lg:gap-x-44 md:gap-x-28  gap-x-16 gap-y-12  sm:justify-center'>
      {AllTools.Tools.map(tools => (
        <li
          key={tools.section_name}
          className='toolSection flex flex-col justify-center items-center'
        >
          <div className=''>
            <StockImagesIcon />
          </div>
          <h3 className='inter-300'>{tools.section_name}</h3>
          {/* <p>
                {tools.subsections?.map(subsection => (
                  <ul>
                    <li key={subsection.subsection_name}>
                      {subsection.subsection_name}
                    </li>
                  </ul>
                ))}
              </p> */}
        </li>
      ))}
    </ul>
  )
}

import AllTools from '../tools.json'
import { StockImagesIcon } from '../assets/StockImagesIcon'
import { Link } from 'react-router-dom'
import transition from '../logic/transition'

function ToolsSections() {
  return (
    <ul className='toolSections text-center transition-all flex justify-around flex-wrap sm:grid lg:gap-y-32 lg:gap-x-44 md:gap-x-28  gap-x-16 gap-y-12  sm:justify-center'>
      {AllTools.Tools.map(tools => (
        <li
          key={tools.section_name}
          className='toolSection flex flex-col justify-center items-center'
        >
          <Link to={'/section/' + tools.section_name}>
            <div>
              <StockImagesIcon />
            </div>
            <h3 className='inter-300'>{tools.section_name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const TransitionToolsSections = transition(ToolsSections)

export default TransitionToolsSections

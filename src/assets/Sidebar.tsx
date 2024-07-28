import { BarsSvg } from './barsSvg'
import AllTools from '../tools.json'
import { OpenArrow } from '../assets/OpenArrow'

interface SidebarProps {
  openSidebar: boolean
  handleBarsClick: () => void
}

export function Sidebar({ openSidebar, handleBarsClick }: SidebarProps) {
  function handleSectionClick(target: HTMLDivElement) {
    const tools = target.nextElementSibling

    if (tools?.classList.contains('flex')) {
      tools.classList.remove('flex')
      tools.classList.add('hidden')
    } else if (tools?.classList.contains('hidden')) {
      tools.classList.remove('hidden')
      tools.classList.add('flex')
    }
    // const toolsArray = Array.from(toolsUl)
    // console.log(toolsArray);
  }

  return (
    <div
      id='sidebar'
      className='inter-500 transition-all duration-500 text-xl flex flex-col backdrop-blur-sm z-10 bg-white/50 text-black w-96 gap-8 h-screen '
      data-show={openSidebar}
    >
      <div className='flex flex-row gap-6  pt-4 px-3 h-16'>
        <BarsSvg handleClick={handleBarsClick} />
        <h2 className='text-center'>MDK Tools</h2>
      </div>
      <ul
        id='sidebar-subsections'
        className='flex flex-col gap-12 scrollbar-thin scrollbar-thumb-indigo-700/40 scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar-corner-transparent overflow-y-scroll'
      >
        {AllTools.Tools.map(tools => (
          <li
            key={tools.section_name}
            className='toolSection  flex flex-col justify-start mx-3'
          >
            <div
              className='flex justify-between p-2 cursor-pointer rounded-lg hover:bg-black/10'
              onClick={e => handleSectionClick(e.target)}
            >
              <h3 className='inter-400'>{tools.section_name}</h3>
              <OpenArrow />
            </div>
            <ul className='tool-subsection flex flex-col ps-5 transition-all duration-150 border-s-2 border-black '>
              {tools.subsections?.map(subsection => (
                <li key={subsection.subsection_name} className='tools'>
                  {subsection.subsection_name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

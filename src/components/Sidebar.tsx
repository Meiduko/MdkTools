import { BarsSvg } from '../assets/barsSvg'
import AllTools from '../tools.json'
import { OpenArrow } from '../assets/OpenArrow'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export interface SidebarProps {
  openSidebar: boolean
  handleBarsClick: () => void
}

export function Sidebar({ openSidebar, handleBarsClick }: SidebarProps) {
  const [expanded, setExpanded] = useState<string | false>(false)

  function handleChange(panel: string) {
    const isExpanded: boolean = expanded === panel
    setExpanded(isExpanded ? false : panel)
  }

  return (
    <div
      id='sidebar'
      className='inter-500 transition-all duration-500 text-xl flex flex-col backdrop-blur-sm z-10 bg-white/50 text-black w-96 gap-8 h-screen '
      data-show={openSidebar}
    >
      <div className='flex flex-row gap-6  pt-4 px-3 h-16'>
        <BarsSvg handleClick={handleBarsClick} />
        <Link to={'/'}>
          <h2 className='text-2xl '>MDK Tools</h2>
        </Link>
      </div>
      <ul className='flex flex-col gap-4 scrollbar-thin scrollbar-thumb-indigo-700/40 scrollbar-thumb-rounded-sm scrollbar-track-transparent scrollbar-corner-transparent overflow-y-scroll'>
        {AllTools.Tools.map((tools, index) => (
          <ul key={tools.section_name}>
            <Accordion
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none'
              }}
              className='toolSection flex flex-col justify-start mx-3'
              expanded={expanded === 'panel' + index}
              onChange={() => handleChange('panel' + index)}
            >
              <AccordionSummary
                expandIcon={<OpenArrow />}
                sx={{
                  borderRadius: '12px',
                  paddingX: '6px',
                  marginX: '10px',
                  transition: 'ease-in',
                  transitionDuration: '500ms',
                  ':hover': { backgroundColor: '#1f1b725f' }
                }}
              >
                {tools.section_name}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderLeft: '1px solid #000',
                  marginLeft: '16px',
                  paddingBottom: '0px',
                  transitionDuration: '5500ms'
                }}
              >
                <ul>
                  {tools.subsections.map(tool => (
                    <Link to={'/subSection/' + tool.subsection_name}>
                      <li
                        key={tool.subsection_name}
                        className='cursor-pointer hover:bg-indigo-700/20 rounded-xl p-1.5 transition-all duration-500'
                      >
                        {tool.subsection_name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </ul>
        ))}
      </ul>
    </div>
  )
}

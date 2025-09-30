import '../styles/components/Sidebar.css'
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
    <div id='sidebar' data-show={openSidebar}>
      <div id='sidebarHeader'>
        <BarsSvg handleClick={handleBarsClick} />
        <Link to={'/'}>
          <h2 id='sidebarTitle'>MDK Tools</h2>
        </Link>
      </div>
      <ul
        id='sidebarUl'
        className='scrollbar-thin scrollbar-thumb-[#ffb74d] scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-corner-transparent'
      >
        {AllTools.Tools.map((tools, index) => (
          <li key={tools.section_name}>
            <Accordion
              id={`sidebarAccordion ${index}`}
              expanded={expanded === 'panel' + index}
              onChange={() => handleChange('panel' + index)}
            >
              <AccordionSummary id={`sidebarSection ${tools.section_name}`} expandIcon={<OpenArrow />}>
                <h3 className='sidebarSectionName'>{tools.section_name}</h3>
              </AccordionSummary>
              <AccordionDetails id={`containerSidebarSubsections ${tools.section_name}`}>
                <ul>
                  {tools.subsections.map(tool => (
                    <li
                      id={`sidebarSubsection ${tool.subsection_name}`}
                      key={tool.subsection_name}
                      onClick={() => handleBarsClick()}
                    >
                      <Link to={'/subSection/' + tool.subsection_name}>
                        <p className='sidebarSubsectionName'>
                          {tool.subsection_name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
        ))}
      </ul>
    </div>
  )
}

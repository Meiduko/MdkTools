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
          <ul key={tools.section_name}>
            <Accordion
              id='sidebarAccordion'
              expanded={expanded === 'panel' + index}
              onChange={() => handleChange('panel' + index)}
            >
              <AccordionSummary id='sidebarSection' expandIcon={<OpenArrow />}>
                <h3 className='sidebarSectionName'>{tools.section_name}</h3>
              </AccordionSummary>
              <AccordionDetails id='sidebarSubsectionsContainer'>
                <ul>
                  {tools.subsections.map(tool => (
                    <Link to={'/subSection/' + tool.subsection_name}>
                      <li
                        id='sidebarSubsection'
                        key={tool.subsection_name}
                        onClick={() => handleBarsClick()}
                      >
                        <p className='sidebarSubsectionName'>
                          {tool.subsection_name}
                        </p>
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

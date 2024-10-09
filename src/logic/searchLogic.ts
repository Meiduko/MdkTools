import { Item } from "../types"
import allTools from '../tools.json'


interface searchLogicProps{
  search: string
  filters: {
    section: string
    subsection: string
    tech: string
  }
}

export function searchLogic({search, filters}: searchLogicProps): Item[] | null{
  const resultArray: Item[] = []
  
  if (filters.section){    
    allTools.Tools.map(section => {
      if (section.section_name === filters.section){
        section.subsections.map(subsection => {
          if (filters.subsection) {
            if (subsection.subsection_name === filters.subsection){
            subsection.Categories.map(category =>
              category.items.map(item => {
                if (filters.tech){
                  if(item.Technologies.includes(filters.tech))
                  if (item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.Description.toLowerCase().includes(search.toLowerCase())) {
                  resultArray.push(item)
                }
                }else{
                  if (item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.Description.toLowerCase().includes(search.toLowerCase()) ||
                item.Technologies.toString()
                  .toLowerCase()
                  .includes(search.toLowerCase())) {
                  resultArray.push(item)
                }
                }
                })
              )}else{
               return  
              }
          }else{
            subsection.Categories.map(category =>
              category.items.map(item => {
                if (filters.tech){
                  if(item.Technologies.includes(filters.tech))
                  if (item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.Description.toLowerCase().includes(search.toLowerCase())) {
                  resultArray.push(item)
                }
                }else{
                  if (item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.Description.toLowerCase().includes(search.toLowerCase()) ||
                item.Technologies.toString()
                  .toLowerCase()
                  .includes(search.toLowerCase())) {
                  resultArray.push(item)
                }
                }
                })
              )
          }
          })
      }else{
        return 
      }})
  }else {
    allTools.Tools.map(tools => {
      tools.subsections.map(subsections => {
        subsections.Categories.map(category =>
          category.items.map(item => {
            if (filters.tech){
              if(item.Technologies.includes(filters.tech))
              if (item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.Description.toLowerCase().includes(search.toLowerCase())) {
              resultArray.push(item)
            }
            }else{
              if (item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.Description.toLowerCase().includes(search.toLowerCase()) ||
            item.Technologies.toString()
              .toLowerCase()
              .includes(search.toLowerCase())) {
              resultArray.push(item)
            }
            }
          })
        )
      })
    })    
  }
  return resultArray
}
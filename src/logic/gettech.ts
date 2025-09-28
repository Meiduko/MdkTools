import allTools from '../tools.json'

export function getTech () {
  const techArray: string[] = []

  allTools.Tools.map(tools =>
    tools.subsections.map(subsection =>
      subsection.Categories.map(category =>
        category.items.map(item =>
          item.Technologies.map(tech => {
            if (!techArray.includes(tech)) {
              techArray.push(tech)
            }
          })
        )
      )
    )
  )
  return techArray
}

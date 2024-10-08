import { useEffect, useState } from 'react'
import allTools from '../tools.json'
import { Item } from '../types'

interface ModalResultProps {
  search: string
}

export default function ModalResult({ search }: ModalResultProps) {
  const [results, setResult] = useState<Item[] | null>(null)

  useEffect(() => {
    const resultArray: Item[] = []
    allTools.Tools.map(tools => {
      tools.subsections.map(subsections => {
        subsections.Categories.map(category =>
          category.items.map(items => {
            if (
              items.Description.toLowerCase().includes(search.toLowerCase())
            ) {
              resultArray.push(items)
            }
          })
        )
      })
    })
    setResult(resultArray)
    console.log(search)
    console.log(resultArray)
  }, [search])

  return results?.map(result => (
    <div className='modalResult '>
      <h3 className='modalResultTitle'>{result.name}</h3>
      <div className='modalResultDescriptionContainer'>
        <p className='modalResultDescription'>{result.Description}</p>
        <button className='modalResultBtn primaryBtn'>Ver más</button>
      </div>
    </div>
  ))
}

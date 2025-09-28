import { Link } from 'react-router-dom'
import StockImagesIcon from '../assets/StockImagesIcon'

interface CardProps {
  name: string
  firstLevel: boolean
}

export function Card({ firstLevel, name }: CardProps) {
  return (
    <li className='flex justify-center' key={name}>
      <Link
        to={firstLevel ? '/section/' + name : '/subSection/' + name}
        className='w-2/3 primaryCard sm:w-3/4 md:w-full h-1/2 sm:h-2/3 md:h-full'
      >
        <StockImagesIcon />
        <h3 className=''>{name}</h3>
      </Link>
    </li>
  )
}

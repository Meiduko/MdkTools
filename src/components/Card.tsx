import { Link } from 'react-router-dom'
import StockImagesIcon from '../assets/StockImagesIcon'

interface CardProps {
  name: string
  firstLevel: boolean
}

export function Card({ firstLevel, name }: CardProps) {
  return (
    <li key={name}>
      <Link
        to={firstLevel ? '/section/' + name : '/subSection/' + name}
        className='primaryCard'
      >
        <div>
          <StockImagesIcon />
        </div>
        <h3>{name}</h3>
      </Link>
    </li>
  )
}

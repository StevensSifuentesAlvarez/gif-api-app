import React, { useContext } from 'react'
import { GifContext } from '../../context/GifContext';
import { CardGridItem } from './styles';

const GifGridItem = ({ title, url }) => {
  const { darkMode } = useContext(GifContext)
  return (
    <CardGridItem 
      className='animate__animated animate__pulse'
      darkMode={ darkMode }>
        <p> { title } </p>
        <img src={ url } alt={ title } />
    </CardGridItem>
  )
}

export default GifGridItem
import React from 'react'
import styled from 'styled-components';

const GifGridItem = ({ title, url }) => {
  return (
    <CardGridItem className='animate__animated animate__pulse'>
        <p> { title } </p>
        <img src={ url } alt={ title } />
    </CardGridItem>
  )
}

const CardGridItem = styled.div`
  padding: 10px;
  background: #F7F3F3;
  text-align: center;
  border: 1px solid white;
  box-shadow: 0px 0px 20px rgba(129, 129, 129 , .3);
  border-radius: 10px;
  overflow: hidden;

  p {
    padding: 10px 5px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
  }

  img {
    padding: 10px;
    width: 100%;
    height: 300px;
    border-radius: 20px;
  }
`

export default GifGridItem
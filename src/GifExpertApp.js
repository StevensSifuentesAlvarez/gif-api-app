import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import styled from 'styled-components';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    return (
    <Fragment>
        <Title>Gif App</Title>
        <hr />
        <AddCategory setCategories={setCategories} />
        <Container>
            { 
                categories.map(category => 
                    ( <GifGrid key={category} category={category}/> )
                ) 
            }
        </Container>
    </Fragment>
  )
}

const Title = styled.h2({
    textAlign: 'center',
    fontSize: '4em',
    marginBottom: '20px',
})

const Container = styled.ol`
    margin: 20px 0;
`

export default GifExpertApp
import React, { Fragment, useContext, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import styled from 'styled-components'
import Header from './components/Header'
import { GifContext } from './context/GifContext'

const historyCategories = ['Hunter X Hunter']

const GifExpertApp = () => {
    const { darkMode } = useContext(GifContext)
    const [categories, setCategories] = useState(['Hunter X Hunter'])

    console.log(historyCategories)

    return (
    <Fragment>
        <AppContainer darkMode={darkMode}>
            <Header />
            <hr />
            <AddCategory 
                setCategories={ setCategories } 
                historyCategories={ historyCategories }/>
            <Container>
                { 
                    categories.map(category => 
                        ( <GifGrid key={category} category={category}/> )
                    ) 
                }
            </Container>
        </AppContainer>
    </Fragment>
  )
}

const Container = styled.ol`
    margin: 20px 0;
`

const AppContainer = styled.div`
    padding: 40px;
    background: ${props => props.darkMode.bgBody && props.darkMode.bgBody };
`

export default GifExpertApp
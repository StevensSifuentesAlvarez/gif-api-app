import React, { Fragment, useContext, useState } from 'react'

import AddCategory from './components/form/AddCategory'
import Header from './components/header/Header'
import GifGrid from './components/gifGrid/GifGrid'
import Sidebar from './components/sidebar/Sidebar'

import { GifContext } from './context/GifContext'
import { AppContainer, Container, GifContainer } from './styles'

const historyCategories = []

const GifExpertApp = () => {
    const { darkMode } = useContext(GifContext)
    const [categories, setCategories] = useState(['Hunter X Hunter'])
    
    const existCategory = historyCategories.includes(categories[0].toLowerCase())
    if(!existCategory) historyCategories.push(categories[0].toLowerCase())

    return (
    <Fragment>
        <AppContainer darkMode={darkMode}>
            <Header />
            <hr />
            <AddCategory 
                setCategories={ setCategories }/>
            <GifContainer>
                <Container>
                    { 
                        categories.map(category => 
                            ( <GifGrid key={category} category={category}/> )
                        ) 
                    }
                </Container>
                <Sidebar 
                    historyCategories={historyCategories}
                    setCategories={setCategories} />
            </GifContainer>
        </AppContainer>
    </Fragment>
  )
}

export default GifExpertApp
import React, { useContext } from 'react'
import { GifContext } from '../../context/GifContext'
import { Ball, HeaderContainer, ThemeContainer, ThemeItems, Title } from './styles'

const Header = () => {
    const { darkMode, handleTheme } = useContext(GifContext)

    return (
        <HeaderContainer>
            <Title darkMode={darkMode}>Gif App 📌</Title>
            <ThemeContainer darkMode={darkMode}>
                <ThemeItems>
                    <Ball 
                        onClick={handleTheme} 
                        darkMode={darkMode}></Ball>
                    <div>
                        <span role='img'>🌜</span>
                    </div>
                    <div>
                        <span role='img'>🌞</span>
                    </div>
                </ThemeItems>
            </ThemeContainer>
        </HeaderContainer>
  )
}

export default Header
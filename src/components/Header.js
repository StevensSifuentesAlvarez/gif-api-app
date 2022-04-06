import React, { useContext } from 'react'
import styled from 'styled-components'
import { GifContext } from '../context/GifContext'

const Header = () => {
    const { darkMode, handleTheme } = useContext(GifContext)

    return (
        <HeaderContainer>
            <Title darkMode={darkMode}>Gif App</Title>
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

const Title = styled.h2`
    color: ${props => props.darkMode.titleColor ? props.darkMode.titleColor : 'black' };
    text-align: center;
    font-size: 4em;
    margin-bottom: 20px;
    grid-column: 1 / span 3;

`

const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr) 100px;
    justify-content: center;
    align-items: center;
`

const ThemeContainer = styled.div`
    height: 40px;
    width: 100px;
    border-radius: 50px;
    background: ${props => props.darkMode.background ? props.darkMode.background : '#1976D2'};
    position: relative;
    box-shadow: 2px 2px 10px rgba(129, 129, 129, .3);
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background: #4d4d4d;
    }
`

const ThemeItems = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: inherit;
`

const Ball = styled.div`
    position: absolute;
    left: 10px;
    background: #fafafa;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    transition: all .25s ease;
    transform: ${props => props.darkMode.transform ? props.darkMode.transform: ''};

`

export default Header
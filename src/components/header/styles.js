import styled from 'styled-components'

export const Title = styled.h2`
    color: ${props => props.darkMode.colorWhite ? props.darkMode.colorWhite : 'black' };
    text-align: center;
    font-size: 4em;
    margin-bottom: 20px;
    grid-column: 1 / span 3;
    
    @media screen and (max-width: 300px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 301px) and (max-width: 600px){
        font-size: 3em;
    }

    @media screen and (min-width: 601px) and (max-width: 730px){
        font-size: 3.5em;
    }
`

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr) 100px;
    justify-content: center;
    align-items: center;
`

export const ThemeContainer = styled.div`
    height: 40px;
    width: 100%;
    border-radius: 50px;
    background: ${props => props.darkMode.lightBlack ? props.darkMode.lightBlack : '#1976D2'};
    position: relative;
    box-shadow: 2px 2px 10px rgba(129, 129, 129, .3);
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background: #4d4d4d;
    }

    @media screen and (max-width: 300px){
        height: 30px;
        width: 90%;
    }

    @media screen and (min-width: 301px) and (max-width: 600px){
        height: 40px;
        width: 90%;
    }
`

export const ThemeItems = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: inherit;
`

export const Ball = styled.div`
    position: absolute;
    left: 10px;
    background: #fafafa;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    transition: all .25s ease;
    transform: ${props => props.darkMode.transform ? props.darkMode.transform: ''};

    @media screen and (max-width: 300px){
        height: 20px;
        width: 20px;
    }

    @media screen and (min-width: 301px) and (max-width: 600px){
        height: 25px;
        width: 25px;
    }
`
export const ButtonHistory = styled.div`
    img{
        width: 40%;
    }
`
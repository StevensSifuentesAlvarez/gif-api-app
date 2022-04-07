import styled from 'styled-components';

export const GifContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr) 15%;
    justify-content: center;
    gap: 15px;

    @media screen and (max-width: 1199px) {
        gap: 0;
    }

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr;
    }

`

export const Container = styled.ol`
    margin: 20px 0 60px 0;
    grid-column: 1 / span 3;
`

export const AppContainer = styled.div`
    padding: 40px;
    background: ${props => props.darkMode.black && props.darkMode.black };

    @media screen and (max-width: 600px){
        padding: 20px 15px;
    }
`
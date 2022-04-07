import styled from 'styled-components';

export const TitleCategory = styled.h3`
    color: #1c6ab9;
    margin-bottom: 15px;
    text-align: center;
    border: 1px solid #1976D2;
    width: 20%;
    padding: 10px 0;
    border-radius: 4px;

    @media screen and (max-width: 399px){
        width: 100%;
    }

    @media screen and (min-width: 400px) and (max-width: 600px){
        width: 50%;
    }

    @media screen and (min-width: 601px) and (max-width: 730px){
        width: 30%;
    }

    @media screen and (min-width: 731px) and (max-width: 900px){
        width: 40%;
    }
`

export const LoadingContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 20px;
    margin: 15px 0;
    height: 100%;

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }

    @media screen and (min-width: 601px) and (max-width: 730px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 731px) and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
`
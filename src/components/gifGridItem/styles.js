import styled from 'styled-components';

export const CardGridItem = styled.div`
  padding: 10px;
  background: ${props => props.darkMode.lightBlack ? props.darkMode.lightBlack : '#F7F3F3'};
  text-align: center;
  border: 1px solid white;
  box-shadow: 0px 0px 20px rgba(129, 129, 129 , .3);
  border-radius: 10px;
  overflow: hidden;

  p {
    color: ${props => props.darkMode.colorWhite ? props.darkMode.colorWhite : ''};
    padding: 10px 5px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
  }

  img {
    padding: 10px;
    width: 100%;
    height: 15em;
    border-radius: 20px;

    @media screen and (max-width: 300px){
      height: 10em;
    }
  }
`
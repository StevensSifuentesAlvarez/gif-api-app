import styled from 'styled-components';

export const Form = styled.form`
    margin: 10px 0;
    
    input {
        background: ${props => props.darkMode.lightBlack ? props.darkMode.lightBlack : ''};
        border-radius: 10px;
        padding: 15px 10px;
        text-align: center;
        color: ${props => props.darkMode.colorWhite ? props.darkMode.colorWhite : ''};
    }
    
    input:hover {
        box-shadow: 0px 0px 10px rgba(129, 150, 160, 0.6);
    }
`
import styled from 'styled-components';

export const SidebarContainer = styled.div`
    background: ${props => props.darkMode.backgroundHistory ? props.darkMode.backgroundHistory : '#1976D2'};
    box-shadow: 0px 0px 20px rgba(129, 129, 129 , .3);
    border-radius: 4px;
    max-height: 75vh;
    padding: 10px;

    @media screen and (max-width: 1200px) {
        margin-top: 50px;
        width: 100%;
    }
`

export const Header = styled.div`
    padding: 34px 0;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
    position: relative;
    color: #fff;
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 2em;
            margin-right: 5px;
        }
    }
`

export const List = styled.ul`
    padding: 0 20px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`

export const ListItem = styled.li`
    margin: 5px;
    padding: 8px;
    background-color: ${props => props.darkMode.lightBlack ? props.darkMode.lightBlack : '#fff'};
    border-radius: 4px;
    color: ${props => props.darkMode.colorWhite ? props.darkMode.colorWhite : '#212121'};
    font-weight: regular;
    letter-spacing: 2px;
    cursor: pointer;
    box-shadow: 0px 0px 15px rgba(129, 129, 129, .6);

    &:hover {
        background-color: ${props => props.darkMode.bgItem ? props.darkMode.bgItem : '#092c4c'};
        color: ${props => props.darkMode.black ? props.darkMode.black : '#ebeef3'};
    }
`
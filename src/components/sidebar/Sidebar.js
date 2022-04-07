import React, { useContext } from 'react'
import { GifContext } from '../../context/GifContext'
import { Header, List, ListItem, SidebarContainer } from './styles'

const Sidebar = ({ historyCategories, setCategories }) => {
    const { darkMode } = useContext(GifContext)
    return (
        <SidebarContainer 
            darkMode={darkMode}>
            <Header>
                <p>
                    <img src="https://img.icons8.com/office/344/time-machine--v1.png"/>
                    <span>History</span>
                </p>
            </Header>
            <List>
                {
                    historyCategories.map(c => (
                        <ListItem
                            key={c}
                            darkMode={darkMode}
                            onClick={() => setCategories([c])} >
                            {c}
                        </ListItem>
                    ))
                }
            </List>
        </SidebarContainer>
    )
}

export default Sidebar
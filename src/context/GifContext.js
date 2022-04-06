import { createContext, useState } from 'react'
export const GifContext = createContext()

const DarkMode = {
    bgBody: '',
    background: '',
    titleColor: '',
    transform: '',
    colorInput: '',
    state: false
}

export const GifProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(DarkMode)

    const handleTheme = () => {
        if (!darkMode.state) {
            const newDarkMode = {
                bgBody: 'black',
                background: '#212121',
                titleColor: 'white',
                transform: 'translate(50px, 0)',
                colorInput: 'white', 
                state: true
            }
            setDarkMode(newDarkMode)
        }else{
            setDarkMode(DarkMode)
        }
    }
      
    return (
        <GifContext.Provider value={{ darkMode, handleTheme }}>
            { children }
        </GifContext.Provider>
    )
}

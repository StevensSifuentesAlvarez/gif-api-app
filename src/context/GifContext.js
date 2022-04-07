import { createContext, useState } from 'react'
export const GifContext = createContext()

const DarkMode = {
    black: '',
    lightBlack: '',
    colorWhite: '',
    transform: '',
    backgroundHistory: '',
    bgItem: '',
    state: false
}

export const GifProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(DarkMode)

    const handleTheme = () => {
        if (!darkMode.state) {
            const newDarkMode = {
                black: 'black',
                lightBlack: '#212121',
                colorWhite: 'white',
                transform: 'translate(50px, 0)',
                backgroundHistory: '#092c4c',
                bgItem: '#F7F3F3',
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

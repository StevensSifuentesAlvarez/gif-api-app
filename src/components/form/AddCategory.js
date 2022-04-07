import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { GifContext } from '../../context/GifContext'
import { Form } from './styles'

const AddCategory = ({ setCategories }) => {
    const { darkMode } = useContext(GifContext)
    const [inputValue, setInputValue] = useState('') // Si lo dejo vació -> undefinded

    const handleInputChange = ({ target: {value} }) => {
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length>2){
            setCategories([inputValue])
        }
        setInputValue('')
    }

    return (
        <Form 
            onSubmit={ handleSubmit }
            darkMode={darkMode} >
            <input 
                type="text" 
                placeholder='Enter a new category'
                value={ inputValue }
                onChange={ handleInputChange } />
        </Form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
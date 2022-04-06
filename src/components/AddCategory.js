import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('') // Si lo dejo vació -> undefinded

    const handleInputChange = ({ target: {value} }) => {
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats])
        }
        setInputValue('')
    }

    return (
        <form action="" onSubmit={ handleSubmit }>
            <input 
                type="text" 
                placeholder='Enter a new category'
                value={ inputValue }
                onChange={ handleInputChange } />
        </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
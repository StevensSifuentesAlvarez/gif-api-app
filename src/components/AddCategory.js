import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { GifContext } from '../context/GifContext';

const AddCategory = ({ setCategories,  historyCategories }) => {
    const { darkMode } = useContext(GifContext)
    const [inputValue, setInputValue] = useState('') // Si lo dejo vació -> undefinded

    const handleInputChange = ({ target: {value} }) => {
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length>2){
            historyCategories.push(inputValue)
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

const Form = styled.form`
    margin: 10px 0;
    
    input {
        background: ${props => props.darkMode.background ? props.darkMode.background : ''};
        border-radius: 10px;
        padding: 15px 10px;
        text-align: center;
        color: ${props => props.darkMode.colorInput ? props.darkMode.colorInput : ''};
    }
    
    input:hover {
        box-shadow: 0px 0px 10px rgba(129, 150, 160, 0.6);
    }
`

export default AddCategory
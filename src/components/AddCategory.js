import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

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
        <Form action="" onSubmit={ handleSubmit }>
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
        border-radius: 10px;
        padding: 15px 10px;
        text-align: center;
    }
    
    input:hover {
        box-shadow: 0px 0px 10px rgba(129, 150, 160, 0.6);
    }
`

export default AddCategory
import React from 'react';
import { Label, Input } from './styles'

const InputComponent = ({ type, value, onChange, required, placeholder, label }) => {
    return (
        <>
        <Label>{label}</Label>
        <Input 
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
        />
        </>
    )
}

export default InputComponent;
import React from 'react';
import { Button } from './styles'

const ButtonComponent = ({ text, type, background, onClick, width }) => {
    return (
        <Button
            type={type}
            background={background}
            onClick={onClick}
            width={width}
        >
            {text}
        </Button>
    )
}

export default ButtonComponent;
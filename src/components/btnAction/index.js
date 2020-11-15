import React from 'react';
import { Button } from './styles'

const BtnActionComponent = ({ children, background, color }) => {
    return (
        <Button
            background={background}
            color={color}
        >
            {children}
        </Button>
    )
}

export default BtnActionComponent; 
import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    background-color: ${props => props.background ? props.background : "#323251"};
    color: ${props => props.color ? props.color : "#7366ff"};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
`;
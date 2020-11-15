import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.background ? props.background : "#7366ff" };
    width: ${props => props.width ? props.width : "100%" };
    border: none;
    padding: 0.375rem 1.75rem;
    color: #fff;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
`;
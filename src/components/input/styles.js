import styled from 'styled-components';

export const Label = styled.div`
    margin-bottom: 6px;
    font-size: 15px;
    letter-spacing: 0.4px;
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    line-height: 1.5;
`;

export const Input = styled.input`
    background-color: #1d1e26;
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid #1d1e26;
    font-size: 14px;
    width: 93%;
    height: 32px;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0.25rem;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
`;
import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.div`
    width: 400px;
    background-color: #262932;
    border: 1px solid #374558;
    border-radius: 10px;
    padding: 10px 25px;
`;

export const TextWelcome = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
`;

export const SubWelcome = styled.div`
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: 0.7px;
    font-weight: 400;
    margin-top: -15px;
`;

export const Spacing = styled.div`
    margin-top: 31px;
`;

export const TextForgot = styled.p`
    color: #7366ff;
    text-align: right;
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: 30px;
    cursor: pointer;
`;

export const TextAccount1 = styled.p`
    font-size: 14px;
    color: #898989;
    margin-top: 1.5rem !important;
    line-height: 1.7;
    letter-spacing: 0.7px;
    font-weight: 400;
    text-align: center;
`;

export const Color = styled.span`
    color: #7366ff;
    cursor: pointer;
`;
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineCompass, AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi'

const ICON = `
    font-size: 19px;
    margin-top: -7px;
`;

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #262932;
`;

export const Logo = styled.p`
    text-align: center;
    margin: 0;
    padding: 25px 0;
    font-size: 24px;
    font-weight: 700;
    border-bottom: 1px solid #a9a9a914;
`;

export const Option = styled.div`
    display: flex;
    padding: 9px 23px;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #7366ff14;
    }
`;

export const Title = styled.p`
    padding-left: 12px;
    margin-top: 11px;

`;

export const IconHome = styled(AiOutlineHome)`
    ${ICON}
`;

export const IconCourse = styled(AiOutlineCompass)`
    ${ICON}
`;

export const IconAccount = styled(AiOutlineUser)`
    ${ICON}
`;

export const IconSupport = styled(BiSupport)`
    ${ICON}
`;

export const Arrow = styled(IoIosArrowForward)`
    font-size: 15px;
    margin-top: -6px;
    margin-left: 80px;
`;
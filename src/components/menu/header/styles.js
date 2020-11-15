import styled from 'styled-components';
import { FaUserAstronaut, FaForumbee } from 'react-icons/fa';
import { Avatar } from '@material-ui/core';
import { AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io'

const ICON = `
    font-size: 14px;
    color: #fff;
`;

export const Body = styled.div`
    background-color: #262932;
    /* width: 100%; */
    height: 79px;
    display: flex;
    align-items: center;
    border-left: 1px solid #a9a9a914;
    padding: 0 10px;
`;

export const IconTeather = styled(FaUserAstronaut)``;

export const IconForum = styled(FaForumbee)``;

export const MarginRight = styled.span`
    padding-right: 13px;
`;

export const ImgProfile = styled(Avatar)`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

export const Block = styled.div`
    display: block;
`;

export const Name = styled.p`
    font-weight: 500;
    color: #ffffffb3;
    font-size: 14px;
    line-height: 1.5;
    margin-left: 9px;
    margin: 0 0 3px 5px;
    cursor: pointer;
`;

export const Type = styled.p`
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.7px;
    font-weight: 400;
    margin: 0 0 0 5px;
    cursor: pointer;
`;

export const Options = styled.div`
    background-color: #1d1e26;
    box-shadow: 0 0 14px #1d1e26;
    width: 160px;
    padding: 0 10px;
    position: absolute;
    right: 0;
    top: 85px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Flex = styled.div`
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #dcdcdc12;
    cursor: pointer;
`;

export const IconUser = styled(AiOutlineUser)`
    ${ICON}
`;

export const IconMessage = styled(AiOutlineMessage)`
    ${ICON}
`;

export const IconExit = styled(IoMdExit)`
    ${ICON}
`;

export const Text = styled.p`
    color: #fff;
    font-size: 14px;
    margin: 0 0 0 7px;
`;

export const Span = styled.span`
    display: flex;
`;
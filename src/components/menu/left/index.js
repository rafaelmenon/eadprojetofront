import React from 'react';
import { Body, Logo, Option, IconHome, Title, IconCourse, IconAccount, IconSupport } from './styles';

const LeftComponent = () => {
    return (
        <Body>
            <Logo>PHALCON EAD</Logo>
            <Option>
                <IconHome />
                <Title>Dashboard</Title>
            </Option>
            <Option>
                <IconCourse />
                <Title>Cursos</Title>
            </Option>
            <Option>
                <IconAccount />
                <Title>Minha conta</Title>
            </Option>
            <Option>
                <IconSupport />
                <Title>Suporte</Title>
            </Option>
        </Body>
    )
}

export default LeftComponent;
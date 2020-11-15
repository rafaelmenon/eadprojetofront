import React, { useState, useMemo } from 'react';
import Input from '../../components/input';
import Button from '../../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { signInRequest } from '../../store/modules/auth/actions'
import { useSnackbar } from 'notistack';
import { Main, Body, TextWelcome, SubWelcome, Spacing, TextForgot, TextAccount1, Color } from './styles';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const error = useSelector(state => state.auth.signedFailured);
    const dispatch = useDispatch();

    useMemo(() => {
        if (error) {
            enqueueSnackbar('Login e/ou senha inválidos', 
            { 
                variant: "error",
                preventDuplicate: true,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
            });
        }
    }, [error])

    const requestLogin = (ev) => {
        ev.preventDefault();

        dispatch(signInRequest(email, password))
    }

    return (
        <Main>
            <Body>
                <form onSubmit={requestLogin}>
                <TextWelcome>Seja bem vindo(a)!</TextWelcome>
                <SubWelcome>Faça login para continuar.</SubWelcome>
                <Input 
                    placeholder="Digite seu email" 
                    label="Email" 
                    type="email" 
                    required
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <Spacing />
                <Input 
                    placeholder="Digite sua senha" 
                    label="Senha" 
                    type="password" 
                    required
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <TextForgot>Esqueceu sua senha?</TextForgot>
                <Button 
                    text="Entrar"
                />
                <TextAccount1>Ainda não possui conta? <Color>Criar conta.</Color></TextAccount1>
                </form>
            </Body>
        </Main>
    )
}

export default Login;
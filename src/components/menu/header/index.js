import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import BtnAction from '../../btnAction';
import { useSelector, useDispatch } from 'react-redux';
import { Fade } from '@material-ui/core';
import { signOut } from '../../../store/modules/auth/actions';
import history from '../../../services/history';
import { 
    Body, 
    IconTeather, 
    IconForum, 
    MarginRight, 
    ImgProfile, 
    Name, 
    Type, 
    Block, 
    Options, 
    Flex,
    IconUser,
    Text,
    IconMessage,
    IconExit,
    Span
} from './styles';

const Header = () => {
    const [show, setShow] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <Body>
            <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                    <BtnAction>
                        <IconTeather /> Falar com Professor
                    </BtnAction>
                    <MarginRight />
                    <BtnAction color="#ef3768" background="#ef376838">
                        <IconForum /> Ir para o fórum
                    </BtnAction>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <Grid container justify="flex-end">
                        <Span onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
                            <ImgProfile variant="rounded" />
                            <Block>
                                <Name>{user && user.name ? user.name : null}</Name>
                                <Type>{user && user.admin === 1 ? "Admin" : "Estudante"}</Type>
                            </Block>
                            <Fade in={show}>
                            <Options>
                                <Flex onClick={() => history.push("/myaccount")}>
                                    <IconUser />
                                    <Text>Minha conta</Text>
                                </Flex>
                                <Flex>
                                    <IconMessage />
                                    <Text>Mensagens</Text>
                                </Flex>
                                <Flex onClick={() => dispatch(signOut())}>
                                    <IconExit />
                                    <Text>Sair</Text>
                                </Flex>
                            </Options>
                            </Fade>
                        </Span>
                    </Grid>
                </Grid>
            </Grid>
        </Body>
    )
}

export default Header;
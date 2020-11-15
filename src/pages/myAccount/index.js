import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import { Text, InfoText } from './styles';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import Input from '../../components/input';
import { StyledDropZone } from 'react-drop-zone';
import 'react-drop-zone/dist/styles.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '../../components/button';

const MyAccount = () => {
    const [editor, setEditor] = useState(EditorState.createEmpty());
    const user = useSelector(state => state.user);
    const [data, setData] = useState({
        name: user && user.name ? user.name : null,
        email: user && user.email ? user.email : null,
        phone: user && user.phone ? user.phone : null,
        city: user && user.city ? user.city : null,
    })

    useEffect(() => {
        console.log(editor)
    }, [editor])
    

    const uploadFile = (file) => {
        console.log(file)
    }

    const onEditorStateChange = (value) => {
        setEditor(value)
    }

    return (
        <>
            <Title title="Minha conta" />
            <Text>Olá {user && user.name && user.name} aqui você poderá trocar as informações de sua conta
            como nome, email, telefone, cidade e escolher uma foto para seu perfil. Porém é importante lembrar
            que as informações alteradas aqui deverão ser verdadeiras, pois utilizaremos esses dados para entrar
            em contato com você quando necessário.</Text>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Input 
                            label="Nome"
                            placeholder="Digite seu nome"
                            type="text"
                            required
                            value={data.name}
                            onChange={ev => setData({ ...data, name: ev.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Input 
                            label="Email"
                            placeholder="Digite seu email"
                            type="email"
                            required
                            value={data.email}
                            onChange={ev => setData({ ...data, email: ev.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Input 
                            label="Cidade"
                            placeholder="Digite sua cidade"
                            type="text"
                            required
                            value={data.city}
                            onChange={ev => setData({ ...data, city: ev.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Input 
                            label="Telefone"
                            placeholder="Digite seu telefone"
                            type="number"
                            required
                            value={data.phone}
                            onChange={ev => setData({ ...data, phone: ev.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <InfoText>Foto de perfil</InfoText>
                        <StyledDropZone 
                            style={{ width: '83%' }}
                            label='Para foto do perfil clique aqui!'
                            onDrop={uploadFile}
                            accept=".png, .jpg"
                        >
                            Clique aqui para enviar uma foto.
                        </StyledDropZone >
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        {/* <InfoText>Sobre você</InfoText>
                        <Editor
                            editorState={editor}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            placeholder="Fale um pouco sobre você..."
                            wrapperStyle={{ border: '1px solid #444040' }}
                            editorStyle={{ padding: '0 10px 10px 10px' }}
                            toolbarStyle={{ border: 'none' }}
                            localization={{
                                locale: 'pt',
                            }}

                            toolbar={{
                                options: ['inline', 'emoji'],
                            }}
                            onEditorStateChange={onEditorStateChange}
                        /> */}
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                        <Button text="Salvar" type="submit"/>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default MyAccount;
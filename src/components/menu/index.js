import React from 'react';
import { Grid } from '@material-ui/core';
import LeftComponent from './left';
import HeaderComponent from './header';
import ContentComponent from '../content';

const MenuComponent = ({ show, children }) => {
    return (
        <>
            {show &&
                <Grid container>
                    <Grid xs={12} md={2} lg={2}>
                        <LeftComponent />
                    </Grid>
                    <Grid xs={12} md={10} lg={10}>
                        <HeaderComponent />
                        <ContentComponent>
                            {children}
                        </ContentComponent>
                    </Grid>
                </Grid>
            }
            {!show &&
                <span>{children}</span>
            }
        </>
    )
}

export default MenuComponent;
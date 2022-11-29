// IMPLEMENTAÇÃO BÁSICA DE TEMAS USANDO O MATERIAL UI NO REACT

import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Button, Paper, Grid, Switch, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export default function BasicTextFields() {
    const [lightMode, setLightMode] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "#ffa600",
                paper: "#ffa600",
            },
            primary: {
                main: "#000000",
            },
            secondary: {
                main: "#fefefe"
            },
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: "light",
            background: {
                default: "rgb(255, 255, 255)",
                paper: "rgb(255, 255, 255)",
            },
            primary: {
                main: "rgb(255, 166, 0)",
            },
            secondary: {
                main: "rgb(225, 0, 255)"
            },
        },
    });


    return (

        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
            <Paper style={{ height: "100vh" }} sx={{ borderRadius: '0' }}>

                <Grid
                    container
                    direction="column"
                    alignItems="center"
                >
                    < Switch checked={lightMode} onChange={() => setLightMode(!lightMode)} />
                    <TextField
                        label="Email"
                        color="primary"
                    />
                    <TextField
                        label="Senha"
                        color="secondary"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                    >Login</Button>

                </Grid>

            </Paper >
        </ThemeProvider >
    );
}
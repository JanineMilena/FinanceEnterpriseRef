// IMPLEMENTAÇÃO BÁSICA DE TEMAS USANDO O MATERIAL UI NO REACT
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, CssBaseline, Grid, Switch, TextField, Button } from '@mui/material'

export default function BasicTextFields() {
    const [lightMode, setLightMode] = useState(false);
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "rgba(30, 27, 32, 1)",
                paper: "rgba(30, 27, 32, 1)",
            },
            primary: {
                main: "rgba(243, 68, 35, 1)",
            },
            secondary: {
                main: "rgba(235, 121, 252, 1)"
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
                main: "rgba(243, 68, 35, 1)",
            },
            secondary: {
                main: "rgba(235, 121, 252, 1)"
            },
        },
    });

    return (
        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 15 }}>
                    <Grid container direction="column" alignItems="center">
                        <Box component="img" sx={{ height: 60, width: 260 }} alt="The house from the offer." src="src/assets/logo.png" />
                        < Switch checked={lightMode} onChange={() => setLightMode(!lightMode)} />
                        <TextField label="Email" color="primary" />
                        <TextField label="Senha" color="secondary" />
                        <Button variant="contained" color="secondary">Login</Button>
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
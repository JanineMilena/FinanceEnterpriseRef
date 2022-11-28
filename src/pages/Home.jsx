// IMPLEMENTAÇÃO BÁSICA DE TEMAS USANDO O MATERIAL UI NO REACT

import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Button, Paper, Grid, Switch, TextField } from '@mui/material';

export default function BasicTextFields() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: "100vh" }} sx={{ borderRadius: '0' }}>

                <Grid
                    container
                    direction="column"
                    alignItems="center"
                >
                    < Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
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
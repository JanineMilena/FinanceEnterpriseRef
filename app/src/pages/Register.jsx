import React, {useState} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {Box, CssBaseline, Grid, Switch, TextField, Button} from '@mui/material'

export function Register() {
    const [lightMode, setLightMode] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "rgba(30, 27, 32, 1)",
                paper: "rgba(37, 37, 37, 1)",
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
                paper: "rgb(244, 244, 244)",
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
            <Box justifyContent="center" sx={{display: 'flex'}}>
                <CssBaseline />

                <Box component="main" sx={{bgcolor: 'background.paper', boxShadow: 5, p: 10, m: 20, borderRadius: 10}}>

                    < Switch checked={lightMode} onChange={() => setLightMode(!lightMode)} />

                    <Grid container direction="column" alignItems="center">
                        <Box component="img" sx={{height: 60, width: 260}} alt="logo" src="src/assets/logo.png" />
                        <TextField label="Nome completo" color="primary" sx={{m: 0.5}} />
                        <TextField label="Email" color="primary" sx={{m: 0.5}} />
                        <TextField label="Senha" color="primary" sx={{m: 0.5}} />
                        <Button variant="contained" color="primary" sx={{m: 1}}>Registrar</Button>

                    </Grid>
                </Box>

            </Box>
        </ThemeProvider>
    );
}
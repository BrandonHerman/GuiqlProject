import { createTheme } from "@material-ui/core/styles";
const theme = (mode) =>
    createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#4fa341',
            },
            secondary: {
                main: '#9441a3',
            },
        },
        typography: {
            button: {
                fontWeight: 100,
                fontSize: '1.2rem',
                lineHeight: 1.24,
                letterSpacing: '0.1em',
            },
            fontFamily: 'Montserrat',
            caption: {
                fontSize: '0.8rem',
                fontWeight: 100,
                lineHeight: 0.85,
            },
            overline: {
                fontWeight: 900,
            },
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            },
        },
        shape: {
            borderRadius: 4,
        },
    });

export default theme;
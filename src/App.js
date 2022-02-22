import {Button, createTheme, ThemeProvider} from "@mui/material";


const DEFAULT_THEME = createTheme({});


const App = () => {
    return (
        <ThemeProvider theme={DEFAULT_THEME}>
            <Button variant="contained">Hello World</Button>
        </ThemeProvider>
    );
};

export default App;


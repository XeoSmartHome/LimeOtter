import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import StoreProvider from "./Store/ReduxProvider";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";


const DEFAULT_THEME = createTheme({});


const App = () => {
    return (
        <StoreProvider>
            <ThemeProvider theme={DEFAULT_THEME}>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;


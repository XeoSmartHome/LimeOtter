import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import StoreProvider from "./Store/ReduxProvider";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import NavBar from "./Components/NavBar";
import ProductsPage from "./Pages/Products/ProductsPage";


const DEFAULT_THEME = createTheme({});


const App = () => {
    return (
        <StoreProvider>
            <ThemeProvider theme={DEFAULT_THEME}>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path={"/"} element={<ProductsPage/>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;


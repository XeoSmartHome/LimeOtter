import React from "react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import XeoWhiteLogo from "../assets/img/xeo_vectorial_logo_white.svg"

const NavBar = () => {

    const pages = ["Products", "Pricing", "Demo", "Team"];

    return (
        <AppBar position="sticky" sx={{height: 70, justifyContent: "center"}}>
            <Toolbar>
                <img src={XeoWhiteLogo} height={38} alt="XeoLogo"/>
                <Typography sx={{fontSize: 24, paddingLeft: 1}}>
                    XeoSmartHome
                </Typography>
                <Box sx={{flex: 1, display: {xs: "none", md: "flex"}}}>
                    {
                        pages.map((page) => (
                            <Button
                                color={"inherit"}
                                key={`page-${page}`}
                                onClick={() => {
                                }}
                            >
                                {page}
                            </Button>
                        ))
                    }
                </Box>
                <Box sx={{display: {xs: 'flex', md: 'none'}, paddingLeft: 1}}>
                    <p>
                        menu
                    </p>
                </Box>
            </Toolbar>
        </AppBar>
    )
};


export default NavBar;

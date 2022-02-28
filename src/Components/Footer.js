import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import {FacebookRounded, Instagram, YouTube} from "@mui/icons-material";

const SocialNetworks = () => {
    return (
        <Box sx={{justifyContent: "center", display: "flex"}}>
            <IconButton>
                <FacebookRounded/>
            </IconButton>
            <IconButton>
                <Instagram/>
            </IconButton>
            <IconButton>
                <YouTube/>
            </IconButton>
        </Box>
    );
};

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "lightgray"}}>
            <SocialNetworks/>
        </Box>
    );
};


export default Footer;

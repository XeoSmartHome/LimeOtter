import React from "react";
import Carousel from "react-material-ui-carousel";
import {Avatar, Box, CardMedia, Paper, Typography} from "@mui/material";
import CarouselImage1 from "../../assets/img/carousel_1.jpg"
import Phone from "../../Components/Phone";
import {BlueImg, GreenImg, RedImg} from "../../assets/img";
import {ArrowRight, NavigateBefore, NavigateNext} from "@mui/icons-material";


const CAROUSEL_ITEMS = [
    {
        backgroundImage: RedImg,
    },
    {
        backgroundImage: BlueImg,
    },
    {
        backgroundImage: GreenImg,
    }
];


const CarouselItem = ({backgroundImage}) => {
    return (
        <Paper>
            <CardMedia
                component="img"
                alt="photo"
                height={600}
                src={backgroundImage}
            />
        </Paper>
    );
};


const CarouselSection = () => {
    return (
        <Carousel
            autoPlay={true}
            swipe={true}
            stopAutoPlayOnHover={true}
            fullHeightHover={true}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            animation={"fade"}
            PrevIcon={<NavigateBefore/>}
            NextIcon={<NavigateNext/>}
        >
            {
                CAROUSEL_ITEMS.map((item) => <CarouselItem {...item}/>)
            }
        </Carousel>
    );
};


const TeamMember = ({name, photo}) => {
    return (
        <Box sx={{width: 200}}>
            <Avatar sx={{height: 200, width: 200}} src={photo}/>
            <Typography variant={"h6"} sx={{textAlign: "center", marginTop: 1}}>
                {name}
            </Typography>
        </Box>
    );
};


const TeamSection = () => {

    const team_members = [{
        name: "Claudiu Neamtu",
        description: "",
        photo: RedImg,
        position: "CEO",
        facebook: "/facebook"
    }, {
        name: "Claudiu Neamtu",
        description: "",
        photo: BlueImg,
        position: "CEO",
        facebook: "/facebook"
    }, {
        name: "Claudiu Neamtu",
        description: "",
        photo: GreenImg,
        position: "CEO",
        facebook: "/facebook"
    }];

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 4,
            marginBottom: 20
        }}>
            {team_members.map((member) => <TeamMember {...member} />)}
        </Box>
    );
};


const HomePage = () => {
    return (
        <div>
            <CarouselSection/>
            <TeamSection/>
            <Phone/>
        </div>
    )
};


export default HomePage;

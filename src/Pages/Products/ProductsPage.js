import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";


const ProductCard = () => {
    return (
        <Card sx={{maxWidth: 400, margin: 5, boxShadow: 5}}>
            <CardMedia
                component="img"
                alt="photo"
                height={200}
                image={"https://mui.com/static/images/cards/contemplative-reptile.jpg"}
            />
            <CardContent>
                <Typography
                    gutterBottom={true}
                    variant="h6"
                    component="div"
                >
                    Irrigation controller
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    Lorem ipsumasdkas dasbjd asodj asijdoai jsdij asdoikjasmdkaijdi saijasd aijioj doisajdaoi
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" >Share</Button>
                <Button size="small" >Learn more</Button>
            </CardActions>
        </Card>
    )
}


const ProductsPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};


export default ProductsPage;

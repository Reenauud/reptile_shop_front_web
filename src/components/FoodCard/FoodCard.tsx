import React from 'react';
import { Card,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button
 } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FoodForSale } from '../../shared/typeDefs';
import { addArticle } from '../../shared/Redux/orderSlice';

type FoodCardComponentProps = {
    food: FoodForSale;
}

const AnimalCard = ({ food }: FoodCardComponentProps) => {
    const dispatch = useDispatch();
    return (
        <Card sx={{height: 350, width: 300, mt: 4, mb: 4}}>
            <CardHeader
                title={food.foodCategory}
            />
            <CardMedia
                sx={{objectFit: "contain"}}
                component="img"
                height="100"
                width="100"
                image={`./assets/${food.foodPicture}`}
                alt={food.foodName}
            />
            <CardContent sx={{p: 2}}>
                <Typography>{food.foodName}</Typography>
                <Typography sx={{mt: 2, fontSize: 20, fontWeight: "bolder", textAlign:"right"}}>Prix : {food.foodPrice.toFixed(2)} €</Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "center"}}>
                <Button
                variant="contained"
                sx={{backgroundColor: "darkgreen"}}
                onClick={() => dispatch(addArticle({picture: food.foodPicture, name: food.foodName, quantity: 1, unitPrice: food.foodPrice}))}>Ajouter au panier</Button>
            </CardActions>
        </Card>
    )
}

export default AnimalCard;
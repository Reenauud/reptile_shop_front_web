import React from 'react';
import { Card, CardHeader, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AnimalForSale } from '../../shared/typeDefs';
import { addArticle } from '../../shared/Redux/orderSlice';

type AnimalCardComponentProps = {
    animal: AnimalForSale;
}

const AnimalCard = ({ animal }: AnimalCardComponentProps) => {
    const dispatch = useDispatch();
    return (
        <Card sx={{ height: 350, width: 300, mt: 4, mb: 4 }}>
            <CardHeader
                title={animal.name}
            />
            <CardMedia
                sx={{ objectFit: "cover" }}
                component="img"
                height="100"
                width="100"
                image={`./assets/${animal.animalPicture}`}
                alt="Python reticule"
            />
            <CardContent sx={{ p: 2 }}>
                <Typography>{animal.description}</Typography>
                <Typography sx={{ mt: 2, fontSize: 20, fontWeight: "bolder", textAlign: "right" }}>Prix : {animal.price.toFixed(2)} €</Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "darkgreen" }}
                    onClick={() => dispatch(addArticle({
                        picture: animal.animalPicture,
                        name: animal.name, quantity: 1, unitPrice: animal.price
                    }))}>Ajouter au panier</Button>
            </CardActions>
        </Card>
    )
}

export default AnimalCard;
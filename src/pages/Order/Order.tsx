import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, Typography, IconButton } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../shared/Redux/store';
import { increaseQuantity, removeOneArticle, removeWholeArticle } from '../../shared/Redux/orderSlice';
import './Order.css';

const Order = () => {
    const order = useSelector((state: RootState) => state.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Box sx={{p: "40px 80px"}}>
            <Typography variant="h3" align='center'>Votre panier en détail</Typography>
            <Divider sx={{m: 2}} />
            {order.cart.length > 0 ?
            <Box sx={{width: "80%", height: "auto", m: "auto"}}>
                <Stack spacing={2} sx={{mt: 2, position: "sticky", top: 0, backgroundColor: "#FAFAFA", zIndex: 5, height: "70px"}}>
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Typography>Image</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Typography>Article</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Typography>Quantité</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Typography>Prix unitaire</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Typography>Supprimer</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                <Divider variant="middle" />
                </Stack>
                {order.cart.map((product) => (
                    <Stack spacing={2} sx={{mt: 2}} key={product.name}>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
                                    <img src={`./assets/${product.picture}`} alt={product.name}  className="product-img" />
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
                                    <Typography>{product.name}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
                                    <IconButton
                                        sx={{backgroundColor: "darkgreen", height: "20px", width: "20px", mr: 1, color: "white"}}
                                        onClick={() => dispatch(removeOneArticle({ picture: product.picture, name: product.name, quantity: product.quantity, unitPrice: product.unitPrice }))}>
                                        <Remove />
                                    </IconButton>
                                    <Typography>{product.quantity}</Typography>
                                    <IconButton
                                        onClick={() => dispatch(increaseQuantity({ name: product.name }))}
                                        sx={{backgroundColor: "darkgreen", height: "20px", width: "20px", ml: 1, color: "white"}}
                                    >
                                        <Add />
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
                                    <Typography>{product.unitPrice.toFixed(2)} €</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
                                    <IconButton
                                    onClick={() => dispatch(removeWholeArticle({ name: product.name}))}>
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" sx={{m: 2}} />
                    </Stack>
                    ))}
                    <Box sx={{border: "2px solid darkgreen", borderRadius: "10px"}}>
                        <Typography align="center" sx={{m: 3, mr: 6, fontWeight: "bolder"}}>Total commande : {order.totalAmount.toFixed(2)} €</Typography>
                    </Box>   
            </Box>
            : 
            <Typography align="center" variant="h5">Votre panier est vide.</Typography>
        }
            <Stack spacing={4} sx={{width: "50%", m: "auto", border: "1px solid rgba(10, 10, 10, 0.2)", borderRadius: "10px", p: 5, mt: 4, mb: 4}}>
                <Typography>Nous mettons un point d'honneur à ce que nos services de livraison soient irréprochables.</Typography>
                <Typography>Dans le cas d'un achat de nourriture congelée, il est important que vous soyez présent à votre domicile le jour convenu lors de l'acceptation de la commande.</Typography>
                <Typography>Merci d'avoir choisi Reptiles Shop et à bientôt.</Typography>
            </Stack>
            
            <Stack sx={{display: "flex", justifyContent: "center", width: "300px", ml: "auto", mr: "auto"}}>
                <FormControlLabel control={<Checkbox />} label="J'accepte les C.G.U. et C.G.V." />
                <Button
                onClick={() => navigate('/checkout')}
                variant="contained"
                sx={{backgroundColor: "darkgreen"}}
                >Payer</Button>
            </Stack>
        </Box>
    )
}

export default Order;
import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { AnimalForSale } from '../../shared/typeDefs';
import { GET_ALL_ANIMALS } from '../../GraphQL/Queries';
import Loader from '../../components/Loader/Loader';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import { useQuery } from '@apollo/client';
import { RootState } from '../../shared/Redux/store';
import { useSelector } from 'react-redux';

const Reptiles = () => {
    const [animals, setAnimals] = useState<AnimalForSale[]>([]);
    const order = useSelector((state: RootState) => state.order);
useEffect(() => {
    console.log(order);
}, [order]);
    const { loading, error } = useQuery(GET_ALL_ANIMALS, {
        onCompleted: (data: any) => {
            setAnimals(data.getAllReptiles);
        }
    })
    if (loading) return <Loader />;
    if (error) return <Typography>{error.message}</Typography>
    return (
        <Box sx={{p: "40px 80px"}}>
            <Typography variant="h4">Nos meilleures ventes !</Typography>
            <Stack direction="row" spacing={3} sx={{display: "flex", alignItems: "center"}}>
                {animals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </Stack>
        </Box>
    )
}

export default Reptiles;
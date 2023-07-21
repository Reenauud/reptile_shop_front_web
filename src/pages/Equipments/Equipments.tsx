import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { EquipmentForSale } from '../../shared/typeDefs';
import { useQuery } from '@apollo/client';
import { GET_ALL_EQUIPMENTS } from '../../GraphQL/Queries';
import Loader from '../../components/Loader/Loader';
import EquipmentCard from '../../components/EquipmentCard/EquipmentCard';

const Equipments = () => {
    const [equipments, setEquipments] = useState<EquipmentForSale[]>([]);

    const { loading, error } = useQuery(GET_ALL_EQUIPMENTS, {
        onCompleted: (data: any) => {
            setEquipments(data.getAllEquipments);
        }
    })
    if (loading) return <Loader />;
    if (error) return <Typography>{error.message}</Typography>
    return (
        <Box sx={{p: "40px 80px"}}>
            <Typography variant="h4">Le bon matériel pour le bien-être de votre animal !</Typography>
            <Stack direction="row" spacing={3} sx={{display: "flex", alignItems: "center"}}>
                {equipments.map((equipment) => (
                    <EquipmentCard key={equipment.id} equipment={equipment} />
                ))}
            </Stack>
        </Box>
    )
}

export default Equipments;
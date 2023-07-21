import React, { useState } from 'react';
import { Box,
    Stack,
    Typography,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    FormControlLabel,
    Checkbox,
    Divider,
} from '@mui/material';
import { GET_FOOD_LIST } from '../../GraphQL/Queries';
import Loader from '../../components/Loader/Loader';
import { FoodForSale } from '../../shared/typeDefs';
import { useQuery } from '@apollo/client';
import FoodCard from '../../components/FoodCard/FoodCard';
import { Search } from '@mui/icons-material';

const Food = () => {
    const [foodList, setFoodList] = useState<FoodForSale[]>([]);
    const { loading, error } = useQuery(GET_FOOD_LIST, {
        onCompleted: (data: any) => {
            setFoodList(data.getFoodList);
        }
    })
    if (loading) return <Loader />;
    if (error) return <Typography>{error.message}</Typography>
    console.log(foodList)
    return (
        <Box sx={{p: "40px 80px"}}>
            <Typography variant="h4">De la nourriture pour vos reptiles ou pour la nourriture de vos reptiles !</Typography>
            <Stack direction="row" spacing={10} sx={{display: "flex", alignItems: "center", mt: 4, width: "80%", ml: "auto"}}>
                <Typography>Filtrer :</Typography>
                
                <FormControlLabel control={<Checkbox />} label="Congelée" />
                <FormControlLabel control={<Checkbox />} label="Vivante" />
                <FormControlLabel control={<Checkbox />} label="Pour proies" />
               
                <FormControl>
                    <InputLabel htmlFor="search">Rechercher</InputLabel>
                    <Input
                    id="search"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                    />
                </FormControl>
            </Stack>
            <Divider variant="middle" sx={{m: 3}} />
            <Stack direction="row" spacing={3} sx={{display: "flex", alignItems: "center"}}>
                {foodList.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </Stack>
        </Box>
    )
}

export default Food;
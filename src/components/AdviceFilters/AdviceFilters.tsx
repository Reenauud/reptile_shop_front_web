import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Category, Reptile } from '../../shared/typeDefs';

type AdviceFiltersComponentProps = {
    categories: Category[];
    selectedCategory: string;
    animals: Reptile[];
    selectedAnimal: string;
    handleChange: (e: any) => void;
    handleChangeAnimal: (e: any) => void;
}

const AdviceFilters = ({ categories, selectedCategory, animals, selectedAnimal, handleChange, handleChangeAnimal }: AdviceFiltersComponentProps) => {
    return (
        <Box sx={{p: 3, minHeight: "calc(100vh - 600px)", m: "auto"}}>
            
            <Stack spacing={4} sx={{display: "flex", alignItems: "center"}}>
                <FormControl sx={{ m: 2, width: 200 }}>
                    <InputLabel id="category-select-label">Famille</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={selectedCategory}
                        label="category"
                        onChange={handleChange}
                    >
                    {categories.map((category) => (
                        <MenuItem key={category.id} value={category.categoryName}>{category.categoryName}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                {selectedCategory && 
                <FormControl sx={{ m: 2, width: 200 }}>
                    <InputLabel id="animal-select-label">Animal</InputLabel>
                    <Select
                        labelId="animal-select-label"
                        id="animal-select"
                        value={selectedAnimal}
                        label="animal"
                        onChange={handleChangeAnimal}
                    >
                    {animals.map((animal) => (
                        <MenuItem key={animal.id} value={animal.name}>{animal.name}</MenuItem>
                    ))}
                    </Select>
                </FormControl>}
            </Stack>
        </Box>
    )
}

export default AdviceFilters;
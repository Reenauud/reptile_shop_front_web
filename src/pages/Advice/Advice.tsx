import React, { useState, useEffect } from 'react';
import { GET_ALL_CATEGORIES, GET_ANIMALS_BY_CATEGORY, GET_ANIMAL_UPKEEP_DETAILS } from '../../GraphQL/Queries';
import { Box, Typography } from '@mui/material';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Category, Reptile, AnimalInfos } from '../../shared/typeDefs';
import AdviceFilters from '../../components/AdviceFilters/AdviceFilters';
import AdviceCard from '../../components/AdviceCard/AdviceCard';

const Advice = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [animals, setAnimals] = useState<Reptile[]>([]);
    const [selectedAnimal, setSelectedAnimal] = useState<string>('');
    const [animalInfos, setAnimalInfos] = useState<AnimalInfos>();

    useEffect(() => {
        if (selectedAnimal !== '') {
            getAnimalUpkeepDetails();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAnimal]);  

    const [findAnimals, { loading: animalsLoading, error: animalsError }] = useLazyQuery(GET_ANIMALS_BY_CATEGORY, {
        variables: {
            categoryName: selectedCategory,
        },
        onCompleted: (data) => {
            setAnimals([...data.getAnimalsByCategory]);
        }
    })

    const [getAnimalUpkeepDetails, { loading: animalUpkeepDetailsLoading, error: animalUpkeepDetailsError }] = useLazyQuery(GET_ANIMAL_UPKEEP_DETAILS, {
        variables: {
            animal: selectedAnimal ,
        },
        onCompleted: (data) => {
            setAnimalInfos(data.getUpkeepByAnimal);
        }
    })

    const { loading, error } = useQuery(GET_ALL_CATEGORIES, {
        onCompleted: (data) => {
            setCategories([...data.getAllCategories]);
        }
    })
    if (error) return <Typography>{error.message}</Typography>
    if (animalsError) return <Typography>{animalsError.message}</Typography>
    if (animalUpkeepDetailsError) return <Typography>{animalUpkeepDetailsError.message}</Typography>  

    const handleChange = (e: any) => {
        setSelectedCategory(e.target.value);
        findAnimals(e.target.value);
    }

    const handleChangeAnimal = (e: any) => {
        setSelectedAnimal(e.target.value);
    }

    return (
        <Box sx={{p: 3, minHeight: "calc(100vh - 600px)", display: "grid", gridTemplateColumns: "20% 80%"}}>
            <Typography variant="h4" sx={{gridColumn: "span 2"}}>Retrouvez nos conseils téléchargeables pour vos animaux favoris!</Typography>
            <Box>
                <AdviceFilters
                categories={categories}
                selectedCategory={selectedCategory}
                animals={animals}
                selectedAnimal={selectedAnimal}
                handleChange={handleChange}
                handleChangeAnimal={handleChangeAnimal}
                />
            </Box>
            {animalInfos &&
                <AdviceCard 
                animalInfos={animalInfos}
                />
            }
        </Box>
    )
}

export default Advice;
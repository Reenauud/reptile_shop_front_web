import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import NewBatchCarousel from '../../components/NewBatchCarousel/NewBatchCarousel';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/Redux/store';

const Home = () => {
    const order = useSelector((state: RootState) => state.order);
    console.log(order);
    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Stack
            direction="row"
            m={"auto"}>
                <Typography sx={{fontSize: 30}}>Nos derniers arrivages !</Typography>
            </Stack>
            <NewBatchCarousel />
        </Box>
    )
}

export default Home;

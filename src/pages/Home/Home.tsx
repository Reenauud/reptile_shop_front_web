import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import NewBatchCarousel from '../../components/NewBatchCarousel/NewBatchCarousel';

const Home = () => {
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

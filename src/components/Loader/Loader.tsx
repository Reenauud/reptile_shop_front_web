import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = () => {
    return (
        <Box sx={{width: 300, height: 100}}>
            <CircularProgress />
            <Typography>Un insssstant, ssss'il vous plaît...</Typography>
        </Box>
    )
}

export default Loader;
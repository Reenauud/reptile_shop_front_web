import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from '@mui/material';
// core version + navigation, pagination modules:
import { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './NewBatchCarousel.css';

const NewBatchCarousel = () => {
    return (
       <>
       <Swiper navigation={true} modules={[Navigation]} className="swiper" loop={true}>
        <SwiperSlide>
            <img src="./assets/pogona.jpg" alt="Agame barbu" />
            <Box sx={{position: "absolute", bottom: "2%", left: "2%", backgroundColor: "var(--slides-background)", height: "70px", width: "auto", borderRadius: "20px", p: 5, pb: 8}}>
                <Typography sx={{color: "darkgreen", fontSize: 30}}>Agame barbu</Typography>
                <Typography sx={{color: "darkgreen", fontSize: 30, fontStyle: "italic"}}>Pogona Vitticeps</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./assets/python-reticule.jpg" alt="Python réticulé" />
            <Box sx={{position: "absolute", bottom: "2%", left: "2%", backgroundColor: "var(--slides-background)", height: "70px", width: "auto", borderRadius: "20px", p: 5, pb: 8}}>
                <Typography sx={{color: "darkgreen", fontSize: 30}}>Python réticulé</Typography>
                <Typography sx={{color: "darkgreen", fontSize: 30, fontStyle: "italic"}}>Malayopython reticulatus</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./assets/tortue dhermann.jpg" alt="Tortue d'Hermann" />
            <Box sx={{position: "absolute", bottom: "2%", left: "2%", backgroundColor: "var(--slides-background)", height: "70px", width: "auto", borderRadius: "20px", p: 5, pb: 8}}>
                <Typography sx={{color: "darkgreen", fontSize: 30}}>Tortue d'Hermann</Typography>
                <Typography sx={{color: "darkgreen", fontSize: 30, fontStyle: "italic"}}>Testudo hermanni</Typography>
            </Box>
        </SwiperSlide>
      </Swiper></>
    )
};

export default NewBatchCarousel;
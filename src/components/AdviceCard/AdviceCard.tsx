import React from 'react';
import { AnimalInfos } from '../../shared/typeDefs';
import { Box, Card, CardContent, Typography, Stack, Icon, Avatar } from '@mui/material';
import "./AdviceCard.css";
import DifficultyGauge from '../DifficultyGauge/DifficultyGauge';
import { Brightness7, Opacity, LightMode, Nightlight } from '@mui/icons-material';

type AdviceCardComponentProps = {
    animalInfos: AnimalInfos;
}

const AdviceCard = ({ animalInfos }: AdviceCardComponentProps) => {
    console.log(animalInfos);
    return (
        <Card sx={{ width: 900, minHeight: 600, margin: "auto", mt: 4 }}>
            <Box sx={{position: "relative", height: 400, width: "100%"}}>
                <Box sx={{width: 400,
                    height: 400,
                    background: "lightgreen",
                    borderRadius: "50%",
                    position: "absolute", 
                    left: "4%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}
                >
                    <Avatar src={`./assets/${animalInfos.animalPicture}`} alt={animalInfos.name} className='animal-display'/>
                </Box>
                <Box sx={{height: 200, marginLeft: "calc(200px + 4%)", backgroundColor: "lightgreen"}}>
                    <Typography sx={{mr: 2}} variant="h3" align="right">{animalInfos.name}</Typography>
                    <Typography sx={{fontStyle: "italic", mr: 2}} variant="subtitle1" align="right">{animalInfos.scientificName}</Typography>
                    <Typography sx={{mt: 5, mr: 2}} align="right">Origine : {animalInfos.upkeep.location}</Typography>
                </Box>
                <Box sx={{height: 200, display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{height: 200, width: "calc(200px + 4%)", backgroundColor: "lightgreen"}}></Box>
                    <Box>
                        <Stack direction="row" sx={{display: "flex", alignItems: "center", ml: "180px"}}>
                            <Typography sx={{ mr: 4 }}>Entretien </Typography>
                            <DifficultyGauge difficulty={animalInfos.upkeep.difficulty} />
                        </Stack>
                        <Stack spacing={1} sx={{ml: "180px", display: "flex", justifyContent: "center"}}>
                            <Typography>
                                <Icon sx={{mr: 4}}>
                                    <Brightness7 />
                                </Icon>
                                 {animalInfos.upkeep.dayCycle}
                            </Typography>
                            <Typography>
                                <Icon sx={{mr: 4}}>
                                    <Opacity />
                                </Icon>
                                 {animalInfos.upkeep.hygrometry}
                            </Typography>
                            <Stack direction="row" spacing={3} sx={{display: "flex", alignItems: "center"}}>
                                <Typography>
                                    <Icon sx={{mr: 4}}>
                                        <LightMode />
                                    </Icon>
                                      {animalInfos.upkeep.dayTemperature}
                                </Typography>
                                <Typography>
                                    <Icon sx={{mr: 4}}>
                                        <Nightlight />
                                    </Icon>
                                      {animalInfos.upkeep.nightTemperature}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Box>
                
            
            <CardContent>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    Régime alimentaire
                </Typography>
                <Typography sx={{ml: 2}}>
                    {animalInfos.upkeep.eatingPlan}
                </Typography>
                <Typography sx={{mt: 4}} variant="h5" color="text.secondary" gutterBottom>
                    Conseils d'entretien
                </Typography>
                <Typography sx={{ml: 2}}>
                    {animalInfos.upkeep.upkeepInformations}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AdviceCard;
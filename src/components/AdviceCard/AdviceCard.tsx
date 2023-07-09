import React from 'react';
import { AnimalInfos } from '../../shared/typeDefs';
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import "./AdviceCard.css";
import DifficultyGauge from '../DifficultyGauge/DifficultyGauge';

type AdviceCardComponentProps = {
    animalInfos: AnimalInfos;
}

const AdviceCard = ({ animalInfos }: AdviceCardComponentProps) => {
    console.log(animalInfos);
    return (
        <Card sx={{ minWidth: 1000, minHeight: 600, margin: "auto" }}>
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
                    <img src="./assets/python-reticule.jpg" alt="Python réticulé" className='animal-display'/>
                </Box>
                <Box sx={{height: 200, marginLeft: "calc(200px + 4%)", backgroundColor: "lightgreen"}}>
                    <Typography sx={{mr: 2}} variant="h3" align="right">{animalInfos.name}</Typography>
                    <Typography sx={{fontStyle: "italic", mr: 2}} variant="subtitle1" align="right">{animalInfos.scientificName}</Typography>
                    <Typography sx={{mt: 5, mr: 2}} align="right">Origine : {animalInfos.upkeep.location}</Typography>
                </Box>
                <Box sx={{height: 200, display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{height: 200, width: "calc(200px + 4%)", backgroundColor: "lightgreen"}}></Box>
                    <Box>
                        <DifficultyGauge difficulty={animalInfos.upkeep.difficulty} />
                    </Box>
                </Box>
            </Box>
                
            
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default AdviceCard;
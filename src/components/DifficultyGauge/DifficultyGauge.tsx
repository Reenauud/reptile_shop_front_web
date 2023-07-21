import React from 'react';
import { Box, Typography } from '@mui/material';

enum RaiseRate {
    LOW = "Facile",
    AVG = "Moyen",
    HIGH = "Difficile",
}
type DifficultyGaugeComponentProps = {
    difficulty: string;
}

const DifficultyGauge = ({ difficulty }: DifficultyGaugeComponentProps) => {

    const gaugeColor = (word: string) => {
        let color = "white";
        switch (word) {
            case RaiseRate.LOW:
                color = "green";
                break;
            case RaiseRate.AVG:
                color = "yellow";
                break;
            case RaiseRate.HIGH:
                color = "orange";
                break;
            default:
                color = "white";
                break;
        }
        return color;
    }

    const textPosition = (word: string) => {
        let position = 1;
        switch (word) {
            case RaiseRate.LOW:
                position = 1;
                break;
            case RaiseRate.AVG:
                position = 2;
                break;
            case RaiseRate.HIGH:
                position = 3;
                break;
            default:
                position = 1;
                break;
        }
        return position;
    }

    return (
        <Box sx={{display: "grid", gridTemplateColumns: "33% 33% 33%", gridTemplateRows: "50% 50%", width: 300, height: 100, m: "auto"}}>
            <Typography sx={{gridColumn: textPosition(difficulty), m: "auto"}}>{difficulty}</Typography>
            <Box sx={{width: 270, height: 20, borderRadius: 20, gridRow: "2", span: "3", background: gaugeColor(difficulty) }}>

            </Box>
        </Box>
    )
};

export default DifficultyGauge;
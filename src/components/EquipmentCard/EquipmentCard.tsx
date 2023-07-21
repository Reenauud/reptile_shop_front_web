import React, { useState } from 'react';
import { Card,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    IconButton,
    IconButtonProps,
    styled,
    Collapse } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { EquipmentForSale } from '../../shared/typeDefs';
import { addArticle } from '../../shared/Redux/orderSlice';

type EquipmentCardComponentProps = {
    equipment: EquipmentForSale;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMoreComponent = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const EquipmentCard = ({ equipment }: EquipmentCardComponentProps) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{height: "auto", width: 300, mt: 4, mb: 4}}>
            <CardHeader
                title={equipment.equipmentName}
            />
            <CardMedia
                sx={{objectFit: "contain"}}
                component="img"
                height="100"
                width="100"
                image={`./assets/${equipment.equipmentPicture}`}
                alt={equipment.equipmentName}
            />
            <CardContent sx={{p: 2}}>
                <Typography>{equipment.equipmentDetails}</Typography>
                <CardActions>
                    <ExpandMoreComponent
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMore />
                    </ExpandMoreComponent>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>{equipment.equipmentDescription}</Typography>
                    </CardContent>
                </Collapse>
                <Typography sx={{mt: 2, fontSize: 20, fontWeight: "bolder", textAlign:"right"}}>Prix : {equipment.equipmentPrice.toFixed(2)} €</Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "center"}}>
                <Button
                sx={{backgroundColor: "darkgreen"}}
                variant="contained"
                onClick={() => dispatch(addArticle({picture: equipment.equipmentPicture, name: equipment.equipmentName, quantity: 1, unitPrice: equipment.equipmentPrice}))}>Ajouter au panier</Button>
            </CardActions>
        </Card>
    )
}

export default EquipmentCard;
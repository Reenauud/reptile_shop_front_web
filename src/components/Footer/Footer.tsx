import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
                <Grid item xs={4}>
                    <Typography>Qui sommes-nous?</Typography>
                </Grid>
                <Grid item xs={2} /> 
                <Grid item xs={6}>
                    <Typography>Nous contacter</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>Politique de confidentialité</Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2} sx={{display: "flex", alignItems: "center"}}>
                        <img src="./assets/social-media/facebook.png" alt="icône facebook" />
                        <img src="./assets/social-media/instagram.png" alt="icône instagram" />
                        <img src="./assets/social-media/twitter.png" alt="icône twitter" />
                        <img src="./assets/social-media/linkedin.png" alt="icône linkedin" />
                    </Stack>
                </Grid>
            </Grid>
            <Divider variant="middle" sx={{backgroundColor: "white", m: 3}} />
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3} sx={{textAlign: "center"}}>
                <Grid item xs={3} />
                <Grid item xs={2}>
                    <Typography>C.G.U.</Typography>
                </Grid>
                <Divider flexItem orientation='vertical' sx={{backgroundColor: "white", height: 20, mt: "auto"}} />
                <Grid item xs={2}>
                    <Typography>C.G.V.</Typography>
                </Grid>
                <Divider flexItem orientation='vertical' sx={{backgroundColor: "white", height: 20, mt: "auto"}} />
                <Grid item xs={2}>
                    <Typography>A propos des cookies</Typography>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </footer>
    )
};

export default Footer;
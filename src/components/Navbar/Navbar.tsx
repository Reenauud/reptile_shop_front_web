import React from 'react';
import { navitems } from '../../shared/navitems';
import { Link } from 'react-router-dom';
import { Box, Divider, FormControl, IconButton, Input, InputAdornment, InputLabel, Stack, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

const Navbar = () => {
    return (
        <Box sx={{display: "flex", boxShadow: 2, position: "sticky"}}>
            <Stack
            direction="row"
            spacing={10}
            alignItems={"center"}
            margin={"auto"}
            divider={<Divider orientation="vertical" flexItem />}
            >
                {navitems.map((item) => (
                    <Link
                    key={item.id}
                    style={{textDecoration: "none", color: "darkgreen"}}
                    to={item.path}>
                        <Typography>
                            {item.page}
                        </Typography>
                    </Link>
                ))}
                <FormControl>
                    <InputLabel htmlFor="search">Rechercher</InputLabel>
                    <Input
                    id="search"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                    />
                </FormControl>
            </Stack>
        </Box>
    )
}

export default Navbar;
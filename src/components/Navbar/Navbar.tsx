import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navitems } from '../../shared/navitems';
import { Link } from 'react-router-dom';
import { Badge, Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { Person, ShoppingCart } from '@mui/icons-material';
import { AuthContext } from '../../shared/Contexts/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/Redux/store';


const Navbar = () => {
    const [numberOfArticles, setNumberOfArticles] = useState<number>(0);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const order = useSelector((state: RootState) => state.order);

    useEffect(() => {
        const getNumberOfArticles = () => {
            const numberInCart = order.cart.reduce((acc, curr) => acc += curr.quantity, 0);
            setNumberOfArticles(numberInCart);
        }
        getNumberOfArticles();
    }, [order]);

    return (
        <Box sx={{display: "flex", boxShadow: 2, position: "sticky"}}>
            <Stack
            direction="row"
            spacing={15}
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
                <Stack direction="row" spacing={4} sx={{display: "flex", alignItems: "center"}}>
                    {user?.id ? <Typography>Connecté</Typography>
                    :
                    <IconButton onClick={() => navigate("/auth/login")}>
                        <Person sx={{color: "darkgreen"}} />
                    </IconButton>
                    }
                    <Badge badgeContent={numberOfArticles} color="warning">
                        <IconButton onClick={() => navigate("/final-order")}>
                            <ShoppingCart sx={{color: "darkgreen", position: "relative"}} />
                        </IconButton>
                    </Badge>

                </Stack>
                
            </Stack>
        </Box>
    )
}

export default Navbar;
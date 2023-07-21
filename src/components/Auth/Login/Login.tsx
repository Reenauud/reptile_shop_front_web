import { useState, useContext } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
//import { isEmailInValid } from '../../helpers';
import { AuthContext } from '../../../shared/Contexts/AuthContext';

interface LoginData {
  email: string
  password: string
}

export default function Login() {
  const { login } = useContext(AuthContext);
  const [state, setState] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(state.email, state.password);
  };

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 400,
        width: 300,
        m: "auto"
      }}
    >
      <TextField
        required
        id="outlined-required"
        label="Adresse mail"
        placeholder="pierre.durand@gmail.com"
        InputLabelProps={{
          shrink: true,
        }}
        name="email"
        //error={isEmailInValid(state.email)}
        //helperText={isEmailInValid(state.email) ? 'Adresse mail invalide' : ''}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        required
        id="outlined-password-input"
        label="Mot de passe"
        type="password"
        autoComplete="current-password"
        InputLabelProps={{
          shrink: true,
        }}
        name="password"
        onChange={(e) => handleChange(e)}
      />
      <Button
        sx={{backgroundColor: "darkgreen"}}
        variant="contained"
        onClick={(e) => handleSubmit(e)}
      >
        Connexion
      </Button>
      <Typography>Pas encore enregistré?</Typography>
      <Link to="/auth/register">Créer un compte</Link>
    </Box>
  );
}
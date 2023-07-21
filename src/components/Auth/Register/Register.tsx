import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, CircularProgress, Typography } from '@mui/material';
import { CREATE_ACCOUNT } from '../../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
//import { isEmailInValid } from '../../helpers';

interface FormData {
  email: string
  password: string
}

export default function Register() {
  const [state, setState] = useState<FormData>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const [signUp, { loading, error }] = useMutation(CREATE_ACCOUNT, {
    variables: {
        email: state.email,
        password: state.password,
    },
    onCompleted: () => {
      navigate('/auth/login');
    },
  });
  if (loading) return <CircularProgress />;
  if (error) {
    return (
      <Typography>
        Error !
      </Typography>
    );
  }

  const handleChange = (e: any) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signUp();
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
        id="outlined-required-2"
        label="Adresse mail"
        placeholder="pierre.durand@gmail.com"
        InputLabelProps={{
          shrink: true,
        }}
        name="email"
        //error={isEmailInValid(state.email)}
        //helperText={isEmailInValid(state.email) ? 'Adresse mail invalide' : ''}
        onChange={handleChange}
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
        onChange={handleChange}
      />
      <Button
        sx={{backgroundColor: "darkgreen"}}
        variant="contained"
        onClick={(e) => handleSubmit(e)}
      >
        Valider
      </Button>
    </Box>
  );
}
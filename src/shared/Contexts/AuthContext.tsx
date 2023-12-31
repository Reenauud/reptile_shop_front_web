import React, { useReducer, createContext, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Loader from '../../components/Loader/Loader';
import { AuthContextType } from '../typeDefs';
import { GET_TOKEN, VERIFY_TOKEN } from '../../GraphQL/Mutations';

const initialState = {
  user: null,
};

const token = localStorage.getItem('token');

const AuthContext = createContext<AuthContextType>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (userData: any) => {},
  logout: () => {},
});

function authReducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [load, setLoad] = React.useState(true);
  const navigate = useNavigate();
  const [loadToken, { loading, error }] = useMutation(GET_TOKEN, {
    onCompleted: (data) => {
      if (data.getToken) {
        localStorage.setItem('token', data.getToken);
        const decodedToken: any = jwt_decode(data.getToken);
        dispatch({
          type: 'LOGIN',
          payload: { email: decodedToken.email, id: decodedToken.id },
        });
        navigate('/');
      }
    },
  });

  const [verifyToken] = useMutation(VERIFY_TOKEN, {
    onCompleted: (data) => {
      if (data.verifyToken) {
        dispatch({
          type: 'LOGIN',
          payload: { email: data.verifyToken.email, id: data.verifyToken.id },
        });
        setLoad(false);
      }
    },
    onError: () => {
      localStorage.removeItem('token');
      setLoad(false);
    },
  });

  const login = async (email: string, password: string) => {
    await loadToken({ variables: { email, password } });
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    (async () => {
      if (token) {
        await verifyToken({ variables: { token } });
      } else {
        setLoad(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {!load && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
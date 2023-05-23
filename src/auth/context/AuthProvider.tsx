import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { HttpClient } from '../../api/HttClient';
import jwt_decode from 'jwt-decode';

import { Auth, JWTDecoded, User } from '../../interfaces/Auth';
import { types } from '../types/types';



const init  = () : any => {
  const userJson = localStorage.getItem('user');
  const user = userJson !== null ?  JSON.parse(userJson) : undefined;
  return {
    logged: !!user,
    user: user,
  }
}


export const AuthProvider = ({ children } : any) => {
    
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const login = async ( email: string = '', password: string = '') : Promise<void> => {
    const { data } = await HttpClient.post<Auth>('login', {
      email,
      password
    });
  
    const decoded: JWTDecoded = jwt_decode(data.token);
    const user: User = {
      name: decoded.name,
      last_name : decoded.last_name,
      user_rol: decoded.user_rol
    }

    const action = { type: types.login, payload: user }
    localStorage.setItem('user', JSON.stringify( user ) );
    localStorage.setItem('token', data.token);
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    const action = { type: types.logout };
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
        { children }
    </AuthContext.Provider>
  );
}

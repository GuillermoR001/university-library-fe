import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children } : any ) => {

    const { logged } = useContext<any>( AuthContext );
    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? children
        : <Navigate to="/" />
}

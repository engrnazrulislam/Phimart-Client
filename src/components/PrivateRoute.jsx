import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, errorMsg} = useAuthContext();
    if (!errorMsg){
        if (user === null) return <p>Loading...</p>;
    }
    return user ? children: <Navigate to="/login"></Navigate>
};

export default PrivateRoute;
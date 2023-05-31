/* eslint-disable react/prop-types */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Layout/ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    
    if(loading){
        return <div className='text-center'>
        <h1>Loading.....</h1>
    </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
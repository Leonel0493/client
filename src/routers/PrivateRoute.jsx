import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../Auth/useAuth';

export default function PrivateRoute({hasRole: rol, ...rest}) {
    const { user } = useAuth();

    if(rol && user?.rol !== rol)
        return <Redirect to='/projects' />
    
    if(!user)
        return <Redirect to='/login' />
    
    return (
        <Route {...rest} />
    )
}

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../Auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({hasRole: role, ...rest}) {
    const { hasRole, isLogged } = useAuth();

    if(role && !hasRole(role))
        return <Redirect to={routes.home} />
    
    if(!isLogged())
        return <Redirect to={routes.login} />
    
    return (
        <Route {...rest} />
    )
}

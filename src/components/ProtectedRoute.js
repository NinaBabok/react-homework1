import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const ProtectedRoute = (
{
    component: Component,
    role,
    to,
    location,
    ...rest
}) => {
    const { isLoggedIn, isAdmin } = useContext(AuthContext)

    return <Route location={location}
        render={props => (role === 'isAdmin' && isAdmin) || (role === 'isLoggedIn' && isLoggedIn) || (role === 'isAnonymous' && !isLoggedIn)
            ? <Component {...rest} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
    />;
}
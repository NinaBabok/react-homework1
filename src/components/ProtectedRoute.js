import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const ProtectedRoute = (
    {
    component: Component,
    isAdmin,
    isLoggedIn,
    role,
    to,
    location,
    ...rest
}
) => <Route location={location}
        render={props => (role === 'isAdmin' && isAdmin) || (role === 'isLoggedIn' && isLoggedIn)
            ? <Component {...rest}/>
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
    />;
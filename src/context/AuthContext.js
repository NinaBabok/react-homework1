import React, { createContext, useState } from 'react';

const AuthContext = createContext();



const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (authToken, isAdmin)  => {
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('isAdmin', isAdmin);
        setIsLoggedIn(true);
        setIsAdmin(isAdmin);
    }

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('isAdmin');
        setIsLoggedIn(false);
        setIsAdmin(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }
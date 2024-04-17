import React, {createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'my-jwt';
export const API_URL = 'h';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const login = () => {
        setUserToken('test');
        setIsLoading(false);
    }

    const logout = () => {
        setUserToken(null);
        setIsLoading(false);
    }
    return (
        <AuthContext.Provider value = {{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}
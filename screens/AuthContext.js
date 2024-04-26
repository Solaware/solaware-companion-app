import React, {createContext, useState, useContext, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config';

export const AuthContext = createContext();

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            console.log('got user: ', user);
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsub;
    }, [])

    return { user }
}
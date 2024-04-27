import React, {createContext, useState, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config';

import { ActivityIndicator } from 'react-native';

export const AuthContext = createContext();

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [init, setInit] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
                console.log('got user: ', user);
            } else {
                setUser(null);
            }
            setInit(true);
        });
        return unsub;
    }, [])

    return { user, init }
}
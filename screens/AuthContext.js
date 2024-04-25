import React, {createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';
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

// export const AuthProvider = ({children}) => {

//     const [isLoading, setIsLoading] = useState(true);
//     const [userToken, setUserToken] = useState(null);
//     const [userInfo, setUserInfo] = useState(null);

//     const login = (username, password) => {
//         setIsLoading(true);
//         axios.post(`${BASE_URL}/token`, {
//             username,
//             password
//         })
//         .then(response => {
//             console.log(response.data);
//             let userInfo = response.data;
//             setUserInfo(userInfo);
//             setUserToken(userInfo.data.token);

//             AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//             AsyncStorage.setItem('userToken', userInfo.data.token);

//             console.log(userInfo.data.token);
//         })
//         .catch(e => {
//             console.log(`Login error ${e}`);
//         });
//         setIsLoading(false);
//     };

//     const logout = () => {
//         setIsLoading(true);
//         setUserToken(null);
//         AsyncStorage.removeItem('userInfo');
//         AsyncStorage.removeItem('userToken');
//         setIsLoading(false);
//     };

//     const isLoggedIn = async() => {
//         try { 
//             setIsLoading(true);
//             let userInfo = await AsyncStorage.getItem('userInfo');
//             let userToken = await AsyncStorage.getItem('userToken');
//             userInfo = JSON.parse(userInfo);

//             if ( userInfo ) {
//                 setUserToken(userToken);
//                 setUserInfo(userInfo);
//             }
//             setIsLoading(false);
//         } catch (e) {
//             console.log(`isLoggedIn error ${e}`)
//         }
//     }

//     useEffect(() => {
//         isLoggedIn();
//     }, [])

//     return (
//         <AuthContext.Provider value = {{login, logout, isLoading, userToken, userInfo}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
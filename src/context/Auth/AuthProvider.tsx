import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../services/firebase';
import { AuthContext, AuthContextType } from './AuthContext';

export function AuthProvider({ children }: { children: JSX.Element }) {
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        setUser(
            JSON.parse(
                sessionStorage.getItem('firebase:authUser:AIzaSyCu2DosavXUDAnpqnwUV8czymfYtLk155Q:[DEFAULT]') ||
                JSON.stringify('')
            )
        );
    }, []);

    function login() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const contextValue: AuthContextType = {
        user,
        login
    };

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>;
}
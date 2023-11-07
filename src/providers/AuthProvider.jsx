import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe()
        }
    }, [])

    const SignUp = (name, email) => {
        return createUserWithEmailAndPassword(auth, name, email);
    }

    const LogOut = () => {
        return signOut(auth);
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const AuthInfo = {
        SignUp,
        user,
        loading,
        LogOut,
        SignIn
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;
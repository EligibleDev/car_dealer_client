import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google auth
    const handleGoogleAuth = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //creating user
    const handleCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //user login
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //update profile
    const handleUpdateProfile = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img,
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //user logout
    const handleLogout = () => {
        return signOut(auth);
    };

    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unSubscribe();
    }, [user]);

    const authentications = {
        handleGoogleAuth,
        handleCreateUser,
        handleLogin,
        handleUpdateProfile,
        handleLogout,
        user,
        loading,
    };

    return (
        <AuthContext.Provider value={authentications}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;

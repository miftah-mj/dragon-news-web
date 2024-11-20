import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default AuthProvider;

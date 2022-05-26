import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const UserContext = createContext({
    user: null,
    setUser: () => { },
    loading: false,
    signIn: () => { },
    signOut: () => { },
    registerUser: () => { },
    loginUser: () => { },
    logoutUser: () => { },
    error: null,
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");
    console.log("user: ", user);
    console.log("error: ", error);
    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            user ? setUser(user) : setUser(null)
            setError("")
            setLoading(false)
        })
        return () => unsubscribe
    }, [])

    const registerUser = (email, name, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setLoading(false);
                        setUser(auth.currentUser);
                    })
                    .catch((err) => {
                        setLoading(false);
                        setError("Error while updating profile");
                    })
            }).then(res => console.log(res))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setLoading(false);
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }

    const logoutUser = () => {
        console.log("logoutUser");
        signOut(auth)
    }


    return (
        <UserContext.Provider value={{
            user,
            loading,
            error,
            registerUser,
            loginUser,
            logoutUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

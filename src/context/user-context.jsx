import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import ModalContext from "../context/modal-context";

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
    const modalCtx = useContext(ModalContext);
    console.log("user: ", user);
    console.log("error: ", error);

    const displayToast = (message) => {
        toast(message, {
            type: 'success',
            position: "bottom-center",
            autoClose: 4000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }


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
                modalCtx.closeModal()
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setLoading(false);
                        setUser(auth.currentUser);
                        displayToast("Vous êtes connecté")
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
                modalCtx.closeModal()
                displayToast("Vous êtes connecté")
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
            .then(() => {
                displayToast("Vous êtes déconnecté")
            })
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

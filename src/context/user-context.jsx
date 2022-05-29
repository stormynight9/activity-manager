import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import ModalContext from "../context/modal-context";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

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


    const createUser = async (user, name) => {
        await setDoc(doc(db, 'users', user.uid), {
            id: user.uid,
            name: name,
            email: user.email,
        })
    }

    const registerUser = (email, name, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log("user: ", res, name);

                modalCtx.closeModal()
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setLoading(false);
                        setUser(() => auth.currentUser);
                        createUser(res.user, name)
                        displayToast("Vous êtes connecté")
                    })
                    .catch((err) => {
                        setLoading(false);
                        setError("Error while updating profile");
                    })
            }).then(ress => {
                console.log("user: ", ress);
            })
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

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "pfe-95fff.firebaseapp.com",
    projectId: "pfe-95fff",
    storageBucket: "pfe-95fff.appspot.com",
    messagingSenderId: "55339101858",
    appId: "1:55339101858:web:9da29c04a155876f6671fb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
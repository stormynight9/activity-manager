import { collection, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase-config";


const DataContext = createContext({
    categories: [],
    setCategories: () => { },
    activities: [],
    setActivities: () => { },
    isLoaded: false,
});

export const DataContextProvider = (props) => {
    const [categories, setCategories] = useState([])
    const [activities, setActivities] = useState([])
    const [isLoaded, setIsLoaded] = useState(null)

    useEffect(() => {
        if (categories.length === 0 || activities.length === 0) {
            return setIsLoaded(false)
        }
        return setIsLoaded(true)
    }, [categories, activities])

    useEffect(() => onSnapshot(collection(db, "activities"), (doc) => {
        const data = doc.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        // filter data only activities with status === 'accepted'
        const filteredData = data.filter((activity) => activity.status === 'accepted')
        setActivities(filteredData)
    }), [])

    useEffect(() => onSnapshot(collection(db, "categories"), (doc) => {
        setCategories(doc.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }), [])


    return (
        <DataContext.Provider value={{
            categories: categories,
            setCategories: setCategories,
            activities: activities,
            setActivities: setActivities,
            isLoaded: isLoaded
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContext;
import { collection, getDocs } from 'firebase/firestore';
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

    useEffect(() => {
        const getCategories = async () => {
            const data = await getDocs(collection(db, 'categories'))
            setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCategories()
    }, [])

    useEffect(() => {
        const getActivities = async () => {
            const data = await getDocs(collection(db, 'activities'))
            setActivities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        }
        getActivities()
    }, [])

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
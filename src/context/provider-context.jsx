import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../firebase-config'
import UserContext from './user-context'

const ProviderContext = createContext({
    bookedActivitiesCount: 0,
    setBookedActivitiesCount: () => { },
    bookedActivities: [],
    setBookedActivities: () => { },
    loading: false,
    setLoading: () => { },
    acceptActivity: () => { },
    refuseActivity: () => { }
})

export const ProviderContextProvider = (props) => {
    const [bookedActivitiesCount, setBookedActivitiesCount] = useState(0)
    const [bookedActivites, setBookedActivities] = useState([])
    const [loading, setLoading] = useState(false)
    const userCtx = useContext(UserContext)
    console.log(userCtx.user)
    console.log('bookedActivities', bookedActivites)

    //get snapshot of booked activities when database changes
    useEffect(() => onSnapshot(collection(db, "validatedActivities"), (doc) => {
        console.log(doc)
        const formatedData = doc.docs.map((doc) => ({ ...doc.data(), bookedActivityId: doc.id }))
        // filter formatedData only activities with providerId equal to the current provider
        console.log('user', userCtx.user)
        const filteredData = formatedData.filter((activity) => activity.providerId === userCtx.user.uid)
        setBookedActivities(filteredData)
        console.log(filteredData)
        setBookedActivitiesCount(filteredData.length)
    }), [])

    //function that change availability of an activity to 'accepted' by id of bookedActivities
    const acceptActivity = async (bookedActivityId) => {
        setLoading(true)
        await updateDoc(doc(db, 'validatedActivities', bookedActivityId), { availability: 'accepted' })
        toast('Activité accepté', {
            type: 'success',
            position: "bottom-center",
            autoClose: 4000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        setLoading(false)
    }

    const refuseActivity = async (bookedActivityId) => {
        setLoading(true)
        await updateDoc(doc(db, 'validatedActivities', bookedActivityId), { availability: 'refused' })
        toast('Activité refusé', {
            type: 'success',
            position: "bottom-center",
            autoClose: 4000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        setLoading(false)
    }

    return (
        <ProviderContext.Provider value={{
            bookedActivitiesCount: bookedActivitiesCount,
            setBookedActivitiesCount: setBookedActivitiesCount,
            bookedActivities: bookedActivites,
            setBookedActivities: setBookedActivities,
            loading: loading,
            setLoading: setLoading,
            acceptActivity: acceptActivity,
            refuseActivity: refuseActivity,
        }}>
            {props.children}
        </ProviderContext.Provider>
    )
}

export default ProviderContext

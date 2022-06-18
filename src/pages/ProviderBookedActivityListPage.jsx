import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import BookedActivities from "../components/provider/BookedActivities"
import Sidebar from "../components/provider/Sidebar"
import UserContext from "../context/user-context"
import { db } from "../firebase-config"
import SidebarContext from "./sidebar-context"

const ProviderActivityListPage = () => {
    const [bookedActivites, setBookedActivities] = useState([])
    const [loading, setLoading] = useState(false)
    const userCtx = useContext(UserContext)
    const sidebarCtx = useContext(SidebarContext)

    //get snapshot of booked activities when database changes
    useEffect(() => onSnapshot(collection(db, "validatedActivities"), (doc) => {
        console.log(doc)
        const formatedData = doc.docs.map((doc) => ({ ...doc.data(), bookedActivityId: doc.id }))
        // filter formatedData only activities with providerId equal to the current provider
        const filteredData = formatedData.filter((activity) => activity.providerId === userCtx.user.uid)
        setBookedActivities(filteredData)
        console.log(filteredData.length)
        sidebarCtx.setBookedActivitiesCount(filteredData.length)
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
        <div className='flex'>
            <Sidebar />
            <div className='w-full m-4 max-w-7xl flex flex-col mx-auto p-2'>
                <BookedActivities loading={loading} bookedActivites={bookedActivites} acceptActivity={acceptActivity} refuseActivity={refuseActivity} />
            </div>
        </div>
    )
}

export default ProviderActivityListPage
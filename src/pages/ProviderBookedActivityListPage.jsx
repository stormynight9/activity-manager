import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import BookedActivities from "../components/provider/BookedActivities"
import Sidebar from "../components/provider/Sidebar"
import UserContext from "../context/user-context"
import { db } from "../firebase-config"

const ProviderActivityListPage = () => {

    const [bookedActivites, setBookedActivities] = useState([])
    const userCtx = useContext(UserContext)
    console.log(bookedActivites)
    useEffect(() => {
        const getBookedActivities = async () => {
            const data = await getDocs(collection(db, 'validatedActivities'))
            const formatedData = data.docs.map((doc) => ({ ...doc.data().activity, bookedActivityId: doc.id }))
            // filter formatedData only activities with providerId equal to the current provider
            const filteredData = formatedData.filter((activity) => activity.providerId === userCtx.user.uid)
            setBookedActivities(filteredData)
        }
        getBookedActivities()
    }, [])

    return (
        <div className='flex'>
            <Sidebar bookedActivitesCount={bookedActivites.length} />
            <div className='w-full m-4 max-w-7xl flex flex-col mx-auto '>
                <BookedActivities bookedActivites={bookedActivites} />
            </div>
        </div>
    )
}

export default ProviderActivityListPage
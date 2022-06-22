import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { doc, onSnapshot } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase-config'
import DataContext from '../../context/data-context'

const ValidatedProgramActivity = ({ activityId, updateTotalPrice }) => {
    const dataCtx = useContext(DataContext)
    const [activity, setActivity] = useState(null)
    const [activityInfo, setActivityInfo] = useState({})

    // function that gets activityId and returns activity from dataCtx.activities
    const getActivity = (activityId) => {
        return dataCtx.activities.find(activity => activity.id === activityId)
    }

    // get total price of all accepted activities
    useEffect(() => {
        if (activityInfo?.availability === 'accepted') {
            updateTotalPrice(activity?.price * activityInfo?.participants)
        }
    }, [activityInfo?.availability, activity?.price, activityInfo?.participants])


    useEffect(() => onSnapshot(doc(db, 'validatedActivities', activityId), (doc) => {
        setActivityInfo(doc.data(), setActivity(getActivity(doc.data().activityId)))
    }), [activityId, dataCtx.activities])


    return (
        <div className='flex items-center'>
            <div className='h-20 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                <img className='h-full w-full object-cover object-center' src={activity?.coverImage} alt="activity" />
            </div>
            <div className='flex flex-col space-y-2 p-4 w-full'>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-medium '>{activity?.title}</p>
                    <p className='text-2xl font-semibold text-gray-900'>{activity?.price * activityInfo?.participants}.00 <span className='font-normal text-gray-600 text-sm'>TND</span></p>
                </div>
                <div className='flex justify-between text-sm text-gray-600 items-center'>
                    <div>
                        <p>{activityInfo?.date && <span className='capitalize'>{format(new Date(activityInfo?.date), 'q MMM yyyy', { locale: fr })}</span>} à {activityInfo?.time} | {activityInfo?.participants && <span>{activityInfo.participants === 1 ? `${activityInfo.participants} Participant` : `${activityInfo.participants} Participants`}</span>}</p>
                    </div>
                    {activityInfo?.availability === 'accepted' && <div className='px-3 py-1 text-sm capitalize font-medium tracking-wider text-green-800 bg-green-200 rounded-3xl bg-opacity-50'>
                        {activityInfo.availability}
                    </div>}
                    {activityInfo?.availability === 'pending' && <div className='px-3 py-1 text-sm capitalize font-medium tracking-wider text-orange-800 bg-orange-200 rounded-3xl bg-opacity-50'>
                        {activityInfo.availability}
                    </div>}
                    {activityInfo?.availability === 'refused' && <div className='px-3 py-1 text-sm capitalize font-medium tracking-wider text-red-800 bg-red-200 rounded-3xl bg-opacity-50'>
                        {activityInfo.availability}
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default ValidatedProgramActivity
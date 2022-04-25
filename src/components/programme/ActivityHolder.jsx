import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import SelectedContext from "../../context/selected-context"
import programmeContext from "../../context/programme-context"
import { activities } from '../../constants/activities'

const ActivityHolder = (props) => {
    const programmeCtx = useContext(programmeContext)
    const selectedCtx = useContext(SelectedContext)
    const [selectedActivities, setSelectedActivities] = useState(programmeCtx.activities)
    const [selectedActivity, setselectedActivity] = useState(null)
    const activity = selectedActivity && activities.find(activity => activity.id === selectedActivity.activityId)

    // check if props id is in activities array
    const checkIfInArray = (id) => {
        // loop through activities array and check if id matches props id   
        for (let i = 0; i < selectedActivities.length; i++) {
            if (selectedActivities[i].id === id) {
                setselectedActivity(selectedActivities[i])
            }
        }
    }


    useEffect(() => {
        checkIfInArray(props.id)
    })

    const setSelectedDateTime = () => {
        selectedCtx.setSelectedDay(props.day)
        selectedCtx.setSelectedTime(props.time)
    }


    if (selectedActivity) {
        return <div style={{ backgroundImage: `url(${activity.coverImage})` }} className='sm:w-52 relative h-28 bg-cover hover:bg-hobbizer duration-200 rounded-md flex cursor-pointer justify-center items-center group'>
            <Link to={`/activities/${+selectedActivity.activityId}`} onClick={setSelectedDateTime} >
                <div className='flex justify-center items-center bg-[#00000080] absolute top-0 bottom-0 right-0 left-0 rounded-md'>
                    <div className='flex flex-col text-center items-center gap-1 text-white z-10'>
                        <p className='font-medium text-lg'>{activity.shortTitle}</p>
                        <p>{selectedActivity.time.replace(':', 'h')}</p>
                    </div>
                </div>
            </Link>
            <div className='absolute right-0 bottom-0 z-10'>
                <button className='bg-white p-[6px] m-1 rounded-sm text-sm text-hobbizer-dark hover:bg-hobbizer hover:text-white duration-200'><FaPencilAlt /></button>
                <button className='bg-white p-[6px] m-1 rounded-sm text-sm text-hobbizer-dark hover:bg-hobbizer hover:text-white duration-200'><FaTrashAlt /></button>
            </div>
        </div>
    } else {
        return <Link to='/categories' onClick={setSelectedDateTime} className='sm:w-52 h-28 bg-[#eaeceb] hover:bg-hobbizer duration-200 rounded-md flex cursor-pointer items-center group'>
            <div className='flex items-center gap-1 ml-5'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 duration-200 text-hobbizer group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <p className='group-hover:text-white duration-200'>{props.time}</p>
            </div>
        </Link>
    }




}

export default ActivityHolder
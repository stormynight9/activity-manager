import SwiperComponent from "./SwiperComponent"
import { Navigate, useParams } from "react-router-dom"
import { activities } from "../../constants/activities"
import { FaHourglassHalf } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'

const Activity = () => {
    const { activityId } = useParams()
    const activity = activities.find(activity => activity.id === +activityId)

    if (!activity) {

        return <Navigate to="/categories" />
    }



    return (
        <div className='mt-36 p-2 '>
            <div className='max-w-2xl lg:max-w-6xl mx-auto'>
                <h1 className='text-2xl uppercase'>{activity.title}</h1>
                <div className='border-2 p-1 lg:flex'>
                    <SwiperComponent images={activity.images} />
                    <div className='p-3'>
                        <h2 className='text-base font-semibold mb-2'>{activity.catchPhrase}</h2>
                        <p>{activity.shortDescription}</p>
                        <a className='block text-right text-sm underline text-hobbizer mt-2 pb-4 mb-2 border-b-2' href="#">Descriptif détaillé</a>
                        <ul>
                            <li className='flex items-center gap-1 mb-2'>
                                <FaHourglassHalf className='text-hobbizer text-xl' />
                                <span className='text-sm'>L'activité dure {activity.duration} mins</span>
                            </li>
                            <li className='flex items-center gap-1 mb-2'>
                                <IoIosPeople className='text-hobbizer text-xl' />
                                <span className='text-sm '>De {activity.range[0]} à {activity.range[1]} personnes. </span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <MdLocationOn className='text-hobbizer text-xl' />
                                <span className='text-sm '>{activity.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
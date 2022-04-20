import SwiperComponent from "./SwiperComponent"
import { FaHourglassHalf } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'

const ActivityCard = (props) => {

    // convert string to date object
    const convertMinutesToHours = (minutes) => {
        // check if minutes can be coverted to numbrer
        if (isNaN(minutes)) {
            return minutes
        }

        const hours = Math.floor(minutes / 60)
        const minutesLeft = minutes % 60
        if (minutesLeft === 0) {
            return `${hours}h`
        }
        return `${hours}h${minutesLeft}`
    }


    return <div className='border-2 p-1 lg:flex'>
        <SwiperComponent images={props.activity.images} />
        <div className='p-3'>
            <h2 className='text-base font-semibold mb-2'>{props.activity.catchPhrase}</h2>
            <p>{props.activity.shortDescription}</p>
            <a className='block text-right text-sm underline text-hobbizer mt-2 pb-4 mb-2 border-b-2' href='#description'>Descriptif détaillé</a>
            <ul className='mt-4'>
                <li className='flex items-center gap-1 mb-2'>
                    <FaHourglassHalf className='text-hobbizer text-xl' />
                    <span className='text-sm'>L'activité dure {convertMinutesToHours(props.activity.duration)}</span>
                </li>
                <li className='flex items-center gap-1 mb-2'>
                    <IoIosPeople className='text-hobbizer text-xl' />
                    <span className='text-sm '>De {props.activity.range[0]} à {props.activity.range[1]} personnes. </span>
                </li>
                <li className='flex items-center gap-1'>
                    <MdLocationOn className='text-hobbizer text-xl' />
                    <span className='text-sm '>{props.activity.location}</span>
                </li>
            </ul>
        </div>
    </div>;
}

export default ActivityCard
import DayContainer from "./DayContainer"
import dateContext from '../context/date-context'
import { useContext } from "react"
import { format } from 'date-fns'

const Programme = () => {


    const dateCtx = useContext(dateContext)

    const startDate = format(new Date(dateCtx.startDate), 'd MMM, yyyy')
    const endDate = format(new Date(dateCtx.endDate), 'd MMM, yyyy')


    return (
        <div className='mt-36 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-medium text-gray-700 mb-2 text-center'>Your programme from <span className='text-hobbizer'>{startDate}</span> until <span className='text-hobbizer'>{endDate}</span></h2>
            <p className='text-gray-500 mb-3 text-center'>Click on a time of the day and select your activities.</p>
            {dateCtx.datesInterval.map(day => <DayContainer key={day} day={day} />)}
        </div>
    )
}

export default Programme
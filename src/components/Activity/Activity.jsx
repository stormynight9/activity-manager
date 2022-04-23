import { forwardRef, useState, useContext } from "react"
import parse from 'html-react-parser'
import { Navigate, useParams, useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker";
import { activities } from "../../constants/activities"
import dateContext from "../../context/date-context"
import parseISO from "date-fns/parseISO"
import selectedContext from "../../context/selected-context"
import TimesInput from "./TimesInput"
import { addDays, format } from "date-fns"
import ActivityCard from "./ActivityCard";
import programmeContext from '../../context/programme-context'

const Activity = () => {
    const { activityId } = useParams()
    const activity = activities.find(activity => activity.id === +activityId)
    const dateCtx = useContext(dateContext)
    const selectedCtx = useContext(selectedContext)
    const programmeCtx = useContext(programmeContext)
    const [startDate, setStartDate] = useState(selectedCtx.selectedDay && new Date(selectedCtx.selectedDay))
    const minDate = dateCtx.startDate ? parseISO(dateCtx.startDate) : addDays(new Date(), 3)
    const maxDate = dateCtx.endDate ? parseISO(dateCtx.endDate) : addDays(new Date(), 30)
    const [participants, setParticipants] = useState(selectedCtx.participants);
    const [selectedTime, setSelectedTime] = useState(null)
    const navigate = useNavigate()



    if (!activity) {
        return <Navigate to="/categories" />
    }

    const DateInputjsx = forwardRef(({ value, onClick }, ref) => (
        <div onClick={onClick} className='flex flex-col lg:border-r-2 lg:px-6 w-full mb-4 sm:mb-0'>
            <label className='text-sm text-hobbizer' htmlFor='startDate'>Date</label>
            <div className='flex relative items-center'>
                <input autoComplete="off" required value={value} ref={ref} readOnly className='h-12 bg-transparent border outline-none border-white text-gray-900 text-lg rounded-lg  focus:border-hobbizer block w-full p-2.5 pr-8' placeholder='Choissisez une date' id='startDate' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute right-2  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    ));

    const onSubmitHandler = (e) => {
        e.preventDefault()
        programmeCtx.addActivity({
            id: activity.id,
            participants: +participants,
            date: format(startDate, 'yyyy-MM-dd'),
            time: selectedTime
        })
        navigate('/programme')
    }

    return (
        <div className='mt-36 p-2 '>
            <div className='max-w-2xl lg:max-w-6xl mx-auto'>
                <h1 className='text-2xl uppercase mb-2'>{activity.title}</h1>
                <ActivityCard activity={activity} ></ActivityCard>
                <div className='border-2 mt-7'>
                    <form className='md:flex' onSubmit={onSubmitHandler}>
                        <div className='lg:flex p-2 w-full justify-center items-center'>
                            <div className='flex flex-col lg:border-r-2 lg:pr-6 mb-4 sm:mb-0 w-full lg:max-w-[178px]'>
                                <label className='text-sm  text-hobbizer' htmlFor='participants'>Nombre de participants</label>
                                <div className='flex relative items-center '>
                                    <input autoComplete="off" max={99} min={1} defaultValue={participants} onChange={e => {
                                        setParticipants(e.target.value)
                                        selectedCtx.setParticipants(e.target.value)
                                    }} className='relative h-12  pr-8 bg-transparent border lg:text-center text-lg border-white outline-none text-gray-900  rounded-lg  focus:border-hobbizer  block w-full p-2.5' type='number' id='participants' placeholder="0" />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-gray-400 right-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            </div>

                            <DatePicker
                                selected={startDate}
                                dateFormat="d MMM, yyyy"
                                onChange={(date) => {
                                    setStartDate(date)
                                    selectedCtx.setSelectedDay(format(date, 'EE d MMM, yyyy'))
                                }}
                                selectsStart
                                startDate={startDate}
                                minDate={minDate}
                                maxDate={maxDate}
                                customInput={<DateInputjsx />}
                            />

                            <TimesInput setSelectedTime={setSelectedTime} times={activity.time} />

                        </div>
                        <div className='p-5 flex flex-col items-center bg-hobbizer-light-gray w-full md:max-w-sm'>
                            <h1 className='uppercase font-extralight mb-5'>{activity.title}</h1>
                            <p className='font-bold text-3xl'>{activity.price * participants} TND</p>
                            <button type="submit" className='px-12 py-2 mt-2 font-medium bg-hobbizer hover:bg-hobbizer-dark  duration-300 text-white text-center rounded-md shadow-md'>Valider</button>
                            <i className='mt-1 text-xs'>Sous réserve de disponibilité</i>
                        </div>
                    </form>
                </div>

                <h3 className="text-hobbizer text-xl mb-2 mt-16 before:content[''] before:block before:h-24 before:-mt-24 before:invisible" id='description'>Description détaillée de l'activité</h3>
                <div className='leading-7 text-sm' >{parse(activity.longDecription)}</div>
                <h3 className='text-hobbizer text-xl mb-2 mt-7'>Informations pratiques</h3>
                <div className='leading-7 text-sm mb-20'>{parse(activity.practicalInfo)}</div>
            </div>
        </div>
    )
}

export default Activity
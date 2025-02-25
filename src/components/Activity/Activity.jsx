import { addDays, format, isAfter, isBefore } from "date-fns";
import { serverTimestamp } from "firebase/firestore";
import parse from 'html-react-parser';
import { forwardRef, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import DataContext from "../../context/data-context";
import programmeContext from '../../context/programme-context';
import selectedContext from "../../context/selected-context";
import UserContext from "../../context/user-context";
import ActivityCard from "./ActivityCard";
import TimesInput from "./TimesInput";

const Activity = () => {
    const { activityId } = useParams()
    const dataCtx = useContext(DataContext)
    const userCtx = useContext(UserContext)
    const activity = dataCtx.activities.find(activity => activity.id === activityId)
    const selectedCtx = useContext(selectedContext)
    const programmeCtx = useContext(programmeContext)
    const [startDate, setStartDate] = useState(selectedCtx.selectedDay && new Date(selectedCtx.selectedDay))
    const minDate = addDays(new Date(), 3)
    const maxDate = addDays(new Date(), 30)
    const [participants, setParticipants] = useState(selectedCtx.participants);
    const [selectedTime, setSelectedTime] = useState(activity.time[0])
    const navigate = useNavigate()

    if (!activity) {
        return <Navigate to="/categories" />
    }

    const DateInputjsx = forwardRef(({ value, onClick }, ref) => (
        <div onClick={onClick} className='flex flex-col lg:border-r-2 lg:px-6 w-full mb-4 sm:mb-0'>
            <label className='text-sm text-hobbizer font-medium' htmlFor='startDate'>Date</label>
            <div className='flex relative items-center'>
                <input autoComplete="off" required value={value} ref={ref} readOnly className='h-12 bg-transparent border outline-none border-white text-gray-900 text-lg rounded-lg  focus:border-hobbizer block w-full p-2.5 pr-8' placeholder='Choissisez une date' id='startDate' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute right-2  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    ));

    const matin = ['08:00', '09:00', '10:00', '11:00']
    const midi = ['12:00', '13:00']
    const apresmidi = ['14:00', '15:00']
    const finapresmidi = ['16:00', '17:00']
    const soiree = ['18:00', '19:00', '20:00']
    const nuit = ['21:00', '22:00', '23:00', '00:00']

    const generateId = (date, time) => {
        if (matin.includes(time)) {
            return 'matin' + format(date, 'yyyy-MM-dd')
        }
        if (midi.includes(time)) {
            return 'midi' + format(date, 'yyyy-MM-dd')
        }
        if (apresmidi.includes(time)) {
            return 'apresmidi' + format(date, 'yyyy-MM-dd')
        }
        if (finapresmidi.includes(time)) {
            return 'finapresmidi' + format(date, 'yyyy-MM-dd')
        }
        if (soiree.includes(time)) {
            return 'soiree' + format(date, 'yyyy-MM-dd')
        }
        if (nuit.includes(time)) {
            return 'nuit' + format(date, 'yyyy-MM-dd')
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const id = generateId(startDate, selectedTime)
        // if selected day is greater than end date of the programme change the selected day to the end date
        if (isAfter(startDate, new Date(programmeCtx.endDate)) || programmeCtx.startDate === null) {
            programmeCtx.setEndDate(format(startDate, 'yyyy-MM-dd'))
        }

        if (isBefore(startDate, new Date(programmeCtx.startDate)) || programmeCtx.startDate === null) {
            programmeCtx.setStartDate(format(startDate, 'yyyy-MM-dd'))
        }

        // check if activity already exist
        const activityExist = programmeCtx.activities.find(activity => activity.id === id)
        if (activityExist) {
            toast('Vous avez déjà une activité ce jour à cette période', {
                type: 'error',
                position: "bottom-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return
        }

        programmeCtx.addActivity({
            id: id,
            activityId: activity.id,
            providerId: activity.providerId,
            participants: +participants,
            date: format(startDate, 'yyyy-MM-dd'),
            time: selectedTime,
            status: 'pending',
            availability: 'pending',
            createdAt: serverTimestamp()
        })
        navigate('/programme')
        toast("L'activité a bien été ajoutée à votre programme", {
            type: 'success',
            position: "bottom-center",
            autoClose: 4000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <div className='mt-36 p-2 2xl:mr-[28vw]'>
            <div className='max-w-2xl lg:max-w-6xl mx-auto'>
                <h1 className='text-2xl uppercase mb-2'>{activity.title}</h1>
                <ActivityCard activity={activity} ></ActivityCard>
                <div className='border-2 mt-7'>
                    <form className='md:flex' onSubmit={onSubmitHandler}>
                        <div className='lg:flex p-2 w-full justify-center items-center'>
                            <div className='flex flex-col lg:border-r-2 lg:pr-6 mb-4 sm:mb-0 w-full lg:max-w-[178px]'>
                                <label className='text-sm  text-hobbizer font-medium' htmlFor='participants'>Nombre de participants</label>
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
                <div className='leading-7 text-sm' >{parse(activity.details)}</div>
            </div>
        </div>
    )
}

export default Activity
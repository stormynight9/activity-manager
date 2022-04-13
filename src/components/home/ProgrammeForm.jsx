import { forwardRef, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import { format } from "date-fns";
import './ProgrammeForm.css'
import dateContext from '../../context/date-context'


const ProgrammeForm = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [minDate, setMinDate] = useState(addDays(new Date(), 3))
    const [maxDate, setMaxDate] = useState(addDays(new Date(), 30))
    const [startDateInput, setStartDateInput] = useState()
    const [endDateInput, setEndDateInput] = useState()
    const dateCtx = useContext(dateContext)
    const navigate = useNavigate();

    const StartDatejsx = forwardRef(({ value, onClick }, ref) => (
        <div onClick={onClick} className='flex flex-col sm:border-r-2 sm:px-6 w-full mb-4 sm:mb-0'>
            <label className='text-sm text-hobbizer' htmlFor='startDate'>Start Date</label>
            <div className='flex relative items-center'>
                <input required onChange={e => setStartDateInput(e.target.value)} value={value} ref={ref} className='h-12 bg-transparent border outline-none border-white text-gray-900 text-lg rounded-lg  focus:border-hobbizer block w-full p-2.5 pr-8' placeholder='From' id='startDate' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute right-2  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    ));

    const EndDatejsx = forwardRef(({ value, onClick }, ref) => (
        <div onClick={onClick} className='flex flex-col lg:border-r-2 sm:px-6 w-full'>
            <label className='text-sm text-hobbizer' htmlFor='endDate'>End Date</label>
            <div className='flex relative items-center'>
                <input required onChange={e => setEndDateInput(e.target.value)} value={value} ref={ref} className='h-12 bg-transparent border outline-none border-white text-gray-900 text-lg rounded-lg  focus:border-hobbizer block w-full p-2.5 pr-8' placeholder='Until' id='endDate' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute right-2  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    ));

    const [startDateToForward, setStartDateToForward] = useState()
    const [endDateToForward, setEndDateToForward] = useState()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (startDateToForward && endDateToForward) {
            dateCtx.setStartDate(() => startDateToForward)
            dateCtx.setEndDate(() => endDateToForward)
            setTimeout(() => navigate('/programme'), 100)
        }
    }

    return (<>
        <div className='mt-8'>
            <div className=' max-w-5xl bg-white mx-auto  p-4 shadow-md rounded-md'>
                <form onSubmit={handleFormSubmit} className='flex flex-col sm:flex-row items-center justify-center lg:flex-nowrap flex-wrap'>
                    <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
                        <div className='flex flex-col sm:border-r-2 sm:pr-6 w-full mb-4 sm:mb-0'>
                            <label className='text-sm  text-hobbizer' htmlFor='participants'>Number of participants</label>
                            <div className='flex relative items-center '>
                                <input required onChange={e => dateCtx.setParticipants(e.target.value)} max={99} min={1} className='relative h-12  pr-8 bg-transparent border sm:text-center text-lg border-white outline-none text-gray-900  rounded-lg  focus:border-hobbizer  block w-full p-2.5' type='number' id='participants' placeholder="0" />
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
                                setMinDate(date)
                                setStartDateToForward(format(date, "yyyy-MM-dd"))
                            }}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={addDays(new Date(), 3)}
                            maxDate={maxDate}
                            customInput={<StartDatejsx />}
                        />

                        <DatePicker
                            selected={endDate}
                            dateFormat="d MMM, yyyy"
                            onChange={(date) => {
                                setEndDate(date)
                                setMaxDate(date)
                                setEndDateToForward(format(date, "yyyy-MM-dd"))
                            }}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={minDate}
                            maxDate={addDays(new Date(), 30)}
                            customInput={<EndDatejsx />}
                        />



                    </div>
                    <button type='submit' className="sm:px-16 sm:mx-6 h-14 w-full sm:w-auto mt-7 lg:mt-0  bg-hobbizer hover:bg-hobbizer-dark  duration-300 text-white text-center rounded-md shadow-md block ">
                        Continue
                    </button>
                </form>
            </div>
        </div>

    </>
    );
};

export default ProgrammeForm
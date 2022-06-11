import { format } from 'date-fns'
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'
import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ReactPaginate from "react-paginate"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import programmeContext from "../../context/programme-context"
import UserContext from '../../context/user-context'
import { db } from '../../firebase-config'
import DayContainer from "./DayContainer"
import './ProgrammeContainer.css'

const Programme = () => {
    const programmeCtx = useContext(programmeContext)
    const userCtx = useContext(UserContext)
    const startDate = format(new Date(programmeCtx.startDate), 'd MMM, yyyy')
    const endDate = format(new Date(programmeCtx.endDate), 'd MMM, yyyy')
    const days = programmeCtx.datesInterval
    const daysFr = programmeCtx.datesIntervalFr
    const [pageNumber, setPageNumber] = useState(0)
    const [daysPerPage, setDaysperPage] = useState(4)
    const pagesVisited = pageNumber * daysPerPage
    const displayDays = days.slice(pagesVisited, pagesVisited + daysPerPage).map((day, idx) => {
        return <DayContainer key={day} day={day} dayFr={daysFr[idx]} />
    })
    const [pageCount, setPageCount] = useState(Math.ceil(days.length / daysPerPage))
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    useEffect(() => {
        setDaysperPage(changeLayout())
        setPageNumber(0)
        setPageCount(Math.ceil(days.length / daysPerPage))
    }, [days, daysPerPage])

    const changeLayout = () => {
        if (screenWidth > 1170) {
            setDaysperPage(4)
            setPageNumber(0)
            setPageCount(Math.ceil(days.length / daysPerPage))
            return 4
        } else if (screenWidth > 767) {
            setDaysperPage(3)
            setPageNumber(0)
            setPageCount(Math.ceil(days.length / daysPerPage))
            return 3
        } else if (screenWidth < 767) {
            setDaysperPage(2)
            setPageNumber(0)
            setPageCount(Math.ceil(days.length / daysPerPage))
            return 2
        }
    }

    useEffect(() => {
        changeLayout()
    }, [screenWidth])

    const saveProgram = async () => {
        let savedActivities = []

        for (const activity of programmeCtx.activities) {
            const activityRef = await addDoc(collection(db, 'savedActivities'), {
                activity
            })
            savedActivities.push(activityRef.id)
        }

        const programRef = await addDoc(collection(db, 'savedPrograms'), {
            participants: programmeCtx.participants,
            startDate: programmeCtx.startDate,
            endDate: programmeCtx.endDate,
            userId: userCtx.user.uid,
            bookedActivities: savedActivities,
        })

        await updateDoc(doc(db, 'users', userCtx.user.uid), {
            savedPrograms: arrayUnion(programRef.id)
        })

        toast('Votre programme a bien été enregistré dans votre compte.', {
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
        <div className='mt-36 flex flex-col justify-center items-center mb-24'>
            <h2 className='text-2xl font-medium text-gray-700 mb-2 text-center'>Votre programme du <span className='text-hobbizer'>{programmeCtx.startDateFr}</span> au <span className='text-hobbizer'>{programmeCtx.endDateFr}</span></h2>
            <p className='text-gray-500 mb-8 text-center'>Cliquez sur une période de la journée et sélectionnez vos activités</p>
            <div className='w-full sm:w-auto relative'>
                <ReactPaginate
                    previousLabel={<FaChevronLeft className='text-hobbizer text-xl' />}
                    nextLabel={<FaChevronRight className='text-hobbizer text-xl' />}
                    pageCount={pageCount}
                    onPageChange={({ selected }) => setPageNumber(selected)}
                    containerClassName={"pagination"}
                    disabledClassName={"disabled"}
                    forcePage={pageNumber}
                />
                <div className='flex'>
                    {displayDays}
                </div>
            </div>
            {programmeCtx.activities.length > 0 && <div className='w-full p-4 flex flex-col sm:flex-row gap-2 sm:gap-1 md:gap-4 sm:justify-end max-w-4xl'>
                <button onClick={() => programmeCtx.setActivities([])} className='h-10 block w-full sm:w-auto px-3 md:px-4 secondary-button'>Recommencer</button>
                <button onClick={() => saveProgram()} className='h-10  w-full sm:w-auto px-3 md:px-4 secondary-button'>Sauvegarder mon programme</button>
                <Link to={'/checkout'} className='flex gap-2 justify-center items-center h-10  w-full sm:w-auto px-3 md:px-4 primary-button'><FaCheck />Valider mon programme</Link>
            </div>}
        </div>
    )

}

export default Programme
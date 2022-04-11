import DayContainer from "./DayContainer"
import dateContext from '../../context/date-context'
import { useContext, useState, useLayoutEffect, useEffect } from "react"
import { format } from 'date-fns'
import ReactPaginate from "react-paginate"
import './ProgrammeContainer.css'

const Programme = () => {
    const dateCtx = useContext(dateContext)
    const startDate = format(new Date(dateCtx.startDate), 'd MMM, yyyy')
    const endDate = format(new Date(dateCtx.endDate), 'd MMM, yyyy')

    const [days, setDays] = useState(dateCtx.datesInterval.slice(0, dateCtx.datesInterval.length))
    const [pageNumber, setPageNumber] = useState(0)
    const [daysPerPage, setDaysperPage] = useState(4)
    const pagesVisited = pageNumber * daysPerPage
    const diplayDays = days.slice(pagesVisited, pagesVisited + daysPerPage).map(day => {
        return <DayContainer key={day} day={day} />
    })
    const pageCount = Math.ceil(days.length / daysPerPage)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    useEffect(() => {
        if (screenWidth > 1170) {
            setDaysperPage(4)
        } else if (screenWidth > 767) {
            setDaysperPage(3)
        } else {
            setDaysperPage(2)
        }
    }, [screenWidth])


    console.log(screenWidth)


    return (
        <div className='mt-36 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-medium text-gray-700 mb-2 text-center'>Votre programme du <span className='text-hobbizer'>{startDate}</span> au <span className='text-hobbizer'>{endDate}</span></h2>
            <p className='text-gray-500 mb-3 text-center'>Cliquez sur une période de la journée et sélectionnez vos activités</p>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={({ selected }) => setPageNumber(selected)}
                containerClassName={"pagination"}
            />
            <div className='flex'>
                {diplayDays}
            </div>
        </div>
    )

}

export default Programme
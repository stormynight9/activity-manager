import DayContainer from "./DayContainer"
import dateContext from '../../context/date-context'
import { useContext, useState } from "react"
import { format } from 'date-fns'
import ReactPaginate from "react-paginate"

const Programme = () => {
    const dateCtx = useContext(dateContext)
    const startDate = format(new Date(dateCtx.startDate), 'd MMM, yyyy')
    const endDate = format(new Date(dateCtx.endDate), 'd MMM, yyyy')

    const [days, setDays] = useState(dateCtx.datesInterval.slice(0, dateCtx.datesInterval.length))
    const [pageNumber, setPageNumber] = useState(0)

    const daysPerPage = 4
    const pagesVisited = pageNumber * daysPerPage

    const diplayDays = days.slice(pagesVisited, pagesVisited + daysPerPage).map(day => {
        return <DayContainer key={day} day={day} />
    })

    const pageCount = Math.ceil(days.length / daysPerPage)


    return (
        <div className='mt-36 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-medium text-gray-700 mb-2 text-center'>Votre programme du <span className='text-hobbizer'>{startDate}</span> au <span className='text-hobbizer'>{endDate}</span></h2>
            <p className='text-gray-500 mb-3 text-center'>Cliquez sur une période de la journée et sélectionnez vos activités</p>
            <div className='flex'>
                {diplayDays}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={({ selected }) => setPageNumber(selected)}
                />
            </div>
        </div>
    )

}

export default Programme
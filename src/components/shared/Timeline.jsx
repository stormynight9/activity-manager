import { useContext } from "react"
import SelectedContext from "../../context/selected-context"

const Timeline = () => {
    const selectedCtx = useContext(SelectedContext)

    return (
        <div className='flex justify-between mb-8'>
            <div className='flex flex-col p-3'>
                {selectedCtx.selectedDay ? <div className='flex items-center'>
                    <span className='text-3xl'>{selectedCtx.selectedDay}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-3xl text-hobbizer-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className='text-3xl text-hobbizer'>{selectedCtx.selectedTime}</span>
                </div> : ''}
                {selectedCtx.selectedDay ? <p className='mt-2 text-gray-600'>Sélectionnez votre activité pour votre <span className='lowercase'>{selectedCtx.selectedDay.split(' ')[0]} {selectedCtx.selectedTime}</span></p> : <p className='mt-2 text-gray-600'>Notre sélection d'expériences à Tunisie
                </p>}
            </div>
        </div>
    )
}

export default Timeline
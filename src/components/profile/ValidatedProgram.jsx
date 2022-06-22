import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { FaCreditCard } from 'react-icons/fa'
import { db } from '../../firebase-config'
import ValidatedProgramActivity from './ValidatedProgramActivity'

const ValidatedProgram = ({ programId }) => {
    const [programDetails, setProgramDetails] = useState({})
    const [bookedActivities, setBookedActivities] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => onSnapshot(doc(db, 'validatedPrograms', programId), (doc) => {
        setProgramDetails(doc.data())
        setBookedActivities(doc.data().bookedActivities)
    }), [programId])

    const updateTotalPrice = (price) => {
        setTotalPrice(totalPrice + price)
    }

    return (
        <div className='p-4 bg-white'>
            <p className='text-lg font-medium'>Votre programme du {programDetails.startDate} au {programDetails.endDate}</p>
            <div className='space-y-2 mt-3'>
                {bookedActivities.map((activityId) => {
                    return (
                        <ValidatedProgramActivity updateTotalPrice={updateTotalPrice} key={activityId} activityId={activityId} />
                    )
                })}
            </div>
            {totalPrice !== 0 && <div className='flex flex-col items-end border-t-[1px] divide-y-[1px]'>
                {/* <div className='flex justify-between w-full mt-2 text-gray-800'>
                    <p className=' font-medium text-xl'>Prix total: </p>
                    <p className='text-2xl font-semibold'>420.00 <span className='text-base text-gray-700'>TND</span></p>
                </div> */}
                <div className='flex justify-between w-full mt-2 text-gray-800 mb-2'>
                    <p className=' font-medium text-xl mt-2'>Prix total des activités acceptées: </p>
                    <p className='text-2xl font-semibold mt-2'>{totalPrice}.00 <span className='text-base text-gray-700'>TND</span></p>
                </div>
                <button className='px-10 py-2.5 primary-button flex items-start space-x-2 tracking-wide'><span>Payer {totalPrice}.00 TND</span> <FaCreditCard size={20} /></button>
            </div>}
        </div>
    )
}

export default ValidatedProgram
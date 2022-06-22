import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaCreditCard } from 'react-icons/fa'
import { db } from '../../firebase-config'
import ValidatedProgramActivity from './ValidatedProgramActivity'

const ValidatedProgram = ({ programId }) => {
    const [programDetails, setProgramDetails] = useState({})

    useEffect(() => {
        const getPorgramDetails = async () => {
            const data = await getDoc(doc(db, 'validatedPrograms', programId))
            setProgramDetails(data.data())
        }
        getPorgramDetails()
    }, [programId])

    return (
        <div className='p-4 bg-white'>
            <p className='text-lg font-medium'>Votre programme du {programDetails.startDate} au {programDetails.endDate}</p>
            <div className='space-y-2 mt-3'>
                <ValidatedProgramActivity />
                <ValidatedProgramActivity />
                <ValidatedProgramActivity />
            </div>
            <div className='flex flex-col items-end border-t-[1px]'>
                <div className='flex mb-2 justify-between w-full mt-2 text-gray-800'>
                    <p className=' font-medium text-xl'>Prix total: </p>
                    <p className='text-2xl font-semibold'>420.00 <span className='text-base text-gray-700'>TND</span></p>
                </div>
                <button className='px-10 py-2.5 primary-button flex items-center space-x-2 '><span>Payer</span> <FaCreditCard size={18} /></button>
            </div>
        </div>
    )
}

export default ValidatedProgram
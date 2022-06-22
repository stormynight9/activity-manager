import React from 'react'

const ValidatedProgramActivity = () => {
    return (
        <div className='flex items-center'>
            <div className='h-20 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                <img className='h-full w-full object-cover object-center' src="https://firebasestorage.googleapis.com/v0/b/pfe-95fff.appspot.com/o/images%2FWhat-to-do-in-Tunisia-YOGA-KITE-Djerba-Tunisie-ABG05096.webp217a07ba-e9b5-4bc7-8972-b4a9799390d2?alt=media&token=1f00188c-e85a-4cda-a723-37d115c83e9e" alt="activity" />
            </div>
            <div className='flex flex-col space-y-2 p-4 w-full'>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-medium '>Activity title activity title title tile</p>
                    <p className='text-2xl font-semibold text-gray-900'>69.00 <span className='font-normal text-gray-600 text-sm'>TND</span></p>
                </div>
                <div className='flex justify-between text-sm text-gray-600 items-center'>
                    <div>
                        <p>21 Sept. 2033 à 08:00 | 3 Participants</p>
                    </div>
                    <div className='px-3 py-1 text-sm font-medium tracking-wider text-green-800 bg-green-200 rounded-3xl bg-opacity-50'>
                        Accepté
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ValidatedProgramActivity
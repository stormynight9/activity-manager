import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/data-context'
import programmeContext from '../../context/programme-context'

const TotalPrice = () => {
    const programmeCtx = useContext(programmeContext)
    const dataCtx = useContext(DataContext)
    const activities = programmeCtx.activities
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        let total = 0
        activities.forEach((activity) => {
            // get activity details from dataCtx
            const activityDetails = dataCtx.activities.find(
                (activityDetail) => activityDetail.id === activity.activityId
            )
            total += activityDetails.price * activity.participants
        }
        )
        setTotalPrice(total)
    }, [activities, dataCtx.activities])

    return (
        <div className='text-lg border-t-[1px] mt-2 font-semibold text-gray-900 flex xl:hidden justify-between w-full sm:max-w-[430px] calendar3:max-w-[645px] calendar4:max-w-[864px] p-2 '>
            <div className='flex-1'>
                <p className=''>Prix total</p>
            </div>
            <p className=''>
                {totalPrice}.00 TND
            </p>
        </div>
    )
}

export default TotalPrice

//TODO: add categories to admin
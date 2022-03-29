import DayContainer from "./DayContainer"

const Programme = () => {

    const days = ['Monday 03 Sept, 2022', 'Tuesday 04 Sept, 2022', 'Wednesday 05 Sept, 2022', 'Thursday 06 Sept, 2022']

    return (
        <div className='mt-36 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-medium text-gray-700 mb-2 text-center'>Your programme from 03/31 until 03/31</h2>
            <p className='text-gray-500 mb-3 text-center'>Click on a time of the day and select your activities.</p>
            {days.map(day => <DayContainer key={day} day={day} />)}
        </div>
    )
}

export default Programme
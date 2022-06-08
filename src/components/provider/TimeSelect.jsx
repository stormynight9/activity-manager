import { useState } from "react";

const TimeSelect = ({ setFormDetails, formDetails }) => {
    const [times, setTimes] = useState([
        {
            time: '08:00',
            isSelected: false
        },
        {
            time: '09:00',
            isSelected: false
        },
        {
            time: '10:00',
            isSelected: false
        },
        {
            time: '11:00',
            isSelected: false
        },
        {
            time: '12:00',
            isSelected: false
        },
        {
            time: '13:00',
            isSelected: false
        },
        {
            time: '14:00',
            isSelected: false
        },
        {
            time: '15:00',
            isSelected: false
        },
        {
            time: '16:00',
            isSelected: false
        },
        {
            time: '17:00',
            isSelected: false
        },
        {
            time: '18:00',
            isSelected: false
        },
        {
            time: '19:00',
            isSelected: false
        },
        {
            time: '20:00',
            isSelected: false
        },
        {
            time: '21:00',
            isSelected: false
        },
        {
            time: '22:00',
            isSelected: false
        },
        {
            time: '23:00',
            isSelected: false
        }
    ])

    // onClick toggle isSelected and add className selected
    const handleClick = (time) => {
        setTimes(times.map(t => {
            if (t.time === time) {
                t.isSelected = !t.isSelected
            }
            return t
        }))
        setFormDetails({ ...formDetails, time: getSelectedTimes() })
    }

    // function retunes array of selected times
    const getSelectedTimes = () => {
        return times.filter(t => t.isSelected).map(t => t.time)
    }


    return (
        <div className=''>
            {times.map(time => <button className={time.isSelected ? 'selected-button' : 'non-selected-button'} type="button" onClick={() => handleClick(time.time)} key={time.time}>{time.time}</button>)}
        </div>

    )
}

export default TimeSelect
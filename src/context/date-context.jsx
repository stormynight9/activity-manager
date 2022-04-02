import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

const dateContext = React.createContext({
    participants: 0,
    setParticipants: () => { },
    startDate: '',
    setStartDate: () => { },
    endDate: '',
    setEndDate: () => { },
    datesInterval: [],
});

export const DateContextProvider = (props) => {
    const [participants, setParticipants] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [datesInterval, setDatesInterval] = useState([])


    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate)
            const end = new Date(endDate)
            const dates = []
            while (start <= end) {
                dates.push(format(start, 'EEEE d MMM, yyyy'))
                start.setDate(start.getDate() + 1)
            }
            setDatesInterval(dates)
        }
    }, [startDate, endDate])

    return (
        <dateContext.Provider value={{
            participants: participants,
            setParticipants: setParticipants,
            startDate: startDate,
            setStartDate: setStartDate,
            endDate: endDate,
            setEndDate: setEndDate,
            datesInterval: datesInterval
        }}>
            {props.children}
        </dateContext.Provider>
    );
}

export default dateContext

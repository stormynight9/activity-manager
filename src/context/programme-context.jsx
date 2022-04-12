import { format, addDays } from "date-fns"
import React, { useCallback, useEffect, useState } from "react"

const programmeContext = React.createContext({
    participants: 0,
    setParticipants: () => { },
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 122),
    selectedStartDate: addDays(new Date(), 3),
    selectedEndDate: addDays(new Date(), 3),
    datesInterval: [],
    selectedDatesInterval: [],
    setSelectedDatesInterval: () => { },
    setStartDate: () => { },
    setEndDate: () => { },
    setSelectedStartDate: () => { },
    setSelectedEndDate: () => { },
    setDatesInterval: () => { },
})

export const ProgrammeContextProvider = (props) => {
    const [participants, setParticipants] = useState(0);
    const [startDate, setStartDate] = useState(addDays(new Date(), 3))
    const [endDate, setEndDate] = useState(addDays(new Date(), 122))
    const [selectedStartDate, setSelectedStartDate] = useState('')
    const [selectedEndDate, setSelectedEndDate] = useState('')
    const [datesInterval, setDatesInterval] = useState([])
    const [selectedDatesInterval, setSelectedDatesInterval] = useState([])


    console.log(datesInterval)
    console.log(selectedDatesInterval)


    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate)
            const end = new Date(endDate)
            const dates = []
            while (start <= end) {
                dates.push({
                    date: format(start, 'EEEE d MMM, yyyy'),
                    selected: false
                })
                start.setDate(start.getDate() + 1)
            }
            setDatesInterval(dates)
        }
    }, [startDate, endDate])

    useEffect(() => {
        if (selectedStartDate && selectedEndDate) {
            const start = new Date(selectedStartDate)
            const end = new Date(selectedEndDate)
            const dates = []
            while (start <= end) {
                dates.push({
                    date: format(start, 'EEEE d MMM, yyyy'),
                    selected: true
                })
                start.setDate(start.getDate() + 1)
            }
            setSelectedDatesInterval(dates)
        }
    }, [selectedStartDate, selectedEndDate])

    // change boolean seleced to true if date is in selectedDatesInterval
    const handleSelectedDatesInterval = useCallback((date) => {
        const newDatesInterval = [...datesInterval]
        newDatesInterval.forEach(d => {
            if (d.date === date) {
                d.selected = true
            }
        })
        setDatesInterval(newDatesInterval)
    }, [datesInterval])

    const resetDatesInterval = useCallback(() => {
        const newDatesInterval = [...datesInterval]
        newDatesInterval.forEach(d => {
            d.selected = false
        })
        setDatesInterval(newDatesInterval)
    })


    // loop through selectedDatesInterval and use handleSelectedDatesInterval to change boolean selected to true
    useEffect(() => {
        if (datesInterval.length > 0) {
            resetDatesInterval()
        }
        selectedDatesInterval.forEach(d => {
            handleSelectedDatesInterval(d.date)
        })
    }, [selectedDatesInterval])



    return (
        <programmeContext.Provider value={{
            participants: participants,
            setParticipants: setParticipants,
            startDate: startDate,
            endDate: endDate,
            selectedStartDate: selectedStartDate,
            selectedEndDate: selectedEndDate,
            datesInterval: datesInterval,
            selectedDatesInterval: selectedDatesInterval,
            setSelectedDatesInterval: setSelectedDatesInterval,
            setStartDate: setStartDate,
            setEndDate: setEndDate,
            setSelectedStartDate: setSelectedStartDate,
            setSelectedEndDate: setSelectedEndDate,
            setDatesInterval: setDatesInterval
        }}>
            {props.children}
        </programmeContext.Provider>
    );
}

export default programmeContext
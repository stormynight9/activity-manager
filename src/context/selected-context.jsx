import { createContext, useState } from 'react'
const SelectedContext = createContext({
    participants: 0,
    setParticipants: () => { },
    selectedDay: '',
    setSelectedDay: () => { },
    selectedTime: '',
    setSelectedTime: () => { },
})

export const SelectedContextProvider = (props) => {
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [participants, setParticipants] = useState(0)

    console.log(selectedTime)
    console.log(selectedDay)
    console.log(participants)


    return (
        <SelectedContext.Provider value={{
            participants: participants,
            setParticipants: setParticipants,
            selectedDay: selectedDay,
            setSelectedDay: setSelectedDay,
            selectedTime: selectedTime,
            setSelectedTime: setSelectedTime,
        }}>
            {props.children}
        </SelectedContext.Provider>
    )
}
export default SelectedContext

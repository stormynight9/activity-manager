import { createContext, useState } from 'react'

const SelectedContext = createContext({
    participants: 1,
    setParticipants: () => { },
    selectedDay: '',
    setSelectedDay: () => { },
    selectedTime: '',
    setSelectedTime: () => { },
})

export const SelectedContextProvider = (props) => {
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [participants, setParticipants] = useState(1)

    console.log(selectedTime)

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

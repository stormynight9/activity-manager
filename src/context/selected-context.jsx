import { createContext, useState } from 'react'
const SelectedContext = createContext({
    selectedDay: '',
    setSelectedDay: () => { },
    selectedTime: '',
    setSelectedTime: () => { },
})

export const SelectedContextProvider = (props) => {
    const [selectedDay, setSelectedDay] = useState('')
    const [selectedTime, setSelectedTime] = useState('')


    return (
        <SelectedContext.Provider value={{
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

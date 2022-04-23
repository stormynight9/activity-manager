import React, { useEffect, useState } from "react"

const programmeContext = React.createContext({
    participants: null,
    setParticipants: () => { },
    startDate: null,
    setStartDate: () => { },
    endDate: null,
    setEndDate: () => { },
    activities: [],
    addActivity: () => { },
    resetProgramme: () => { }
})

export const ProgrammeContextProvider = (props) => {
    const [participants, setParticipants] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [activities, setActivities] = useState([])

    const addActivity = (activity) => {
        setActivities([...activities, activity])
    }


    //reset the context fucntion 

    const resetProgramme = () => {
        setParticipants(null)
        setStartDate(null)
        setEndDate(null)
        setActivities([])
    }



    // create an object to store in localStorage and set it to the state of the programmeContext 
    const getProgramme = () => {
        const programme = JSON.parse(localStorage.getItem('programme'))
        if (programme) {
            setParticipants(programme.participants)
            setStartDate(programme.startDate)
            setEndDate(programme.endDate)
            setActivities(programme.activities)
        }
    }
    // set the state of the programmeContext to the localStorage
    const setProgramme = () => {
        localStorage.setItem('programme', JSON.stringify({
            participants: participants,
            startDate: startDate,
            endDate: endDate,
            activities: activities
        }))
    }



    // set the state of the programmeContext to the localStorage when the component is mounted
    useEffect(() => {
        getProgramme()
    }, [])

    // set the state of the programmeContext to the localStorage when the component is updated
    useEffect(() => {
        if (participants && startDate && endDate)
            setProgramme()
    }, [participants, startDate, endDate, activities])




    return (
        <programmeContext.Provider value={{
            participants: participants,
            setParticipants: setParticipants,
            startDate: startDate,
            setStartDate: setStartDate,
            endDate: endDate,
            setEndDate: setEndDate,
            activities: activities,
            addActivity: addActivity,
            resetProgramme: resetProgramme
        }}>
            {props.children}
        </programmeContext.Provider>
    )
}

export default programmeContext



// const programmeExample = {
//     participants: 3,
//     startDate: '12/12/2020',
//     endDate: '14/12/2020',
//     activities: [
//         {
//             id: 1,
//             participants: 3,
//             date: '12/12/2020',
//             time: '10:00',
//         }
//     ]
// }
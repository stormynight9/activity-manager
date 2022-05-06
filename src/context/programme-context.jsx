import { format } from "date-fns"
import React, { useEffect, useState } from "react"

const programmeContext = React.createContext({
    participants: null,
    setParticipants: () => { },
    startDate: null,
    setStartDate: () => { },
    endDate: null,
    setEndDate: () => { },
    activities: [],
    setActivities: () => { },
    addActivity: () => { },
    resetProgramme: () => { },
    datesInterval: [],
    setDatesInterval: () => { },
    deleteActivity: () => { }
})

export const ProgrammeContextProvider = (props) => {
    const [participants, setParticipants] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [activities, setActivities] = useState([])
    const [datesInterval, setDatesInterval] = useState([])

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate)
            const end = new Date(endDate)
            const dates = []
            while (start <= end) {
                dates.push(format(start, 'EE d MMM, yyyy'))
                start.setDate(start.getDate() + 1)
            }
            setDatesInterval(dates)
        }
    }, [startDate, endDate])


    const addActivity = (activity) => {
        setActivities([...activities, activity])
    }

    const deleteActivity = (id) => {
        const newActivities = activities.filter(activity => activity.id !== id)
        setActivities(newActivities)
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
        localStorage.removeItem('programme')
        localStorage.setItem('programme', JSON.stringify({
            participants: participants,
            startDate: startDate,
            endDate: endDate,
            activities: activities
        }))
    }

    //reset the context fucntion 
    const resetProgramme = () => {
        setParticipants(null)
        setStartDate(null)
        setEndDate(null)
        setActivities([])
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
            resetProgramme: resetProgramme,
            datesInterval: datesInterval,
            setDatesInterval: setDatesInterval,
            deleteActivity: deleteActivity,
            setActivities: setActivities
        }}>
            {props.children}
        </programmeContext.Provider>
    )
}

export default programmeContext

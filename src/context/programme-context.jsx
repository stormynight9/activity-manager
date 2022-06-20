import { format } from "date-fns"
import { fr } from "date-fns/locale"
import React, { useEffect, useState } from "react"

const programmeContext = React.createContext({
    participants: null,
    setParticipants: () => { },
    startDate: null,
    setStartDate: () => { },
    endDate: null,
    setEndDate: () => { },
    startDateFr: null,
    setStartDateFr: () => { },
    endDateFr: null,
    setEndDateFr: () => { },
    activities: [],
    setActivities: () => { },
    addActivity: () => { },
    resetProgramme: () => { },
    datesInterval: [],
    setDatesInterval: () => { },
    datesIntervalFr: [],
    setDatesIntervalFr: () => { },
    deleteActivity: () => { },
    programDetails: {},
})

// function capitalize first letter of every word
const capitalize = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export const ProgrammeContextProvider = (props) => {
    const [participants, setParticipants] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [startDateFr, setStartDateFr] = useState(null)
    const [endDateFr, setEndDateFr] = useState(null)
    const [activities, setActivities] = useState([])
    const [datesInterval, setDatesInterval] = useState([])
    const [datesIntervalFr, setDatesIntervalFr] = useState([])

    let programDetails = {
        participants,
        startDate,
        endDate,
        activities,
    }

    useEffect(() => {
        setStartDateFr(capitalize(format(new Date(startDate), 'd MMM, yyyy', { locale: fr })))
    }, [startDate])

    useEffect(() => {
        setEndDateFr(capitalize(format(new Date(endDate), 'd MMM, yyyy', { locale: fr })))
    }, [endDate])

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate)
            const end = new Date(endDate)
            const dates = []
            const datesFr = []
            while (start <= end) {
                dates.push(format(start, 'EE, dd MMMM yyyy'))
                datesFr.push(capitalize(format(start, 'EE dd MMMM yyyy', { locale: fr })))
                start.setDate(start.getDate() + 1)
            }
            setDatesInterval(dates)
            setDatesIntervalFr(datesFr)

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
        if (startDate && endDate)
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
            startDateFr: startDateFr,
            setStartDateFr: setStartDateFr,
            endDateFr: endDateFr,
            setEndDateFr: setEndDateFr,
            activities: activities,
            addActivity: addActivity,
            resetProgramme: resetProgramme,
            datesInterval: datesInterval,
            setDatesInterval: setDatesInterval,
            datesIntervalFr: datesIntervalFr,
            setDatesIntervalFr: setDatesIntervalFr,
            deleteActivity: deleteActivity,
            setActivities: setActivities,
            programDetails: programDetails
        }}>
            {props.children}
        </programmeContext.Provider>
    )
}

export default programmeContext

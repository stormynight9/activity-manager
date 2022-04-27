import { useContext, useEffect, useState } from "react"
import SelectedContext from "../../context/selected-context"
import programmeContext from "../../context/programme-context"
import { activities } from '../../constants/activities'
import SelectedActivity from "./SelectedActivity"
import EmptyActivity from "./EmptyActivity"



const ActivityHolder = (props) => {
    const programmeCtx = useContext(programmeContext)
    const selectedCtx = useContext(SelectedContext)
    const [selectedActivities, setSelectedActivities] = useState(programmeCtx.activities)
    const [selectedActivity, setselectedActivity] = useState(null)
    const activity = selectedActivity && activities.find(activity => activity.id === selectedActivity.activityId)


    // check if props id is in activities array
    const checkIfInArray = (id) => {
        // loop through activities array and check if id matches props id   
        for (let i = 0; i < selectedActivities.length; i++) {
            if (selectedActivities[i].id === id) {
                setselectedActivity(selectedActivities[i])
                return true
            }

        }
        return false
    }

    useEffect(() => {
        // check if selectedActivity is in selectedActivities array

        if (!checkIfInArray(props.id)) {
            setselectedActivity(null)
        }
    }, [selectedActivities])


    useEffect(() => {
        checkIfInArray(props.id)
        const newArr = [...programmeCtx.activities]
        setSelectedActivities(newArr)
    }, [programmeCtx.activities])

    const setSelectedDateTime = () => {
        selectedCtx.setSelectedDay(props.day)
        selectedCtx.setSelectedTime(props.time)
    }


    if (selectedActivity) {
        return <SelectedActivity activityId={selectedActivity.activityId} id={props.id} time={selectedActivity.time} activity={activity} setSelectedDateTime={setSelectedDateTime} />
    } else {
        return <EmptyActivity setSelectedDateTime={setSelectedDateTime} time={props.time} />
    }




}

export default ActivityHolder
import SwiperComponent from "./SwiperComponent"
import { Navigate, useParams } from "react-router-dom"
import { activities } from "../../constants/activities"

const Activity = () => {
    const { activityId } = useParams()
    const activity = activities.find(activity => activity.id === +activityId)

    if (!activity) {

        return <Navigate to="/categories" />
    }



    return (
        <div>
            <SwiperComponent images={activity.images} />
        </div>
    )
}

export default Activity
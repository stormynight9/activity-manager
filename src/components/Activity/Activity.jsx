import SwiperComponent from "./SwiperComponent"
import { useParams } from "react-router-dom"
import { activities } from "../../constants/activities"

const Activity = () => {
    const { activityId } = useParams()
    const activity = activities.find(activity => activity.id === +activityId)



    return (
        <div>
            <SwiperComponent images={activity.images} />
        </div>
    )
}

export default Activity
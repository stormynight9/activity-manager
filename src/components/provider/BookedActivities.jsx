import { useContext } from "react"
import DataContext from "../../context/data-context";

const BookedActivities = ({ bookedActivites, acceptActivity, refuseActivity }) => {
    const dataCtx = useContext(DataContext)

    //function get activity info from an id 
    const getActivityInfo = (id) => {
        const activity = dataCtx.activities.find(activity => activity.id === id)
        return activity
    }

    // function that sort bookedActivities array by date
    const sortedActivities = bookedActivites.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)

    // function that sort bookedActivities array by date


    return (
        <div>
            <table className="w-full shadow-md rounded-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase rounded-tl-md">Titre</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Nom Complet</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">No. Participants</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Date</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Temps</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Prix</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase rounded-tr-md">état</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedActivities.map((bookedActivity) => (
                        <tr key={bookedActivity.bookedActivityId}>
                            <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                                {getActivityInfo(bookedActivity.activityId).title}
                            </td>
                            <td className="p-3 capitalize font-medium text-gray-700 whitespace-nowrap text-center">
                                {bookedActivity.clientFullName}
                            </td>
                            <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                                {bookedActivity.participants}
                            </td>
                            <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">{bookedActivity.date}</td>
                            <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">{bookedActivity.time}</td>
                            <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">{bookedActivity.participants * getActivityInfo(bookedActivity.activityId).price} <span className='text-xs opacity-90'> TND</span> </td>
                            {bookedActivity.availability === 'pending' && <td className="p-3 text-sm text-gray-700 whitespace-nowrap space-x-1 text-center">
                                <button onClick={() => acceptActivity(bookedActivity.bookedActivityId)} className='primary-button py-2 w-24'>Accepter</button>
                                <button onClick={() => refuseActivity(bookedActivity.bookedActivityId)} className='secondary-button py-2 w-24'>Refuser</button></td>}
                            {bookedActivity.availability === 'accepted' && <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                                <span
                                    className="px-3 py-1 my-6 text-sm font-medium tracking-wider text-green-800 bg-green-200 rounded-3xl bg-opacity-50">Accepté</span>
                            </td>}
                            {bookedActivity.availability === 'refused' && <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                                <span
                                    className="px-3 py-1 text-sm font-medium tracking-wider text-red-800 bg-red-200 rounded-3xl bg-opacity-50">Refusé</span>
                            </td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default BookedActivities
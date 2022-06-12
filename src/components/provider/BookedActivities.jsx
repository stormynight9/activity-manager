
const BookedActivities = ({ bookedActivites }) => {
    return (
        <div>
            <table className="w-full shadow-md rounded-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase rounded-tl-md">Title</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Full Name</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">No. Participants</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Date</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Time</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase">Price</th>
                        <th className="p-3 text-sm font-semibold tracking-wide  uppercase rounded-tr-md">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                            <p className="font-medium">Murder party en visio</p>
                        </td>
                        <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                            Nader Ferjani
                        </td>
                        <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                            2
                        </td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">16/10/2021</td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">10:00</td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">$200</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap space-x-1 text-center"><button className='primary-button py-2 w-24'>Accepter</button><button className='secondary-button py-2 w-24'>Refuser</button></td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                            <p className="font-medium">Murder party en visio</p>
                        </td>
                        <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                            Nader Ferjani
                        </td>
                        <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                            2
                        </td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">16/10/2021</td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">10:00</td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">$200</td>

                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                            <span
                                className="px-3 py-1 text-sm font-medium tracking-wider text-green-800 bg-green-200 rounded-3xl bg-opacity-50">Accepté</span>
                        </td>

                    </tr>
                    <tr className="bg-white">
                        <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                            <p className="font-medium">Murder party en visio</p>
                        </td>
                        <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                            Nader Ferjani
                        </td>
                        <td className="p-3 font-medium text-gray-700 whitespace-nowrap text-center">
                            2
                        </td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">16/10/2021</td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">10:00</td>
                        <td className="p-3 text-gray-700 whitespace-nowrap font-medium text-center">$200</td>

                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                            <span
                                className="px-3 py-1 text-sm font-medium tracking-wider text-red-800 bg-red-200 rounded-3xl bg-opacity-50">Refusé</span>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default BookedActivities
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/data-context'
import Activity from './Activity'

const ActivityList = () => {

    const dataCtx = useContext(DataContext)


    const activityList = dataCtx.activities.slice(0, 5)

    return (
        <section className='flex flex-wrap max-w-screen-xl mt-14 mx-auto  items-baseline justify-center '>
            <div className='text-center space-y-4'>
                <h2 className='text-gray-800 font-semibold mb-14 text-3xl md:text-4xl'>
                    La selection de
                    <span className='text-hobbizer'> Tunisie Séjours </span>
                </h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-2'>
                {activityList.map((activity) => {
                    return <Activity key={activity.id} id={activity.id} coverImage={activity.coverImage} title={activity.title} description={activity.description} price={activity.price} />
                })}
            </div>
            <div className='p-4 w-full sm:w-auto'>
                <Link to={'/categories'} className='px-10 py-3.5 w-full mt-12 text-gray-500 text-center border rounded-md duration-300 hover:text-rose-600 hover:shadow block sm:w-auto'>En savoir plus</Link>
            </div>
        </section>
    )
}

export default ActivityList
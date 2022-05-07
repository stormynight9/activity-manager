import { Link, Navigate, NavLink, useParams } from 'react-router-dom'
import { activities } from '../../constants/activities'
import { categories } from '../../constants/categories'
import Timeline from '../shared/Timeline'

const Activities = () => {
    const { categoryId } = useParams()
    const category = categories.find(category => category.id === +categoryId)
    if (!category) {
        return <Navigate to="/categories" />
    }

    const activitiesByCategory = activities.filter(activity => category.activities.includes(activity.id))

    return (
        <div className='flex justify-center mb-7 mt-36'>
            <div className='max-w-7xl w-full'>
                <Timeline />
                <main className='flex justify-start md:ml-6'>
                    <div className='hidden lg:flex flex-col border-r-[1px]  border-r-gray-200 shrink-0'>
                        {categories.map(category => (
                            <NavLink to={`/categories/${category.id}`} className={(navData) => navData.isActive ? 'py-3 px-6 bg-hobbizer text-white' : 'py-3 px-6  hover:bg-hobbizer hover:text-white'} key={category.id}>{category.title}</NavLink>
                        ))}
                    </div>
                    <div className='p-4'>
                        <div className='flex gap-2 flex-wrap justify-center md:justify-start'>
                            {activitiesByCategory.map(activity => (
                                <Link to={`/activities/${activity.id}`} key={activity.id} className='relative max-w-xs group flex flex-col border-[1px] rounded-md shadow-sm '>
                                    <img className='object-cover h-44 rounded-t-md group-hover:brightness-75 duration-200' src={activity.coverImage} alt="" />
                                    <span className='absolute rounded-tl-md rounded-br-md top-0 left-0 bg-[#000000AA] group-hover:bg-hobbizer duration-200 p-2 text-white text-2xl font-bold'>{activity.price} TND<span className='text-base'>/pers</span></span>
                                    <span className='p-1 font-medium text-center my-auto'>{activity.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )

}

export default Activities


/*
// admin
// prestateur de services
// client

table compte : backoffice - admin
                client
                prestateur -> ynajem y7ot des activities

participants: adultes, enfants
prestateur ynajem ychouf les réservations
paiement - facture 

// reservation
// galerie




*/
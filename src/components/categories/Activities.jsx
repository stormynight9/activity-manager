import { useParams, NavLink } from 'react-router-dom'
import { activities } from '../../constants/activities'
import { categories } from '../../constants/categories'
const Activities = () => {

    const { categoryId } = useParams()
    const category = categories.find(category => category.id === +categoryId)
    const activitiesByCategory = activities.filter(activity => category.activities.includes(activity.id))

    return (
        <div className='flex justify-center mb-7'>
            <div className='max-w-7xl'>
                <div className='flex justify-between mb-8'> {/* header */}
                    <div className='flex flex-col p-3'>
                        <div className='flex items-center'>
                            <span className='text-3xl'>Lundi 4 avril 2022</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-3xl text-hobbizer-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className='text-3xl text-hobbizer'>Matin</span>
                        </div>
                        <p className='mt-2 text-gray-600'>Sélectionnez votre activité pour votre lundi matin</p>
                    </div>

                </div>
                <main className='flex justify-start'>
                    <div className='flex flex-col border-r-[1px] border-r-gray-200'>
                        {categories.map(category => (
                            <NavLink to={`/categories/${category.id}`} className={(navData) => navData.isActive ? 'py-3 px-6 bg-hobbizer text-white' : 'py-3 px-6  hover:bg-hobbizer hover:text-white'} key={category.id} href="javascript:void(0)">{category.title}</NavLink>
                        ))}
                    </div>
                    <div className='p-4 '>
                        <div className='flex gap-2 flex-wrap'>
                            {activitiesByCategory.map(activity => (
                                <a key={activity.id} href="javascript:void(0)" className='relative max-w-xs group flex flex-col border-[1px] rounded-md shadow-sm '>
                                    <img className='object-cover h-44 rounded-t-md group-hover:brightness-75 duration-200' src={activity.coverImage} alt="" />
                                    <span className='absolute rounded-tl-md rounded-br-md top-0 left-0 bg-[#000000AA] group-hover:bg-hobbizer duration-200 p-2 text-white text-3xl font-bold'>{activity.price}$<span className='text-base'>/pers</span></span>
                                    <span className='p-1 font-medium text-center my-auto'>{activity.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )

}

export default Activities
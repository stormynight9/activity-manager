import { categories } from "../constants/categories"
const Categories = () => {
    return (
        <main className='flex items-center flex-col mb-8'>
            <div>
                <div className='flex  mb-8'> {/* header */}
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
                <div className='max-w-7xl'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                        {categories.map(category => (
                            <a key={category.id} href="javascript:void(0)" className='relative max-w-sm group flex flex-col border-[1px] rounded-md shadow-sm '>
                                <img className='object-cover h-44 rounded-t-md group-hover:brightness-75 duration-300' src={category.image} alt="" />

                                <span className='p-1 font-medium text-center my-auto'>{category.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Categories

const ActivityHolder = () => {
    return (
        <a className='w-56 h-28 bg-gray-200 hover:bg-hobbizer duration-200 rounded-md flex cursor-pointer justify-center items-center group'>
            <div className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 duration-200 text-hobbizer group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <p className='group-hover:text-white duration-200'>Add an activity</p>
            </div>
        </a>
    )
}

export default ActivityHolder
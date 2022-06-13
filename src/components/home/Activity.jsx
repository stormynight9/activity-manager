import { Link } from "react-router-dom"

const Activity = (props) => {
    return (
        <div className="flex flex-col m-1 justify-between bg-white rounded-lg border h-full border-gray-200 shadow-md ">
            <div className='h-60'>
                <img className="rounded-t-lg object-cover w-full h-full" src={props.coverImage} alt="" />
            </div>
            <div className="p-5 mb-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-700 line-clamp-4">{props.description}</p>
            </div>
            <div className="pb-5 pr-5 pl-5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <p className='font-semibold text-3xl'>
                        {props.price}<span className='text-sm font-normal'>TND</span>
                    </p>
                    <Link to={`/activities/${props.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg bg-hobbizer hover:bg-hobbizer-dark transition-colors duration-300  ">
                        Savoir plus
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Activity
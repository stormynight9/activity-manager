import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useContext } from "react";
import programmeContext from "../../context/programme-context";

const SelectedActivity = (props) => {

    const programmeCtx = useContext(programmeContext)
    const deleteActivity = () => {
        programmeCtx.deleteActivity(props.id)
    }

    return (<div style={{
        backgroundImage: `url(${props.activity.coverImage})`
    }} className='sm:w-52 relative h-28 bg-cover hover:bg-hobbizer duration-200 rounded-md flex cursor-pointer justify-center items-center group'>
        <Link to={`/activities/${+props.activityId}`} onClick={props.setSelectedDateTime}>
            <div className='flex justify-center items-center bg-[#00000080] absolute top-0 bottom-0 right-0 left-0 rounded-md'>
                <div className='flex flex-col text-center items-center gap-1 text-white z-10'>
                    <p className='font-medium text-lg'>{props.activity.shortTitle}</p>
                    <p>{props.time.replace(':', 'h')}</p>
                </div>
            </div>
        </Link>
        <div className='absolute right-0 bottom-0 z-10'>
            <button className='bg-white p-[6px] m-1 rounded-sm text-sm text-hobbizer-dark hover:bg-hobbizer hover:text-white duration-200'><FaPencilAlt /></button>
            <button onClick={deleteActivity} className='bg-white p-[6px] m-1 rounded-sm text-sm text-hobbizer-dark hover:bg-hobbizer hover:text-white duration-200'><FaTrashAlt /></button>
        </div>
    </div>);
}

export default SelectedActivity
import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import programmeContext from '../../context/programme-context';

const CartElement = ({ item }) => {

    const programmeCtx = useContext(programmeContext)
    const deleteActivity = () => {
        programmeCtx.deleteActivity(item.id)
    }
    return (
        <div className='flex flex-col md:flex-row md:items-center justify-center  bg-white p-4'>
            <div className='flex justify-between mb-2 md:mb-0'>
                <img className='h-28 rounded-md mr-4' src={item.image} alt={item.title} />
                <p className='md:hidden text-gray-900 text-3xl font-semibold'>{item.price * item.participants} TND</p>
            </div>
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h2 className='text-gray-900 text-xl capitalize font-medium '>{item.title}</h2>
                    <p className='hidden md:block text-gray-900 text-3xl font-semibold'>{item.price * item.participants} TND</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-medium'>{item.date} | {item.time}</p>
                        <p className='text-[#707070] text-xs'><span className='font-medium text-slate-900 text-xl'>{item.price}</span>TND/pers</p>
                        <p className='text-[#707070]'>Participants: <span className='text-slate-900'>{item.participants}</span></p>
                    </div>
                    <div onClick={deleteActivity} className='flex justify-center gap-2 text-red-600 font-medium items-center mt-auto cursor-pointer'>
                        <FaTrashAlt /> Supprimer
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartElement
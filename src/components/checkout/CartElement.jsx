import { FaTrashAlt } from 'react-icons/fa';

const CartElement = () => {
    return (
        <div className='flex flex-col md:flex-row md:items-center justify-center  bg-white p-4'>
            <div className='flex justify-between mb-2 md:mb-0'>
                <img className='h-28 rounded-md mr-4' src="https://hobbizer.com/media/cache/activity/images/activity/list/5fbd0b1872680_DEGUSTATION-VIN-VISIO-HOBBIZER.jpg" alt="" />
                <p className='md:hidden text-gray-900 text-3xl font-semibold'>24 TND</p>
            </div>
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h2 className='text-gray-900 text-xl capitalize font-medium '>Dégustation interactive de vins</h2>
                    <p className='hidden md:block text-gray-900 text-3xl font-semibold'>24 TND</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-medium'>12/05/2022 | 08:00</p>
                        <p className='text-[#707070] text-xs'><span className='font-medium text-slate-900 text-xl'>12</span>TND/pers</p>
                        <p className='text-[#707070]'>Participants: <span className='text-slate-900'>2</span></p>
                    </div>
                    <div className='flex justify-center gap-2 text-red-600 font-medium items-center mt-auto cursor-pointer'>
                        <FaTrashAlt className='' /> Supprimer
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartElement
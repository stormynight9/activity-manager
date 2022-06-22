import { CgProfile } from 'react-icons/cg'
import { FiSave } from 'react-icons/fi'
import { BiCalendarCheck } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import UserContext from '../../context/user-context'
import { useContext } from 'react'

const ProfileSidebar = () => {
    const userCtx = useContext(UserContext)

    return (
        <div className='border-[1px] profile-sidebar-height flex flex-col justify-between bg-white sticky w-auto top-32 rounded-tl-md rounded-bl-md'>
            <div className='p-4 w-full'>
                <ul className='space-y-4'>
                    <li className=''>
                        <NavLink to={'/profile/edit'} className={(navData) => navData.isActive ? 'flex p-3 secondary-button items-center space-x-1 text-lg' : 'flex p-3 rounded-md duration-200 hover:text-hobbizer font-medium items-center space-x-1 text-lg  text-gray-600 hover:bg-hobbizer-green'}>
                            <CgProfile size={25} />
                            <span>Informations personnelles</span>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink to={'/profile/saved'} className={(navData) => navData.isActive ? 'flex p-3 secondary-button items-center space-x-1 text-lg' : 'flex p-3 rounded-md duration-200 hover:text-hobbizer font-medium items-center space-x-1 text-lg  text-gray-600 hover:bg-hobbizer-green'}>
                            <FiSave size={25} />
                            <span>Programmes sauvegardés</span>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink to={'/profile/validated'} className={(navData) => navData.isActive ? 'flex p-3 secondary-button items-center space-x-1 text-lg' : 'flex p-3 rounded-md duration-200 hover:text-hobbizer font-medium items-center space-x-1 text-lg  text-gray-600 hover:bg-hobbizer-green'}>
                            <BiCalendarCheck size={25} />
                            <span>Programmes validés</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='border-t-[1px] p-4 pt-1'>
                <p className='capitalize mt-2 text-gray-900 font-medium'>{userCtx.userDetails.firstName + ' ' + userCtx.userDetails.lastName}</p>
                <p className='text-gray-500'>{userCtx.userDetails.email}</p>
            </div>
        </div>
    )
}

export default ProfileSidebar
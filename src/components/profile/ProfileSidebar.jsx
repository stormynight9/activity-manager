import { CgProfile } from 'react-icons/cg'
import { FiSave } from 'react-icons/fi'
import { BiCalendarCheck } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const ProfileSidebar = () => {
    return (
        <div>
            <div>
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
        </div>
    )
}

export default ProfileSidebar
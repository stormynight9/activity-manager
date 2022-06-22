import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import UserContext from '../context/user-context'

const ProfilePage = () => {
    const userCtx = useContext(UserContext)

    return (
        <div className='flex mt-40 mb-8  max-w-6xl mx-auto  border-[1px] rounded-md bg-gray-50'>
            <div className='w-[30%]'>
                <ProfileSidebar />
            </div>
            <div className=' flex-1'>
                {/* <h2 className='text-3xl text-gray-700 capitalize'>Bienvenu <span className='text-gray-800 font-medium'>{userCtx.userDetails.firstName + ' ' + userCtx.userDetails.lastName}</span></h2> */}
                <Outlet />
            </div>


        </div>
    )
}

export default ProfilePage
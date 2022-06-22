import { Outlet } from 'react-router-dom'
import ProfileSidebar from '../components/profile/ProfileSidebar'

const ProfilePage = () => {

    return (
        <div className='flex mt-40 mb-8  max-w-6xl mx-auto  rounded-md bg-gray-50'>
            <div className='w-[30%] relative'>
                <ProfileSidebar />
            </div>
            <div className=' flex-1 border-r-[1px] border-t-[1px] border-b-[1px] rounded-tr-md rounded-br-md'>
                {/* <h2 className='text-3xl text-gray-700 capitalize'>Bienvenu <span className='text-gray-800 font-medium'>{userCtx.userDetails.firstName + ' ' + userCtx.userDetails.lastName}</span></h2> */}
                <Outlet />
            </div>


        </div>
    )
}

export default ProfilePage
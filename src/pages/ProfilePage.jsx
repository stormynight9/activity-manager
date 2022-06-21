import { Outlet } from 'react-router-dom'
import ProfileSidebar from '../components/profile/ProfileSidebar'

const ProfilePage = () => {
    return (
        <div className='flex mt-36 p-4 max-w-6xl mx-auto bg-white rounded-md shadow-md'>
            <div>
                <ProfileSidebar />
            </div>
            <div className='p-4'>
                Bienvenu User_Name
                <Outlet />
            </div>


        </div>
    )
}

export default ProfilePage
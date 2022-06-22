import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProviderForm from '../components/provider/ProviderForm'
import Sidebar from '../components/provider/Sidebar'
import { auth } from '../firebase-config'

const ProviderPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (auth.currentUser.displayName !== 'provider') {
            navigate('/')
        }
    }, [navigate])

    if (auth.currentUser.displayName !== 'provider') {
        return <></>
    }

    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='w-full m-4 max-w-4xl flex flex-col mx-auto p-4 bg-white rounded-md shadow-md'>
                    <ProviderForm />
                </div>
            </div>
        </>
    )
}

export default ProviderPage
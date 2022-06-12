import ProviderForm from '../components/provider/ProviderForm'
import Sidebar from '../components/provider/Sidebar'

const ProviderPage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full m-4 max-w-4xl flex flex-col mx-auto p-4 bg-white rounded-md shadow-md'>
                <ProviderForm />
            </div>
        </div>
    )
}

export default ProviderPage
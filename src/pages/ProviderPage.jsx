import React from 'react'
import ProviderForm from '../components/provider/ProviderForm'
import Sidebar from '../components/provider/Sidebar'
import TextEditor from '../components/provider/TextEditor'

const ProviderPage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            {/* <ProviderForm /> */}
            <TextEditor />
        </div>
    )
}

export default ProviderPage
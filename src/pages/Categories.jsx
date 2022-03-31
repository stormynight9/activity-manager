import React from 'react'
import CategoriesContainer from '../components/CategoriesContainer'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'

const Categories = () => {
    return (
        <div className='mt-36'>
            <Modal />
            <Navbar />
            <CategoriesContainer />
            <Footer />
        </div>

    )
}

export default Categories
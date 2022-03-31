import React from 'react'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
const CategoriesPage = () => {
    return (
        <div className='mt-36'>
            <Modal />
            <Navbar />
            <Categories />
            <Footer />
        </div>

    )
}

export default CategoriesPage
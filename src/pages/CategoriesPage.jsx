import React from 'react'
import Footer from '../components/shared/Footer'
import Modal from '../components/shared/Modal'
import Navbar from '../components/shared/Navbar'
import Categories from '../components/categories/Categories'
const CategoriesPage = () => {
    return (
        <div className='mt-36'>
            <Modal />
            <Categories />
        </div>

    )
}

export default CategoriesPage
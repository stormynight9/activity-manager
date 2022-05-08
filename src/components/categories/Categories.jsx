import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../firebase-config"
import Timeline from "../shared/Timeline"

const Categories = () => {
    const [categories, setCategories] = useState([])
    const categoriesCollectionRef = collection(db, 'categories')
    console.log(categories)

    useEffect(() => {
        const getCategories = async () => {
            const data = await getDocs(categoriesCollectionRef)
            setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getCategories()
    }, [])

    return (
        <main className='flex items-center flex-col mb-8'>
            <div>
                <Timeline />
                <div className='max-w-7xl'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                        {categories.map(category => (
                            <Link to={`/categories/${category.id}`} key={category.id} className='relative max-w-sm group flex flex-col border-[1px] rounded-md shadow-sm '>
                                <img className='object-cover h-44 rounded-t-md group-hover:brightness-75 duration-300' src={category.image} alt="" />
                                <span className='p-1 font-medium text-center my-auto'>{category.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Categories
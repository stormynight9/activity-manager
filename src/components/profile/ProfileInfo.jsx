import { doc, updateDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import UserContext from '../../context/user-context'
import { db } from '../../firebase-config'

const ProfileInfo = () => {
    const userCtx = useContext(UserContext)
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        phone: '',
        birthDate: '',
    })

    console.log(formDetails)

    useEffect(() => {
        setFormDetails({
            firstName: userCtx.userDetails.firstName,
            lastName: userCtx.userDetails.lastName,
            address: userCtx.userDetails?.address,
            city: userCtx.userDetails?.city,
            country: userCtx.userDetails?.country,
            phone: userCtx.userDetails?.phone,
            birthDate: userCtx.userDetails?.birthDate,
        })
    }, [userCtx.userDetails])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // new object with no undefined values
        const newDetails = Object.keys(formDetails).reduce((acc, key) => {
            const _acc = acc;
            if (formDetails[key] !== undefined) _acc[key] = formDetails[key];
            return _acc;
        }, {})

        await updateDoc(doc(db, 'users', userCtx.user.uid), newDetails)
        toast.success('Informations modifiées avec succès')
    }

    return (
        <>
            <p className='text-lg font-medium'>Changer vos informations ici</p>
            <form onSubmit={onSubmitHandler} className='mt-6 info'>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Prénom</label>
                        <input defaultValue={formDetails.firstName} onChange={(e) => setFormDetails({ ...formDetails, firstName: e.target.value })} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Nom</label>
                        <input defaultValue={formDetails.lastName} onChange={(e) => setFormDetails({ ...formDetails, lastName: e.target.value })} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Doe" required />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">Adresse</label>
                        <input defaultValue={formDetails.address} onChange={(e) => setFormDetails({ ...formDetails, address: e.target.value })} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Adresse" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Numéro de téléphone</label>
                        <input defaultValue={formDetails.phone} onChange={(e) => setFormDetails({ ...formDetails, phone: +e.target.value })} type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="12345678" />
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Ville</label>
                        <input defaultValue={formDetails.city} onChange={(e) => setFormDetails({ ...formDetails, city: e.target.value })} type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Ville" />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Pays</label>
                        <input defaultValue={formDetails.country} onChange={(e) => setFormDetails({ ...formDetails, country: e.target.value })} type="text" id="visitors" lang="fr-CA" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Date de naissance</label>
                        <input type="date" defaultValue={formDetails.birthDate} onChange={(e) => setFormDetails({ ...formDetails, birthDate: e.target.value })} max="2016-12-31" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                    </div>
                </div>
                <button type="submit" className="primary-button px-4 py-2">Valider</button>
            </form>
        </>
    )
}

export default ProfileInfo
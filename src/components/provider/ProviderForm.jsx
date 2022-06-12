import { addDoc, arrayUnion, collection, doc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import ImageUploader from "react-images-upload";
import { v4 } from 'uuid';
import { db, storage } from '../../firebase-config';
import TextEditor from './TextEditor';
import TimeSelect from './TimeSelect';
import { updateDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import { useContext } from 'react';
import UserContext from '../../context/user-context';

const ProviderForm = (props) => {
    const [formDetails, setFormDetails] = useState({
        title: null,
        location: null,
        catchPhrase: null,
        price: null,
        duration: null,
        range: [1, 100],
        category: null,
        time: [],
        description: null,
        details: null,
        coverImage: null,
        images: [],
    })
    const userCtx = useContext(UserContext);
    const [loading, setLoading] = useState(false)

    const onDrop = picture => {
        setPictures(picture);
    };

    const [coverImage, setCoverImage] = useState(null);
    const uploadCoverImage = async (activityRef) => {
        if (coverImage == null) return null
        const imageRef = ref(storage, `coverImages/${coverImage.name + v4()}`);
        await uploadBytes(imageRef, coverImage).then(async (e) => {
            await getDownloadURL(e.ref).then(async (e) => {
                await updateDoc(activityRef, { coverImage: e })
                return e
            })
        })

    }

    const [pictures, setPictures] = useState([]);
    const uploadImages = async (activityRef) => {
        if (pictures.length === 0) return null
        let images = []
        for (const picture of pictures) {
            const imageRef = ref(storage, `images/${picture.name + v4()}`);
            await uploadBytes(imageRef, picture).then(async (e) => {
                await getDownloadURL(e.ref).then((e) => {
                    images.push(e)
                })
            })
        }
        await updateDoc(activityRef, { images: images })
    }


    const submitHandler = async (e) => {
        setLoading(true)
        e.preventDefault();
        const activityRef = await addDoc(collection(db, 'activities'), {
            ...formDetails,
            providerId: userCtx.user.uid
        });
        try {
            await uploadCoverImage(activityRef);
        } catch {
            console.log("Error uploading cover image")
        }
        try {
            await uploadImages(activityRef);
        } catch {
            console.log("Error uploading images")
        }
        try {
            await updateDoc(doc(db, 'categories', formDetails.category), {
                activities: arrayUnion(activityRef.id)
            })
        } catch {
            console.log("Error updating category")
        }
        toast('La demande a été envoyée', {
            type: 'success',
            position: "bottom-center",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        setLoading(false)
    }

    return (
        <form onSubmit={submitHandler}>
            <h2 className='block mb-8 text-center text-2xl font-medium text-gray-900'>Remplissez la formulaire avec les informations de l'activité que vous voulez ajouter.</h2>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                        Titre de l'activité
                    </label>
                    <input
                        onChange={(e) => setFormDetails({ ...formDetails, title: e.target.value })}
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Saisir le titre de l'activité"
                        required=""
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                        Emplacement
                    </label>
                    <input
                        onChange={(e) => setFormDetails({ ...formDetails, location: e.target.value })}
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Tunis"
                        required=""
                    />
                </div>

            </div>
            <div className="mb-6">
                <label htmlFor="slogan" className="block mb-2 text-sm font-medium text-gray-900">
                    Slogan
                </label>
                <input
                    onChange={(e) => setFormDetails({ ...formDetails, catchPhrase: e.target.value })}
                    type="text"
                    id="slogan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Faire du ciel le plus bel endroit de la terre"
                    required=""
                />
            </div>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                        Prix
                    </label>
                    <input
                        onChange={(e) => setFormDetails({ ...formDetails, price: +e.target.value })}
                        min="0"
                        type="number"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="60 TND"
                        required=""
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                        Durée en minutes
                    </label>
                    <input
                        onChange={(e) => setFormDetails({ ...formDetails, duration: +e.target.value })}
                        type="number"
                        min="0"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
                        placeholder="120 minutes"
                        required=""
                    />
                </div>
                <div className='flex mb-4 justify-between space-x-2'>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-xs font-medium text-gray-900 ">Nombre minimum de participants</label>
                        <input
                            onChange={(e) => setFormDetails({ ...formDetails, range: [+e.target.value, formDetails.range[1]] })}
                            type="number"
                            min="1"
                            max="100"
                            defaultValue={1}
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 "
                            placeholder="1"
                            required=""
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-xs font-medium text-gray-900 ">
                            Nombre maximum de participants
                        </label>
                        <input
                            onChange={(e) => setFormDetails({ ...formDetails, range: [formDetails.range[0], +e.target.value] })}
                            type="number"
                            min="1"
                            max="100"
                            defaultValue={100}
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="100"
                            required=""
                        />
                    </div>

                </div>
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Choisir une catégorie</label>
                    <select onChange={(e) => setFormDetails({ ...formDetails, category: e.target.value })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        {/* TODO: CHANGE THESE */}
                        <option value="JnCEGykVuJkZR7LgoiV4">Expériences digitales</option>
                        <option value="LS1vtCoFNeJmnKxIVLHs">Team building</option>
                        <option value="U2YuOHXMpSRtIDDFnr7y">EVJF</option>
                        <option value="vLds17PddaUVsX6Uy13q">EVG</option>
                    </select>
                </div>
            </div>
            <div className='mb-6'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Horaire</label>
                <TimeSelect setFormDetails={setFormDetails} formDetails={formDetails} />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Image de couverture</label>
                <input onChange={(e) => setCoverImage(e.target.files[0])} className="block w-full  rounded-tr-md rounded-br-md text-sm text-gray-900 bg-gray-50  border-b border-t border-r border-gray-300 cursor-pointer" id="file_input" type="file" />
            </div>
            <div className='mt-6'>
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Images</label>
                <ImageUploader
                    withIcon={true}
                    onChange={onDrop}
                    maxFileSize={9242880}
                    label='Formats acceptés: jpg, jpeg, png'
                    imgExtension={[".jpg", ".jpeg", ".png",]}
                    withPreview={true}
                    buttonText='Choisir des images'
                />
            </div>
            <div className='mt-6'>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <textarea onChange={(e) => setFormDetails({ ...formDetails, description: e.target.value })} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Votre description..." defaultValue={""} />
            </div>
            <div className='mt-6'>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Details</label>
                <TextEditor setFormDetails={setFormDetails} formDetails={formDetails} />
            </div>
            <button
                type="submit"
                className=" w-full sm:w-auto px-5 py-2.5 primary-button">
                {!loading ? 'Envoyer demande' : <svg className="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>}
            </button>
        </form>

    )
}

export default ProviderForm
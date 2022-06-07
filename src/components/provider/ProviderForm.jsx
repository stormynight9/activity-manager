import React, { useState } from 'react';
import ImageUploader from "react-images-upload";
import Range from './Range';
import TextEditor from './TextEditor';

const ProviderForm = (props) => {
    const [pictures, setPictures] = useState([]);

    console.log(pictures);
    const onDrop = picture => {
        console.log('yo')
        setPictures(picture);
    };

    return (
        <form>
            <h2 className='block mb-8 text-center text-2xl font-medium text-gray-900'>Remplissez la formulaire avec les informations de l'activité que vous voulez ajouter.</h2>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                        Titre de l'activité
                    </label>
                    <input
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
                        type="number"
                        min="0"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="120 minutes"
                        required=""
                    />
                </div>
            </div>
            <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre de participants</label>
                <Range />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 d"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="•••••••••"
                    required=""
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Confirm password
                </label>
                <input
                    type="password"
                    id="confirm_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="•••••••••"
                    required=""
                />
            </div>
            <div>
                <ImageUploader
                    withIcon={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    withPreview={true}
                    buttonText='Choisir des images'
                />
            </div>
            <TextEditor />
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
                Submit
            </button>
        </form>

    )
}

export default ProviderForm
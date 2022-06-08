import React, { useState } from 'react';
import ImageUploader from "react-images-upload";
import Range from './Range';
import TextEditor from './TextEditor';
import TimeSelect from './TimeSelect';

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
                <div className='mb-4'>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre de participants</label>
                    <Range />
                </div>
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Choisir une catégorie</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
                <TimeSelect />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Image de couverture</label>
                <input className="block w-full  rounded-tr-md rounded-br-md text-sm text-gray-900 bg-gray-50  border-b border-t border-r border-gray-300 cursor-pointer" id="file_input" type="file" />
            </div>
            <div className='mt-6'>
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">Images</label>
                <ImageUploader
                    withIcon={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    withPreview={true}
                    buttonText='Choisir des images'
                />
            </div>
            <div className='mt-6'>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message..." defaultValue={""} />
            </div>
            <div className='mt-6'>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Details</label>
                <TextEditor />
            </div>
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
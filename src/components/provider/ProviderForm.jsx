import React from 'react'
import TextEditor from './TextEditor'

const ProviderForm = () => {
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
                        Slogan
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Faire du ciel le plus bel endroit de la terre"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Flowbite"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Phone number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="website"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Website URL
                    </label>
                    <input
                        type="url"
                        id="website"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="flowbite.com"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="visitors"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Unique visitors (per month)
                    </label>
                    <input
                        type="number"
                        id="visitors"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder=""
                        required=""
                    />
                </div>
            </div>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="john.doe@company.com"
                    required=""
                />
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
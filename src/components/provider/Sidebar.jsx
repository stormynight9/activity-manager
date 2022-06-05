import React from 'react'
import { CgAdd, CgList, CgLogOff, CgPlayListCheck } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="flex h-screen flex-col top-0 left-0 w-64 bg-white border-r">
            <div className="flex items-center justify-center h-16 border-b">
                <div>
                    <img src="https://svgur.com/i/hbu.svg" width={120} alt="Float UI logo" />
                </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    <li>
                        <Link
                            to="/add-activity"
                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-hobbizer pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                                <CgAdd className='w-5 h-5' />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Ajouter une activité
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/activity-list"
                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-hobbizer pr-6"
                        >
                            <span className="inline-flex justify-center items-center ml-4">
                                <CgList className='w-5 h-5' />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Liste des activités</span>
                            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-hobborder-hobbizer bg-indigo-50 rounded-full">
                                New
                            </span>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-hobbizer pr-6"
                        >
                            <span className="inline-flex justify-center items-center ml-4">
                                <CgPlayListCheck className='w-5 h-5' />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Activités réservées
                            </span>
                            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                                15
                            </span>
                        </a>
                    </li>
                    <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                            <div className="text-sm font-light tracking-wide text-gray-500">
                                Settings
                            </div>
                        </div>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-hobbizer pr-6"
                        >
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-hobbizer pr-6"
                        >
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Settings
                            </span>
                        </a>
                    </li>
                    <li>
                        <button
                            href="#"
                            className="relative flex flex-row items-center w-full h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-hobbizer pr-6"
                        >
                            <span className="inline-flex justify-center items-center ml-4">
                                <CgLogOff className='w-5 h-5' />
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Déconnexion</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar
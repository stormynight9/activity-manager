import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/admin/Card'
import Sidebar from '../components/provider/Sidebar'

const AdminPage = () => {
    return (
        <div>
            <aside
                className="z-20 w-64 overflow-y-auto bg-white flex-shrink-0 h-screen shadow-md rounded-md"
            >
                <div className="py-4 text-gray-500 ">
                    <div className='flex justify-center items-center'>
                        <Link to={'/'}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/pfe-95fff.appspot.com/o/NADER-02.svg?alt=media&token=7ff0dc8a-1b01-4e7f-863b-1aa595e360d0" width={120} alt="Float UI logo" />
                        </Link>
                    </div>
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <span className="absolute inset-y-0 left-0 w-1 bg-hobbizer rounded-tr-lg rounded-br-lg"></span>
                            <Link to={'/admin'}
                                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800  "
                                href="index.html"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    ></path>
                                </svg>
                                <span className="ml-4">Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                                href="forms.html"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    ></path>
                                </svg>
                                <span className="ml-4">Forms</span>
                            </a>
                        </li>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                href="cards.html"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    ></path>
                                </svg>
                                <span className="ml-4">Cards</span>
                            </a>
                        </li>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                href="charts.html"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    ></path>
                                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <span className="ml-4">Charts</span>
                            </a>
                        </li>

                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                href="modals.html"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <span className="ml-4">Modals</span>
                            </a>
                        </li>
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                                href="tables.html"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                </svg>
                                <span className="ml-4">Tables</span>
                            </a>
                        </li>

                    </ul>
                    {/* <div className="px-6 my-6">
                        <button
                            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors border border-transparent rounded-lg focus:outline-none focus:shadow-outline-purple primary-button"
                        >
                            Déconnexion
                            <span className="ml-2" aria-hidden="true">+</span>
                        </button>
                    </div> */}
                </div>
            </aside>
        </div>
    )
}

export default AdminPage
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [state, setState] = useState(false)
    const navRef = useRef()

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Careers", path: "javascript:void(0)" },
        { title: "Guides", path: "javascript:void(0)" },
        { title: "Partners", path: "javascript:void(0)" },
        { title: "Teams", path: "javascript:void(0)" },
        { title: "Blog", path: "javascript:void(0)" }
    ]




    return (
        <nav ref={navRef} className="bg-white w-full fixed top-0 z-20">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-4 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src="https://hobbizer.com/bundles/hobbizerorganiser/images/logo.png"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-rose-700 outline-none p-2 rounded-md focus:border-rose-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-between flex-row-reverse md:overflow-visible md:flex md:pb-0 md:pr-0 md:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                    <div>
                        <ul className="flex flex-col-reverse space-x-0 md:space-x-6 md:flex-row">
                            <li className="mt-4 md:mt-0">
                                <a href="javascript:void(0)" className="py-3 px-4 text-center border  text-gray-600 hover:text-rose-600 rounded-md block md:inline md:border-0">
                                    How it works
                                </a>
                            </li>
                            <li className="mt-4 md:mt-0">
                                <a href="javascript:void(0)" className="py-3 px-4 text-center border text-gray-600 hover:text-rose-600 rounded-md block md:inline ">
                                    Login
                                </a>
                            </li>
                            <li className="mt-8 md:mt-0">
                                <a href="javascript:void(0)" className="py-3 px-4 text-center text-white bg-rose-600 hover:bg-rose-700 rounded-md shadow block md:inline">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar
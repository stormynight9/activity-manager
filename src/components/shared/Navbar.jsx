import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalContext from '../../context/modal-context'
import UserContext from '../../context/user-context'
import Login from './Login'
import Register from './Register'
import ProviderLogin from './ProviderLogin'

const Navbar = () => {
    const [state, setState] = useState(false)
    const navRef = useRef()
    const modalCtx = useContext(ModalContext)
    const userCtx = useContext(UserContext)
    console.log('user from navbar', userCtx.user)

    const modalHandler = (content) => {
        modalCtx.setModalContent(content)
        modalCtx.toggleModal()
    }

    return (
        <nav ref={navRef} className=" w-full fixed top-0 bg-gray-50 z-20">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-4 md:block">
                    <Link to='/'>
                        <img
                            src="https://svgur.com/i/hbu.svg"
                            width={120}
                            alt="Float UI logo"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button className="text-hobbizer  outline-none p-2 rounded-md focus:border-hobbizer focus:border"
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
                        <ul className="flex flex-col-reverse space-x-0 md:space-x-6 md:flex-row md:items-center">
                            {!userCtx.user && <li className="mt-4 md:mt-0">
                                <button onClick={() => modalHandler(<ProviderLogin />)} className="w-full py-3 text-center text-gray-600 hover:text-hobbizer rounded-md block md:inline ">
                                    Préstataire
                                </button>
                            </li>}
                            {(userCtx.isProvider || userCtx.user?.displayName === 'provider') && <li className="mt-4 md:mt-0">
                                <Link to='/provider' className="w-full py-3 text-center text-gray-600 hover:text-hobbizer rounded-md block md:inline ">
                                    Tableau de bord
                                </Link>
                            </li>}
                            <li className="mt-4 md:mt-0">
                                <button type='button' className="w-full py-3 px-4 text-center border  text-gray-600 hover:text-hobbizer rounded-md block md:inline md:border-0">
                                    Comment ça marche
                                </button>
                            </li>
                            {!userCtx.user && <li className="mt-4 md:mt-0">
                                <button onClick={() => modalHandler(<Login />)} className="w-full py-3 px-4 text-center border text-gray-600 hover:text-hobbizer rounded-md block md:inline ">
                                    Connexion
                                </button>
                            </li>}
                            {!userCtx.user && <li className="mt-8 md:mt-0">
                                <button onClick={() => modalHandler(<Register />)} className="w-full py-3 px-4 text-center text-white bg-hobbizer hover:bg-hobbizer-dark transition-colors duration-300  rounded-md shadow block md:inline">
                                    Inscription
                                </button>
                            </li>}
                            {!!userCtx.user && <li className="mt-8 md:mt-0">
                                <button onClick={() => userCtx.logoutUser()} className="w-full py-3 px-4 text-center text-white bg-hobbizer hover:bg-hobbizer-dark transition-colors duration-300  rounded-md shadow block md:inline">
                                    Déconnexion
                                </button>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
import { sendEmailVerification } from 'firebase/auth';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import ModalContext from '../../context/modal-context';
import UserContext from '../../context/user-context';
import { auth } from '../../firebase-config';

const VerifyEmail = () => {
    const modalCtx = useContext(ModalContext);
    const userCtx = useContext(UserContext);
    const [resendButtonDisabled, setResendButtonDisabled] = useState(true);
    const [timeLeft, setTimeLeft] = useState(61);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!timeLeft) {
            setTimeLeft('')
            setResendButtonDisabled(false)
            return;
        }
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [timeLeft]);

    const resendEmailVerification = async () => {
        setLoading(true);
        setTimeLeft(61);
        setResendButtonDisabled(true);
        try {
            await sendEmailVerification(auth.currentUser)
            toast.success("Un nouveau mail de vérification a été envoyé")
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false);

    }

    console.log(timeLeft)

    // add a countdown to the resend button
    // const resendButtonCountdown = () => {
    //     setResendButtonDisabled(true);
    //     const interval = setInterval(() => {
    //         setCount(() => count - 1);
    //         if (count === 0) {
    //             clearInterval(interval);
    //             setResendButtonDisabled(false);
    //         }
    //     }, 1000);
    // }

    // enable button after 15 seconds
    // const enableButton = () => {
    //     setTimeout(() => {
    //         setResendButtonDisabled(true)
    //     }, 15000)
    // }


    return (
        <div className='relative bg-white rounded-lg shadow-lg mx-auto  max-w-[358px]'>
            <div className='flex justify-end p-2'>
                <button onClick={modalCtx.toggleModal} type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  ' data-modal-toggle='authentication-modal'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                </button>
            </div>
            <div className='px-6 pb-4 space-y-6 lg:px-8 sm:pb-6'>
                <h3 className='text-xl font-medium text-gray-900 '>Vérifiez votre email</h3>
                <img className='w-44 mx-auto ' src="https://firebasestorage.googleapis.com/v0/b/pfe-95fff.appspot.com/o/Untitled.svg?alt=media&token=ead3fbf3-9ceb-4bf9-986f-92eed32142d0" alt="email logo" />
                <p className='max-w-sm w-fit mx-auto text-sm text-gray-500 text-center'>
                    Nous vous avons envoyé un e-mail pour vérifier votre compte, cliquez sur le lien dans l'e-mail pour continuer.
                </p>
                <div>
                    <button disabled={userCtx.loadingReload} onClick={() => userCtx.onReload()} type='submit' className='w-full tracking-wide px-5 py-2.5 primary-button'>{!userCtx.loadingReload ? "Oui, j'ai vérifié mon email" : <svg className="animate-spin mx-auto h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}</button>
                    {!timeLeft ? <button disabled={resendButtonDisabled} onClick={() => resendEmailVerification()} type='submit' className='w-full px-5 py-2.5 mt-2 secondary-button'>{!loading ? `Renvoyer un email ${timeLeft ? timeLeft + 's' : ''}` : <svg className="animate-spin mx-auto h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}</button> : <div className='text-center mt-2 text-sm font-medium text-gray-500'>Renvoyer un email dans {timeLeft} seconds</div>}
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import ModalContext from '../../context/modal-context'
import UserContext from '../../context/user-context'
import Login from './Login'


const Register = () => {
    const modalCtx = useContext(ModalContext);
    const userCtx = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        userCtx.registerUser(data.email, data.name, data.password)
    }


    return (
        <div className='relative bg-white rounded-lg shadow mx-auto  max-w-md'>
            <div className='flex justify-end p-2'>
                <button onClick={modalCtx.toggleModal} type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  ' data-modal-toggle='authentication-modal'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8'>
                <h3 className='text-xl font-medium text-gray-900 '>Connectez-vous à Tunisie Séjour</h3>
                <div>
                    <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 '>Votre nom</label>
                    <input {...register('name', { required: 'Ce champ est obligatoire' })} type='name' name='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='John doe' />
                    {errors.name && <p className='pt-1 text-sm text-red-500'>{errors.name?.message}</p>}
                </div>
                <div>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>Votre email</label>
                    <input {...register('email', { required: 'Ce champ est obligatoire', pattern: { value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: 'Ce adresse email est invalide' } })} type='email' name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='exemple@email.com' />
                    {errors.email && <p className='pt-1 text-sm text-red-500'>{errors.email?.message}</p>}
                </div>
                <div>
                    <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>Votre mot de passe</label>
                    <input {...register('password', { required: 'Ce champ est obligatoire', minLength: { value: 8, message: 'La longueur minimum est de 8 caractères.' } })} type='password' name='password' id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-hobbizer block w-full p-2.5  ' />
                    {errors.password && <p className='pt-1 text-sm text-red-500'>{errors.password?.message}</p>}
                </div>
                <button type='submit' className='w-full text-white bg-hobbizer  hover:bg-hobbizer-dark  duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Créer un compte</button>
                <div className='grid grid-cols-3 gap-0 mb-6'>
                    <hr className='mt-3 block border-gray-200' />
                    <span className='text-center bg-white text-sm text-gray-400 font-normal'>Or continue with</span>
                    <hr className='mt-3 block border-gray-200' />
                </div>
                <div className='flex justify-between space-x-2'>
                    <button type='submit' className='w-1/2 text-facebook inline-flex justify-center border rounded-md   duration-300 font-medium  text-2xl px-5 py-2.5 hover:shadow'><FaFacebook /></button>
                    <button type='submit' className='w-1/2 text-2xl text-white border rounded-md inline-flex justify-center   duration-300 font-medium   px-5 py-2.5 text-center hover:shadow'><FcGoogle /></button>
                </div>
                <div className='text-sm font-medium text-gray-500 '>
                    Already registered? <a onClick={() => modalCtx.setModalContent(<Login />)} href='\#' className='text-hobbizer hover:underline '>Login</a>
                </div>
            </form>
        </div>
    )
}

export default Register
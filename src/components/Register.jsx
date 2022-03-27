import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
const Register = () => {
    return (
        <div className='relative bg-white rounded-lg shadow  max-w-md'>
            <div className='flex justify-end p-2'>
                <button type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  ' data-modal-toggle='authentication-modal'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                </button>
            </div>
            <form className='px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8' action='#'>
                <h3 className='text-xl font-medium text-gray-900 '>Sign up to Hobbizer</h3>
                <div>
                    <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 '>Your name</label>
                    <input type='name' name='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Flen' required />
                </div>
                <div>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>Your email</label>
                    <input type='email' name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    ' placeholder='name@company.com' required />
                </div>
                <div>
                    <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>Your password</label>
                    <input type='password' name='password' id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-hobbizer block w-full p-2.5  ' required />
                </div>

                <button type='submit' className='w-full text-white bg-hobbizer  hover:bg-hobbizer-dark  duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Create my account</button>
                <div className='grid sm:grid-cols-3 gap-0 mb-6'>
                    <hr className='mt-3 hidden sm:block border-gray-200' />
                    <span className='text-center bg-white text-sm text-gray-400 font-normal'>Or continue with</span>
                    <hr className='mt-3 hidden sm:block border-gray-200' />
                </div>
                <div className='flex justify-between space-x-2'>
                    <button type='submit' className='w-1/2 text-facebook inline-flex justify-center border rounded-md   duration-300 font-medium  text-2xl px-5 py-2.5 hover:shadow'><FaFacebook /></button>
                    <button type='submit' className='w-1/2 text-2xl text-white border rounded-md inline-flex justify-center   duration-300 font-medium   px-5 py-2.5 text-center hover:shadow'><FcGoogle /></button>
                </div>
                <div className='text-sm font-medium text-gray-500 '>
                    Already registered? <a href='#' className='text-hobbizer hover:underline '>Login</a>
                </div>
            </form>
        </div>
    )
}

export default Register
import CartElement from "./CartElement"


const Checkout = () => {
    return (
        <div className='max-w-5xl mx-auto mb-8'>
            <div className='text-center mb-4 leading-10'>
                <h1 className=' text-3xl md:text-5xl font-medium text-slate-900'>VOTRE PROGRAMME</h1>
                <p>Récapitulatif de votre programme du 25/05 au 26/05</p>
            </div>
            <div className='flex flex-col divide-y-[1px] rounded-md  shadow-md md:p-4'>
                <CartElement />
                <CartElement />
                <CartElement />
                <CartElement />
                <div className='flex justify-between items-center  p-4'>
                    <p className='text-3xl font-semibold'>Total</p>
                    <p className='text-3xl font-semibold'>123 TND</p>
                </div>
                <button className='ml-auto sm:px-16 h-14 w-full sm:w-auto mt-7 lg:mt-0  bg-hobbizer hover:bg-hobbizer-dark  duration-300 text-white text-center rounded-md shadow-md'>Payer</button>
            </div>
        </div>


    )
}

export default Checkout
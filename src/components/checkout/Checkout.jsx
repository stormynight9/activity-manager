import { useContext } from "react"
import { Link } from "react-router-dom"
import DataContext from "../../context/data-context"
import programmeContext from "../../context/programme-context"
import CartElement from "./CartElement"

const Checkout = () => {

    const programmeCtx = useContext(programmeContext)
    const dataCtx = useContext(DataContext)

    const findActivityById = (id) => {
        return dataCtx.activities.find(activity => activity.id === id)
    }

    const cartItems = programmeCtx.activities.map((activity) => {
        return { ...activity, price: findActivityById(activity.activityId).price, image: findActivityById(activity.activityId).coverImage, title: findActivityById(activity.activityId).title }
    }).reverse()

    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.participants
    }, 0)


    return (
        <div className='max-w-5xl mx-auto mb-8'>
            <div className='text-center mb-4 leading-10'>
                <h1 className=' text-3xl md:text-5xl font-medium text-slate-900'>VOTRE PROGRAMME</h1>
                <p>Récapitulatif de votre programme du {programmeCtx.startDate} au {programmeCtx.endDate}</p>
            </div>
            <Link to={'/programme'} className='text-hobbizer underline flex items-center'> Retournez à la page du programme</Link>
            <div className='flex flex-col divide-y-[1px] rounded-md  shadow-md pb-4 pd:mb-0 md:p-4'>
                {cartItems.map((item) => {
                    return <CartElement key={item.id} item={item} />
                })}
                <div className='flex justify-between items-center p-4'>
                    <p className='text-3xl font-semibold'>Total</p>
                    <p className='text-3xl font-semibold'>{total} TND</p>
                </div>
                <button className='mx-2 md:mx-0 md:ml-auto sm:px-16 h-14 sm:w-auto mt-7 lg:mt-0  bg-hobbizer hover:bg-hobbizer-dark  duration-300 text-white text-center rounded-md shadow-md'>Payer</button>
            </div>
        </div>


    )
}

export default Checkout
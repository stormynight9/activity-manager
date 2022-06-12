import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import DataContext from "../../context/data-context"
import programmeContext from "../../context/programme-context"
import UserContext from "../../context/user-context"
import { db } from "../../firebase-config"
import CartElement from "./CartElement"

const Checkout = () => {
    const programmeCtx = useContext(programmeContext)
    const dataCtx = useContext(DataContext)
    const userCtx = useContext(UserContext)

    const findActivityById = (id) => {
        return dataCtx.activities.find(activity => activity.id === id)
    }

    const cartItems = programmeCtx.activities.map((activity) => {
        return { ...activity, price: findActivityById(activity.activityId).price, image: findActivityById(activity.activityId).coverImage, title: findActivityById(activity.activityId).title }
    }).reverse()

    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.participants
    }, 0)

    const validateProgram = async () => {
        let validatedActivities = []

        for (const activity of programmeCtx.activities) {
            const activityRef = await addDoc(collection(db, 'validatedActivities'), {
                activity
            })
            validatedActivities.push(activityRef.id)
        }

        const programRef = await addDoc(collection(db, 'validatedPrograms'), {
            participants: programmeCtx.participants,
            startDate: programmeCtx.startDate,
            endDate: programmeCtx.endDate,
            userId: userCtx.user.uid,
            bookedActivities: validatedActivities,
        })

        await updateDoc(doc(db, 'users', userCtx.user.uid), {
            validatedPrograms: arrayUnion(programRef.id)
        })

        toast('Demande a été envoyé.', {
            type: 'success',
            position: "bottom-center",
            autoClose: 4000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }


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
            </div>
        </div>


    )
}

export default Checkout
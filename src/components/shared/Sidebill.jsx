import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../../context/data-context'
import ModalContext from '../../context/modal-context'
import programmeContext from '../../context/programme-context'
import UserContext from '../../context/user-context'
import Login from './Login'


// function capitalize first letter of every word
const capitalize = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
const Sidebill = ({ disappear }) => {
    const programmeCtx = useContext(programmeContext)
    const dataCtx = useContext(DataContext)
    const userCtx = useContext(UserContext)
    const modalCtx = useContext(ModalContext)
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0)
    const activities = programmeCtx.activities

    // get total price
    useEffect(() => {
        let total = 0
        activities.forEach((activity) => {
            // get activity details from dataCtx
            const activityDetails = dataCtx.activities.find(
                (activityDetail) => activityDetail.id === activity.activityId
            )
            total += activityDetails.price * activity.participants
        }
        )
        setTotalPrice(total)
    }, [activities, dataCtx.activities])

    //group activities by date
    const activitiesByDate = activities.reduce((acc, activity) => {
        const date = activity.date
        if (!acc[date]) {
            acc[date] = []
        }
        acc[date].push(activity)
        return acc
    }, {})

    const deleteActivity = (id) => {
        programmeCtx.deleteActivity(id)
    }

    const redirectValidation = () => {
        // if user is not logged in, open modal to ask for login
        if (!userCtx.user) {
            modalCtx.setModalContent(<Login />)
            modalCtx.toggleModal()
        } else {
            // if user is logged in, redirect to validation page
            navigate('/checkout')
        }

    }

    return (
        <div className={disappear ? "fixed hidden 2xl:block top-24 right-0 max-w-sm w-full" : " fixed hidden xl:block top-24 right-0 max-w-sm w-full"}>
            <div className="w-screen max-w-sm">
                <div className="flex h-[80vh] flex-col bg-white shadow-md rounded-md">
                    <div className="flex-1 overflow-y-auto py-1 sm:px-4">
                        <div className="mt-2">
                            <div className="flow-root">
                                {programmeCtx.activities.length === 0 && <div className='mt-8 justify-around'>
                                    <img className='mt-10' src="https://firebasestorage.googleapis.com/v0/b/pfe-95fff.appspot.com/o/undraw_add_to_cart_re_wrdo%20(1).svg?alt=media&token=83c08aed-22e5-4fa4-9480-0fd303e2ed0a" alt="empty cart" />
                                    <p className='font-medium mt-12 text-xl break-words text-center'>Vous n'avez pas encore sélectionné d'activités</p>
                                    <p className='text-center text-sm'>Cliquez sur un moment de la journée pour ajouter des activités</p>
                                </div>
                                }
                                <ul className=" divide-gray-200">
                                    {
                                        // sort by date
                                        Object.keys(activitiesByDate).sort((a, b) => {
                                            return new Date(a) - new Date(b)
                                        }).map(date => {
                                            return (
                                                <li key={date} className='py-3'>
                                                    <div className="flex justify-between items-center">
                                                        <p className="text-sm font-medium">{capitalize(format(new Date(date), 'eeee, d/MM/yyyy', { locale: fr }))}</p>
                                                        <p className="text-sm font-medium">{activitiesByDate[date].length} {activitiesByDate[date].length > 1 ? 'activités' : 'activité'}</p>
                                                    </div>
                                                    <ul className="divide-gray-200 divide-y">
                                                        {
                                                            // sort by time
                                                            activitiesByDate[date].sort((a, b) => {
                                                                return a.time > b.time ? 1 : -1
                                                            }).map(activity => {
                                                                // get activity's details from dataCtx
                                                                const activityDetails = dataCtx.activities.find(act => act.id === activity.activityId)
                                                                return (
                                                                    <li key={activity.id} className='flex py-3'>
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img
                                                                                src={activityDetails.coverImage}
                                                                                alt={activityDetails.title}
                                                                                className="h-full w-full object-cover object-center"
                                                                            />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <p> {activityDetails.title} </p>
                                                                                    </h3>
                                                                                    <p className="ml-4 text-xl">{activityDetails.price * activity.participants}<span className='text-xs'>TND</span> </p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">{activity.time}</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                <p className="text-gray-500"><span className='text-gray-900 font-medium'>{activity.participants}</span> {activity.participants > 1 ? 'participants' : 'participant'}</p>

                                                                                <div onClick={() => deleteActivity(activity.id)} className='flex justify-center gap-2 text-red-600 font-medium items-center mt-auto cursor-pointer'>
                                                                                    <FaTrashAlt /> Supprimer
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            }
                                                            )}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {programmeCtx.activities.length > 0 && <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Prix total</p>
                            <p>{totalPrice}.00 TND</p>
                        </div>
                        <div className="mt-6 flex flex-col space-y-2">
                            <button onClick={() => redirectValidation()} className='flex gap-2 justify-center items-center h-10  w-full sm:w-auto px-3 md:px-4 primary-button tracking-wide'><FaCheck />Valider mon programme</button>
                            <button onClick={() => programmeCtx.setActivities([])} className='h-10 block w-full sm:w-auto px-3 md:px-4 secondary-button'>Recommencer</button>
                        </div>
                    </div>}
                </div>
            </div>
        </div >
    )
}

export default Sidebill
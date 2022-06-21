import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProgrammeContainer from "../components/programme/ProgrammeContainer"
import Modal from "../components/shared/Modal"
import Sidebill from "../components/shared/Sidebill"

const Programme = () => {
    const navigate = useNavigate()

    useEffect(() => {

        if (localStorage.getItem('programme') === null) {
            navigate('/')
            return <></>
        }
    }, [navigate])

    return (
        <>
            <Modal />
            <ProgrammeContainer />
            <Sidebill />
        </>
    )
}

export default Programme
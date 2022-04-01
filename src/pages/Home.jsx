import ActivityList from "../components/home/ActivityList"
import Hero from "../components/home/Hero"
import How from "../components/home/How"
import Modal from "../components/shared/Modal"
import ProgrammeForm from "../components/home/ProgrammeForm"

const Home = () => {
    return (
        <>
            <Modal />
            <Hero />
            <ProgrammeForm />
            <ActivityList />
            <How />
        </>
    )
}

export default Home
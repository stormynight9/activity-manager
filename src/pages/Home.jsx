import ActivityList from "../components/ActivityList"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import How from "../components/How"
import Navbar from "../components/Navbar"
import ProgrammeForm from "../components/ProgrammeForm"

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProgrammeForm />
            <ActivityList />
            <How />
            <Footer />
        </>
    )
}

export default Home
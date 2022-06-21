import CommencerButton from '../components/HowItWorks/CommencerButton';
import MultiStep from '../components/HowItWorks/MultiStep';

const HowItWorks = () => {

    return (
        <div className='bg-white mt-36 sm:m-4 sm:p-4 rounded-md shadow-md'>

            <div className="">
                <h1 className="sm:text-4xl text-2xl font-sans text-center text-gray-800/90"><b>COMMENT ÇA MARCHE ?</b></h1>
            </div>

            <div className="flex items-center flex-col sm:pb-16 pb-10 sm:pt-10 pt-8 ">
                <MultiStep />
                <CommencerButton />
            </div>
        </div>)
}



export default HowItWorks
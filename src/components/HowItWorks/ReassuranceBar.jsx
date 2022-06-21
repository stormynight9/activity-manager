import { useEffect, useState } from "react"



const ReassuranceBar = () => {

    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }
    )

    if (size < 645) {
        return (
            <>
                <div className="  bg-gray-200 flex px-5 py-5 text-xs font-sans text-gray-800 ">

                    <div className="mr-4 ">

                        <div className=" mb-6 pl-12  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/independant.png')] bg-no-repeat">
                            <span><b className="text-sm">100% INDÉPENDANT</b></span>
                            <p>Nous vous recommandons uniquement nos coups de coeur</p>
                        </div>

                        <div className=" pl-12  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/parisien.png')] bg-no-repeat">
                            <span><b className="text-sm">100% TUNISIEN</b></span>
                            <p>Notre équipe parisienne recherche en permanence de nouvelles expériences</p>
                        </div>

                    </div>



                    <div>
                        <div className=" mb-6 pl-14  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/transparent.png')] bg-no-repeat">
                            <span><b className="text-sm">100% ORIGINAL</b></span>
                            <p>Nous créons des expériences sur-mesure et uniques sur demande</p>
                        </div>

                        <div className=" pl-14  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/budget.png')] bg-no-repeat" >
                            <span><b className="text-sm">MAITRISER VOTREE BUDGET</b></span>
                            <p>Obtenez immédiatement un premier devis gratuit et sans engagement</p>
                        </div>

                    </div>

                </div>

            </>
        )

    }


    else {
        return (

            <>
                <div className="bg-gray-200 md:text-sm text-xs font-sans text-gray-800  flex flex-row py-10 px-12  justify-center ">

                    <div className=" pl-12  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/independant.png')] bg-no-repeat">
                        <span><b>100% INDÉPENDANT</b></span>
                        <p className="sm:text-sm">Nous vous recommandons uniquement nos coups de coeur</p>
                    </div>

                    <div className=" pl-12  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/parisien.png')] bg-no-repeat">
                        <span><b>100% TUNISIEN</b></span>
                        <p className="sm:text-sm">Notre équipe parisienne recherche en permanence de nouvelles expériences</p>
                    </div>

                    <div className=" pl-14  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/transparent.png')] bg-no-repeat">
                        <span ><b>100% ORIGINAL</b></span>
                        <p className="sm:text-sm">Nous créons des expériences sur-mesure et uniques sur demande</p>
                    </div>

                    <div className=" pl-16  bg-[url('https://www.hobbizer.com/bundles/hobbizerorganiser/images/reassurance/budget.png')] bg-no-repeat" >
                        <span><b>MAITRISER VOTREE BUDGET</b></span>
                        <p className="sm:text-sm ">Obtenez immédiatement un premier devis gratuit et sans engagement</p>
                    </div>

                </div>

            </>
        )
    }
}


export default ReassuranceBar
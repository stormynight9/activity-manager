const Hero = () => {

    return (

        <section className="mt-36 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 ">
            <div className="text-center space-y-4">
                <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                    Trouver les experiences que vous
                    <span className="text-hobbizer"> voulez vivre</span>
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    Tunisie Séjour organise et crée des activités uniques pour tous vos évènements à Tunisie.
                </p>
            </div>
            <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                {/* <a href="\#" className="px-10 py-3.5 w-full bg-hobbizer hover:bg-hobbizer-dark transition-colors duration-300 text-white text-center rounded-md shadow-md block sm:w-auto">
                    Get started
                </a> */}
                <a href="\#" className="px-10 py-3.5 w-full secondary-button block sm:w-auto">
                    Comment ça marche?
                </a>
            </div>
        </section>
    )
}

export default Hero


const Hero = () => {
    return (
        <section className="mt-36 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 ">
            <div className="text-center space-y-4">
                <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                    Trouver les experiences que vous
                    <span className="text-rose-600"> voulez vivre</span>
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    Hobbizer organise et crée des activités uniques pour tous vos évènements à Paris. Hobbizer organise et crée des activités uniques pour
                </p>
            </div>
            <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                <a href="javascript:void(0)" className="px-10 py-3.5 w-full bg-rose-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                    Get started
                </a>
                <a href="javascript:void(0)" className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-rose-600 hover:shadow block sm:w-auto">
                    How does it work?
                </a>
            </div>
        </section>
    )
}

export default Hero
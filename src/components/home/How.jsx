const How = () => {
    return (
        <div className=' mt-14   text-white text-center bg-[url(https://cdn.discordapp.com/attachments/311564936004370434/984975497408704553/Arriere-planB.png)]'>
            <div className='mx-auto p-11 flex flex-col justify-center items-center'>
                <h2 className='text-white mb-12 text-3xl text-center'>Comment ça marche?</h2>
                <div className='flex flex-col md:flex-row justify-center md:justify-between md:space-x-10 lg:space-x-20 max-w-7xl md:items-baseline'>
                    <div className='flex flex-1 flex-col mb-10 md:mb-0 items-center'>
                        <img className='h-[72px] mb-4 w-[70px] hue-rotate-[240deg]' src="https://hobbizer.com/bundles/hobbizerorganiser/images/1.png" alt="" />
                        <strong className='text-lg mb-1 md:mb-4'>CRÉEZ VOTRE PROGRAMME SUR-MESURE</strong>
                        <span>Choisissez et planifiez les meilleures expériences à Tunisie</span>
                    </div>
                    <div className='flex flex-1  flex-col mb-10 md:mb-0 items-center'>
                        <img className='h-[72px] mb-4 w-[70px] hue-rotate-[240deg]' src="https://hobbizer.com/bundles/hobbizerorganiser/images/2.png" alt="" />
                        <strong className='text-lg mb-1 md:mb-4'>TUNISIE SEJOUR ORGANISE VOS EXPÉRIENCES</strong>
                        <span>Votre organisateur personnel s’occupe de tout</span>
                    </div>
                    <div className='flex flex-1  flex-col items-center'>
                        <img className='h-[72px] mb-4 w-[70px] hue-rotate-[240deg]' src="https://hobbizer.com/bundles/hobbizerorganiser/images/3.png" alt="" />
                        <strong className='text-lg mb-1 md:mb-4'>SAUVEGARDEZ VOS PROGRAMMES</strong>
                        <span>Vos programmes seront sauvegardés dans votre compte.</span>
                    </div>
                </div>
                <a className='px-10 py-3.5 w-full cursor-pointer mt-12 secondary-button hover:bg-white sm:w-auto'>En savoir plus</a>
            </div>
        </div>
    )
}

export default How
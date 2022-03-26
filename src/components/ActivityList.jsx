import Activity from './Activity'

const ActivityList = () => {

    const activities = [
        {
            id: 1,
            coverImage: 'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/602e8848a315a_VIN-SOUS-HYPNOSE-VISIO-DEGUSTATION-TEAM-BUILDING.jpg',
            title: 'Dégustation de vin hypnose en visio',
            description: 'Oubliez le tourisme œnologique classique et venez réveiller des sensations et de nouveaux goûts à travers l’hypnose.',
            price: 50
        },
        {
            id: 2,
            coverImage: 'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/6091596c848f8_4.gif',
            title: 'Dégustation de champagne sur la seine',
            description: 'Découvrez la Seine sous un autre angle, en profitant d’une dégustation hors du commun de champagne.',
            price: 100
        },

        {
            id: 3,
            coverImage: 'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fae8aa713141_MURDER-PARTY-HOBBIZER-ORIGINAL-TEAM-BUILDING.jpg',
            title: 'Murder party en visio',
            description: 'Participez à une enquête policière immersive complétement déjantée et élucidez un meurtre qui vient d’avoir lieu dans l’une des plus célèbres salles de spectacles parisiennes.',
            price: 40
        },

        {
            id: 4,
            coverImage: 'https://thumbs.dreamstime.com/b/portrait-friends-drinks-enjoying-cocktail-party-91321025.jpg',
            title: 'Atelier cocktail en visio',
            description: 'Rejoignez cette expérience immersive pour découvrir l’univers de la mixologie depuis chez vous avec les meilleurs barmen de Paris.',
            price: 45
        },

        {
            id: 5,
            coverImage: 'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/608135ada8e0a_3.gif',
            title: 'Déjeuner au coeur des vignes',
            description: 'Découvrez un domaine viticole unique et dégustez les différentes cuvés au cours d’un déjeuner au milieu des vignes.',
            price: 50
        }
    ]

    return (
        <section className='flex flex-wrap max-w-screen-xl mt-14 mx-auto  items-baseline justify-center '>
            <div className='text-center space-y-4'>
                <h2 className='text-gray-800 font-semibold mb-14 text-3xl md:text-4xl'>
                    The
                    <span className='text-hobbizer'> Hobbizer </span>
                    Selection
                </h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-2'>
                {activities.map((activity) => {
                    return <Activity key={activity.id} coverImage={activity.coverImage} title={activity.title} description={activity.description} price={activity.price} />
                })}
            </div>
            <div className='p-4 w-full sm:w-auto'>
                <button className='px-10 py-3.5 w-full mt-12 text-gray-500 text-center border rounded-md duration-300 hover:text-rose-600 hover:shadow block sm:w-auto'>See all activities</button>
            </div>
        </section>
    )
}

export default ActivityList
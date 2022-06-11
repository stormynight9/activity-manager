const Footer = () => {

    return (
        <footer className="p-4 bg-gray-50 rounded-lg shadow md:px-6 md:py-8 border-t-[1px]">
            <div className='flex flex-col sm:flex-row justify-around items-center'>
                <img src="https://svgur.com/i/har.svg" className="mr-3 h-16" alt="Tunisie Séjour" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2022 <p className="hover:underline inline-block">Tunisie Séjour™</p>. Tous droit réservé.
                </span>
            </div>
        </footer>

    )
}

export default Footer
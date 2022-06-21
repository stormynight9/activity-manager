import { doc, updateDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import UserContext from '../../context/user-context'
import { db } from '../../firebase-config'

const countryList = [
    "Afghanistan",
    "Albanie",
    "Algérie",
    "Samoa américaines",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "L'Autriche",
    "Azerbaïdjan",
    "Bahamas (les)",
    "Bahreïn",
    "Bangladesh",
    "Barbade",
    "Biélorussie",
    "Belgique",
    "Bélize",
    "Bénin",
    "Bermudes",
    "Bhoutan",
    "Bolivie (État plurinational de)",
    "Bonaire, Saint Eustache et Saba",
    "Bosnie Herzégovine",
    "Botswana",
    "Île Bouvet",
    "Brésil",
    "Territoire britannique de l'océan Indien (le)",
    "Brunei Darussalam",
    "Bulgarie",
    "Burkina Faso",
    "Burundi",
    "Cap-Vert",
    "Cambodge",
    "Cameroun",
    "Canada",
    "Îles Caïmans (les)",
    "République centrafricaine (la)",
    "Tchad",
    "Chili",
    "Chine",
    "L'île de noël",
    "Îles Cocos (Keeling) (les)",
    "Colombie",
    "Congo (République démocratique du)",
    "Congo (le)",
    "Îles Cook (les)",
    "Costa Rica",
    "Croatie",
    "Cuba",
    "Curacao",
    "Chypre",
    "Tchéquie",
    "Côte d'Ivoire",
    "Danemark",
    "Djibouti",
    "Dominique",
    "République dominicaine (la)",
    "Equateur",
    "Egypte",
    "Le Salvador",
    "Guinée Équatoriale",
    "Erythrée",
    "Estonie",
    "Eswatini",
    "Ethiopie",
    "Îles Falkland (les) [Malouines]",
    "Îles Féroé (les)",
    "Fidji",
    "Finlande",
    "France",
    "Guyane Française",
    "Polynésie française",
    "Gabon",
    "Gambie (la)",
    "Géorgie",
    "Allemagne",
    "Ghana",
    "Gibraltar",
    "Grèce",
    "Groenland",
    "Grenade",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernesey",
    "Guinée",
    "Guinée-Bissau",
    "Guyane",
    "Haïti",
    "Île Heard et îles McDonald",
    "Saint-Siège (le)",
    "Honduras",
    "Hong Kong",
    "Hongrie",
    "Islande",
    "Inde",
    "Indonésie",
    "Iran (République islamique d)",
    "Irak",
    "Irlande",
    "Île de Man",
    "Israël",
    "Italie",
    "Jamaïque",
    "Japon",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Corée (République populaire démocratique de)",
    "Corée (la République de)",
    "Koweit",
    "Kirghizistan",
    "République démocratique populaire lao (la)",
    "Lettonie",
    "Liban",
    "Lesotho",
    "Libéria",
    "Libye",
    "Liechtenstein",
    "Lituanie",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaisie",
    "Maldives",
    " Mali ",
    "Malte",
    "Îles Marshall (les)",
    " Martinique ",
    "Mauritanie",
    "Maurice",
    "Mayotte",
    "Mexique",
    "Micronésie (États fédérés de)",
    "Moldavie (République de)",
    "Monaco",
    "Mongolie",
    "Monténégro",
    "Montserrat",
    "Maroc",
    "Mozambique",
    "Birmanie",
    "Namibie",
    "Nauru",
    "Népal",
    "Pays-Bas (les)",
    "Nouvelle Calédonie",
    "Nouvelle-Zélande",
    "Nicaragua",
    "Niger (le)",
    "Nigeria",
    "Niué",
    "L'ile de Norfolk",
    "Norvège",
    "Oman",
    "Pakistan",
    "Palaos",
    "Palestine, État de",
    "Panama",
    "Papouasie Nouvelle Guinée",
    "Paraguay",
    "Pérou",
    "Philippines (les)",
    "Pitcairn",
    "Pologne",
    "Le Portugal",
    "Porto Rico",
    "Qatar",
    "République de Macédoine du Nord",
    "Roumanie",
    "Fédération de Russie (la)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Sainte Hélène, Ascension et Tristan da Cunha",
    "Saint-Christophe-et-Niévès",
    "Sainte-Lucie",
    "Saint Martin (partie française)",
    "Saint-Pierre-et-Miquelon",
    "Saint-Vincent-et-les-Grenadines",
    "Samoa",
    "Saint Marin",
    "Sao Tomé et Principe",
    "Arabie Saoudite",
    "Sénégal",
    "Serbie",
    "Les Seychelles",
    "Sierra Leone",
    "Singapour",
    "Sint Maarten (partie hollandaise)",
    "Slovaquie",
    "Slovénie",
    "Îles Salomon",
    "Somalie",
    "Afrique du Sud",
    "Géorgie du Sud et îles Sandwich du Sud",
    "Soudan du sud",
    "Espagne",
    "Sri Lanka",
    "Soudan (le)",
    "Surinam",
    "Svalbard et Jan Mayen",
    "Suède",
    "Suisse",
    "République arabe syrienne",
    "Taïwan",
    "Tadjikistan",
    "Tanzanie, République-Unie de",
    "Thaïlande",
    "Timor Oriental",
    "Aller",
    "Tokélaou",
    "Tonga",
    "Trinité-et-Tobago",
    "Tunisie",
    "Turquie",
    "Turkménistan",
    "Îles Turques et Caïques (les)",
    "Tuvalu",
    "Ouganda",
    "Ukraine",
    "Emirats Arabes Unis (les)",
    "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord (le)",
    "Îles mineures éloignées des États-Unis (les)",
    "États-Unis d'Amérique (les)",
    "Uruguay",
    "Ouzbékistan",
    "Vanuatu",
    "Venezuela (République bolivarienne du)",
    "Vietnam",
    "Îles Vierges (britanniques)",
    "Îles Vierges (États-Unis)",
    "Wallis et Futuna",
    "Sahara occidental",
    "Yémen",
    "Zambie",
    "Zimbabwe",
    "Iles Aland"
];

const ProfileInfo = () => {
    const userCtx = useContext(UserContext)
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        phone: '',
        birthDate: '',
    })

    console.log(formDetails)

    useEffect(() => {
        setFormDetails({
            firstName: userCtx.userDetails.firstName,
            lastName: userCtx.userDetails.lastName,
            address: userCtx.userDetails?.address,
            city: userCtx.userDetails?.city,
            country: userCtx.userDetails?.country,
            phone: userCtx.userDetails?.phone,
            birthDate: userCtx.userDetails?.birthDate,
        })
    }, [userCtx.userDetails])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // new object with no undefined values
        const newDetails = Object.keys(formDetails).reduce((acc, key) => {
            const _acc = acc;
            if (formDetails[key] !== undefined) _acc[key] = formDetails[key];
            return _acc;
        }, {})

        await updateDoc(doc(db, 'users', userCtx.user.uid), newDetails)
        toast.success('Informations modifiées avec succès')
    }

    return (
        <>
            <p className='text-lg font-medium'>Changer vos informations ici</p>
            <form onSubmit={onSubmitHandler} className='mt-6 info'>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Prénom</label>
                        <input defaultValue={formDetails.firstName} onChange={(e) => setFormDetails({ ...formDetails, firstName: e.target.value })} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Nom</label>
                        <input defaultValue={formDetails.lastName} onChange={(e) => setFormDetails({ ...formDetails, lastName: e.target.value })} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Doe" required />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">Adresse</label>
                        <input defaultValue={formDetails.address} onChange={(e) => setFormDetails({ ...formDetails, address: e.target.value })} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Adresse" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Numéro de téléphone</label>
                        <input defaultValue={formDetails.phone} onChange={(e) => setFormDetails({ ...formDetails, phone: +e.target.value })} type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="12345678" />
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Ville</label>
                        <input defaultValue={formDetails.city} onChange={(e) => setFormDetails({ ...formDetails, city: e.target.value })} type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Ville" />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Pays</label>
                        <select defaultValue={formDetails.country} onChange={(e) => setFormDetails({ ...formDetails, country: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                            {countryList.map((country, index) => <option key={index} value={country}>{country}</option>)}
                        </select>
                        {/* <input defaultValue={formDetails.country} onChange={(e) => setFormDetails({ ...formDetails, country: e.target.value })} type="text" id="visitors" lang="fr-CA" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5" /> */}
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Date de naissance</label>
                        <input type="date" defaultValue={formDetails.birthDate} onChange={(e) => setFormDetails({ ...formDetails, birthDate: e.target.value })} max="2016-12-31" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                    </div>
                </div>
                <button type="submit" className="primary-button px-4 py-2">Valider</button>
            </form>
        </>
    )
}

export default ProfileInfo
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import ModalContext from "../context/modal-context";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

// const arr = [
//     {
//         title: 'Dégustation interactive de vins',
//         shortTitle: 'DEGUSTATION VINS',
//         duration: 60,
//         range: [2, 100],
//         location: 'En visio',
//         price: 120,
//         time: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
//         coverImage: 'https://hobbizer.com/media/cache/activity/images/activity/list/5fbd0b1872680_DEGUSTATION-VIN-VISIO-HOBBIZER.jpg',
//         images: [
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/602e8eb4d6eff_DEGUSUATION-VIN-VISIO-OENOLOGIE.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fbd140915640_DEGUSTATION-VIN-HOBBIZER-TEAM-BUILDING.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fbd140915944_DEGUSTATION-VIN-DISTANCE-HOBBIZER.jpg'
//         ],
//         catchPhrase: 'Découvrez les plus belles appellations françaises grâce à une expérience unique.',
//         shortDescription: 'Participez à une dégustation de 6 vins accompagnée d’un expert pour une nouvelle perception de la découverte du vin.',
//         longDecription: `<p>Qui a dit que ce n’était pas possible de <strong>déguster du vin à distance&nbsp;</strong>?</p>
//         <p>Chez Hobbizer, on vous donne la possibilité de participer à une <strong>expérience œnologique depuis chez vous !</strong></p>
//         <p>Comment ça se passe ? Pour commencer, nous nous chargeons de vous envoyer une <strong>sélection de 6 grands vins </strong>dans des flacons de 6cl.&nbsp;</p>
//         <p>Ensuite, <strong>connectez-vous</strong> avec vos collaborateurs ou amis&nbsp;et <strong>échangez avec&nbsp;un expert</strong> qui vous guidera lors de toute la dégustation.</p>
//         <p>Cette animation se déroulera en live avec des passionnés du vin.&nbsp;</p>`,
//         practicalInfo: `<p>La box dégustation inclut&nbsp;6 vins&nbsp;:&nbsp;</p>
//         <p>- Sancerre, Domaine de la Garenne</p>
//         <p>- Chablis Bourgogne, L&amp;C Poitout</p>
//         <p>- Languedoc, Domaine Aiguebelle, Cuvée Lombarde</p>
//         <p>- Saint Emilion, Grand Cru, Olivier Cazenne, Aux Plantes</p>
//         <p>- Chateauneuf du Pape,Georges Lombrière</p>
//         <p>- Riversaltes ambré, Parcé frères 2000</p>
//         <p>&nbsp;</p>
//         <p>Envie d'accompagner&nbsp;vos verres de vin ? <strong>Nous pouvons vous fournir des plateaux de charcuterie et de fromages </strong>afin d'accompagner votre dégustation. Demandez-nous un devis !&nbsp;</p>`
//     },
//     {
//         title: 'Murder party en visio',
//         shortTitle: 'Murder Party',
//         duration: 90,
//         range: [2, 100],
//         location: 'En visio',
//         price: 40,
//         time: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
//         coverImage: 'https://hobbizer.com/media/cache/activity/images/activity/list/602e9e16f1089_MURDER-PARTY-TEAM-BUILDING-VISIO.jpg',
//         images: [
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/602e97722c551_MURDER-PARTY-HOBBIZER-VISIO.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fae8aa713141_MURDER-PARTY-HOBBIZER-ORIGINAL-TEAM-BUILDING.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fae8cd934641_MURDER-PARTY-DIGITALE-TEAM-BUILDING-HOBBIZER.jpg'
//         ],
//         catchPhrase: 'Panique à l’Accor Hôtel Arena ! Qui a tué Tabatina Fox ?',
//         shortDescription: 'Participez à une enquête policière immersive complétement déjantée et élucidez un meurtre qui vient d’avoir lieu dans l’une des plus célèbres salles de spectacles parisiennes.',
//         longDecription: `<p>Vous avez toujours rêvé de participer à une <strong>enquête&nbsp;policière</strong> ? C’est possible grâce à notre&nbsp;<strong>murder party</strong> complètement déjantée à vivre<strong> en ligne depuis chez vous</strong> !</p>
//         <p>Votre mission ? <strong>Enquêter&nbsp;avec votre équipe</strong> sur la <strong>disparition inquiétante d'une grande chanteuse</strong> française&nbsp;retrouvée morte dans sa loge de l’Accor Hôtel Arena....une drôle de mise en scène a été élaborée et la police à l'air de ramer un peu. Elle a clairement besoin de vous !&nbsp;&nbsp;</p>
//         <p>Vous allez devoir <strong>tour à tour interroger quatre suspects tous plus fous les uns que les autres</strong> interprétés par des <strong>comédiens professionnels</strong> qui interagiront en live avec vous.</p>
//         <p>Débriefez avec votre équipe, trouvez le coupable&nbsp;et soyez le grand gagnant de notre murder party !&nbsp;</p>
//         <p>Serez-vous à la hauteur pour relever ce défi&nbsp;?<strong> Les fans de TABATINA&nbsp;FOX comptent sur vous !&nbsp;</strong></p>`,
//         practicalInfo: `<p>Pour mener l’enquête, vous serez accompagné de 4 comédiens au talent fou qui interagiront avec vous en direct&nbsp;!</p>
//         <p>Cette murder party se déroulera sur ZOOM, tous les détails vous seront envoyés pour que vous puissiez y assister facilement.</p>`
//     },
//     {
//         title: 'Cours de cuisine en ligne avec merouan (top chef)',
//         shortTitle: 'CUISINE',
//         duration: 90,
//         range: [1, 100],
//         location: 'En ligne',
//         price: 50,
//         time: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
//         coverImage: 'https://hobbizer.com/media/cache/activity/images/activity/list/5fa16adeb3989_COURS-CUISINE-MEROUAN-TOP-CHEF-HOBBIZER.jpg',
//         images: [
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fa16aecb6a33_COURS-CUISINE-EN-LIGNE-TEAM-BUILDING-HOBBIZER.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fa16af5c55c1_MEROUAN-CUISINE-COURS-HOBBIZER.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fa16afde1dc4_COURS-CUISINE-DIGITAL-HOBBIZER.jpg'
//         ],
//         catchPhrase: 'Prenez un cours de cuisine original et décalé 100% en ligne !',
//         shortDescription: 'Préparez-vous à assister à un cours de cuisine unique et fou avec le chef Merouan (Top Chef, Le Meilleur Pâtissier).',
//         longDecription: `<p>Qui a dit qu’on ne pouvait pas rigoler en cuisinant&nbsp;? Chez Hobbizer, on a envie de vous prouver le contraire&nbsp;!</p>
//         <p>Prenez un<strong> chef impertinent</strong> et <strong>drôle </strong>d’un côté, une bonne connexion Internet de l’autre, et c’est parti pour un <strong>cours de cuisine totalement fou</strong>.</p>
//         <p>Après avoir validé ensemble une recette simple qui plaira à tout votre groupe, <strong>vous recevrez en amont de l’atelier une boxe contenant la&nbsp;liste des ingrédients&nbsp;</strong>&nbsp;indispensables à sa bonne réalisation, <strong>une bouteille de vin</strong> pour accompagner votre repas et quelques <strong>surprises</strong>.&nbsp;</p>
//         <p>Vous n’aurez aucun préparatif à faire en amont, si ce n’est quelques répartis bien trouvés pour affronter <strong>l’humour décapant de Merouan</strong>&nbsp;!</p>`,
//         practicalInfo: `<p>Le cours se déroulera sur ZOOM. Tous les détails vous seront envoyés pour assister au cours.</p>
//         <p>Le prix comprend l'envoie de la boxe comprenant la liste des ingrédients et la bouteille de vin. Attention, cette option est valable pour les groupe de moins de 30 personnes.&nbsp;</p>`
//     },
//     {
//         title: 'Créez votre soin cosmétique en ligne',
//         shortTitle: 'COSMETIQUE',
//         duration: 60,
//         range: [5, 15],
//         location: 'Votre domicile',
//         price: 65,
//         time: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
//         coverImage: 'https://hobbizer.com/media/cache/activity/images/activity/list/5f9c20ca3bdf3_ATELIER-HUILE-EN-LIGNE-HOBBIZER.jpg',
//         images: [
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5f9ae298c2985_ATELIER-EN-LIGNE-HOBBIZER-TEAM-BUILDING-COSMETIQUE.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5f9c1eed692c8_AROMATHERAPIE-ATELIER-HOBBIZER-TEAM-BUILDING.jpg'
//         ],
//         catchPhrase: 'Réalisez votre soin naturel en ligne pour corps, visage ou cheveux au choix.',
//         shortDescription: 'Apprenez les bases de la cosmétique naturelle et de l’aromathérapie au cours d’un atelier 100% en ligne et créez un soin unique.',
//         longDecription: `<p>Participez à un <strong>atelier en visio-conférence</strong> avec Nathalie qui vous formera sur les bases de la <strong>cosmétique naturelle</strong>&nbsp;et vous apprendra à créer un produit cosmétique sur-mesure à l’aide des produits que vous aurez préalablement reçus à votre domicile.</p>

//         <p>Choisissez votre produit (le même pour tout le groupe) parmi un large choix&nbsp;: &nbsp;<strong>soin corps</strong>, baumes, <strong>soin cheveux</strong>, démaquillant, gommage, <strong>Roll-on déstressant</strong>, shampoing ou gel douche.</p>

//         <p><strong>Tout le matériel sera fourni et envoyé</strong> dans une box à chaque participant, directement à son domicile&nbsp;! &nbsp;Vous retrouverez également dans votre box un<strong> livre de recettes</strong> simples pour faire vos cosmétiques chez vous + un <strong>coton lavable et son pochon</strong> fait main de la superbe marque <u><a href="https://paulettezerodechet.com/la-boutique/">Paulette Zero Dechet</a></u>.</p>
//         `,
//         practicalInfo: `<p><strong>Atelier en ligne sur ZOOM</strong> (nous vous fournirons des explications détaillées pour vous connecter au cours)</p>
//         <p><strong>Matériel fourni </strong>et envoyé à votre domicile + <strong>CADEAUX</strong></p>
//         <p><strong>Personnalisation des flacons</strong> possible sur-devis</p>`
//     },
//     {
//         title: 'Dégustation de vin sous hyonose en visio',
//         shortTitle: 'DEGUSTATION',
//         duration: 60,
//         range: [2, 100],
//         location: 'En viso',
//         price: 50,
//         time: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
//         coverImage: 'https://hobbizer.com/media/cache/activity/images/activity/list/5fbcf1853993b_DEGUSTATION-VIN-HYPNOSE-HOBBIZER.jpg',
//         images: [
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/602e8848a315a_VIN-SOUS-HYPNOSE-VISIO-DEGUSTATION-TEAM-BUILDING.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fbcf1f2b59ed_VIN-HYPNOSE-HOBBIZER-TEAM-BUILDING.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fbcf22d3329b_VIN-HYPNOSE-INSOLITE-TEAM-BUILDING-HOBBIZER.jpg'

//         ],
//         catchPhrase: 'Participez à une expérience de dégustation hors du commun et 100% en ligne',
//         shortDescription: 'Oubliez le tourisme œnologique classique et venez réveiller des sensations et de nouveaux goûts à travers l’hypnose.',
//         longDecription: `<p>Vous êtes à la recherche de nouvelles découvertes surprenantes ? D'un&nbsp;<strong>team building original</strong> ou d'un <strong>cadeau client</strong> qui marquera les esprits ?&nbsp;</p>
//         <p>Alors lâchez prise et&nbsp;laissez-vous embarquer dans une expérience unique : une <strong>dégustation de vin sous hypnose</strong>.</p>
//         <p><strong>Recevez chez vous une box</strong> contenant une bouteille de vin et un QR code qui vous permettra d’accéder à une<strong> séance d’hypnose</strong> couplée à une <strong>dégustation guidée par une œnologue.</strong>&nbsp;</p>
//         <p>Cette dégustation sous hypnose vous permettra d’exacerber vos sens et ainsi mieux apprécier les saveurs, les odeurs et les sensations de cette expérience.</p>
//         <p>Vous n’avez donc rien à prévoir, laissez-vous juste transporter&nbsp;dans cette univers œnologique.&nbsp;</p>
//         <p>&nbsp;</p>`,
//         practicalInfo: `<p>Cette expérience est également possible avec une bouteille de <strong>champagne.</strong></p>
//         <p>L’expérience se déroule via une vidéo enregistrée en amont pour vous permettre d’en profiter quand vous le souhaitez mais elle peut se dérouler en live sur demande.</p>
//         <p><strong>Le prix comprend l’envoi de la bouteille de vin ou champagne et l’expérience en vidéo.</strong></p>`
//     },
//     {
//         title: 'En immerson avec les loups',
//         shortTitle: 'Loups',
//         duration: 180,
//         range: [2, 20],
//         location: 'Région parsienne',
//         price: 120,
//         time: ['09:00', '12:00', '14:00', '17:00'],
//         coverImage: 'https://hobbizer.com/media/cache/activity/images/activity/list/5f9050ee9661f_BALADE-LOUP-HOBBIZER-FICHE.jpg',
//         images: [
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5f90510e6a068_BALADE-LOUPS-HOBBIZER-3.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5f90510522774_BALADE-LOUPS-HOBBIZER-2.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5f9050fc5fc96_BALADE-LOUPS-HOBBIZER-1.jpg'
//         ],
//         catchPhrase: `Avez-vous déjà rêvé d'approcher un loup ?`,
//         shortDescription: 'Vous êtes-vous déjà demandé quelle sensation vous procurerait de marcher en compagnie d’une meute ? Ne manquez pas cette occasion unique de rencontrer le plus mythique des animaux sauvages peuplant nos forêts, et approchez-le comme nul part ailleurs !',
//         longDecription: `<p>La <strong>balade en immersion avec des loups</strong> est un concept inédit en France&nbsp;: au sein d’un <strong>centre de dressage dédié au cinéma</strong>, vous évoluerez au sein de ces animaux impressionnants dans un espace naturel sécurisé de 2 hectares.</p>
//         <p>Après un <strong>petit déjeuner</strong> d’accueil, vous partirez à la rencontre des loups pour apprendre leurs tactiques d’approches, observer leurs jeux et leurs relations sociales. Vous visiterez ensuite le centre de dressage&nbsp;qui accueille une quarantaine d’espèces d’animaux.</p>
//         <p>Cette expérience peut être organisée sur&nbsp;toute journée en incluant d’autres activités telle&nbsp;que<strong> l'initiation&nbsp;à l'art de la Fauconnerie</strong>.</p>
//         <p>Nous pouvons également organiser sur demande une <strong>nuit dans un lodge</strong> au sein du centre de dressage au plus près des loups.</p>`,
//         practicalInfo: `<p><strong>INCLUS :&nbsp;</strong></p>
//         <p>Petit déjeuner d'accueil</p>
//         <p>Visite du centre de dressage</p>
//         <p><strong>EN OPTION SUR DEVIS&nbsp;</strong></p>
//         <p><strong>Privatisation des lieux</strong> pour votre groupe</p>
//         <p>Organisation d'une<strong> réunion&nbsp;de travail</strong> (salle de réception disponible)</p>
//         <p>Organisation d'un déjeuner et/ ou goûter&nbsp;</p>
//         <p>Découverte des autres animaux du centre de dressage</p>
//         <p>Initiation&nbsp;à l'art de la Fauconnerie&nbsp;</p>
//         <p>Nuit avec les loups dans un hôtel</p>
//         `
//     },
//     {
//         title: 'Observation des étoiles',
//         shortTitle: 'ASTRONOMIE',
//         duration: 'une nuit',
//         range: [4, 20],
//         location: 'Région parsienne',
//         price: 60,
//         time: ['17:00'],
//         coverImage: 'https://hobbizer.com/media/cache/activity/images/activity/list/5f998898b8bb5_ASTROBIVOUAC-HOBBIZER.jpg',
//         images: [
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fa02aabe47e2_ASTROBIVOUAC-HOBBIZER-EVG.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fa02ab86c20e_ASTROBIVOUAC-HOBBIZER-TEAM-BUILDING.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fa02ac86f721_ASTROBIVOUAC-AVENTURE-INSOLITE-HOBBIZER.jpg',
//             'https://hobbizer.com/media/cache/activity_slider/images/activity/slider/5fa02ad82762c_AVENTURE-TEAM-BUILDING-HOBBIZER.jpg'
//         ],
//         catchPhrase: 'Découvrez l’astronomie en pleine nature avec un passionné !',
//         shortDescription: `Partez observer les étoiles en pleine nature et découvrez le ciel et l’univers avec un guide.`,
//         longDecription: `<p>L’aventure à 1h de Paris, c’est possible&nbsp;!</p>
//         <p>Suivez Stephen à la découverte des meilleurs spots en forêt pour <strong>observer les étoiles</strong>.</p>
//         <p>Après une petite<strong> randonnée</strong> accessible à tous, vous installerez votre<strong> bivouac</strong> pendant que votre guide préparera le <strong>télescope</strong>. En attendant que la nuit tombe, vous pourrez avec un guide aller à la découverte de la faune et la flore qui se trouve autour de vous.</p>
//         <p>Ça y est&nbsp;! Il fait nuit&nbsp;noire&nbsp;! Tout est prêt&nbsp;? Le spectacle peut commencer&nbsp;: &nbsp;A tour de rôle, observez la magie qui opère en direct du ciel et comprenez ce qui se joue au-dessus de vos têtes.</p>
//         <p>Une expérience unique à vivre tout près de chez vous&nbsp;!</p>`,
//         practicalInfo: `<p>Repas (autour du feu évidemment) inclus</p>
//         <p><strong>Nous pouvons vous organisez au choix une nuit en bivouac ou une nuit en hotel.</strong></p>
//         <p><strong>Nous pouvons vous louer l’ensemble du matériel </strong>indispensable au bivouac si vous n’êtes pas équipés</p>
//         <p>Pour toute personnalisation de l’aventure, contactez-nous.</p>`
//     }
// ]

const UserContext = createContext({
    user: null,
    setUser: () => { },
    loading: false,
    signIn: () => { },
    signOut: () => { },
    registerUser: () => { },
    loginUser: () => { },
    logoutUser: () => { },
    error: null,
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");
    const modalCtx = useContext(ModalContext);

    console.log(user)

    const displayToast = (message) => {
        toast(message, {
            type: 'success',
            position: "bottom-center",
            autoClose: 4000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }


    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            user ? setUser(user) : setUser(null)
            setError("")
            setLoading(false)
        })
        // arr.forEach(async element => {
        //     await addDoc(collection(db, 'activities'), element)
        // })
        return () => unsubscribe
    }, [])


    const createUser = async (user, firstName, lastName) => {
        await setDoc(doc(db, 'users', user.uid), {
            id: user.uid,
            firstName: firstName,
            lastName: lastName,
            email: user.email,
        })
    }

    const registerUser = (email, firstName, lastName, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                modalCtx.closeModal()
                updateProfile(auth.currentUser, { displayName: firstName })
                    .then(() => {
                        setLoading(false);
                        setUser(() => auth.currentUser);
                        createUser(res.user, firstName, lastName)
                        displayToast("Vous êtes connecté")
                    })
                    .catch((err) => {
                        setLoading(false);
                        setError("Error while updating profile");
                    })
            }).then(res => {
                console.log("user: ", res);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                modalCtx.closeModal()
                displayToast("Vous êtes connecté")
                setLoading(false);
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }

    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                displayToast("Vous êtes déconnecté")
            })
    }


    return (
        <UserContext.Provider value={{
            user,
            loading,
            error,
            registerUser,
            loginUser,
            logoutUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

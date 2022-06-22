import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';



const PaymentForm = () => {

    const [cvc, setCvc] = useState('');
    const [expiry, setExpiry] = useState('');
    const [focus, setfocus] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    // Number
    const handleNumberFocus = (e) => {
        setfocus(e.target.name);
    }

    const handleNumberChange = (e) => {
        setNumber(+e.target.value);
    }
    // CVC
    const handleCvcFocus = (e) => {
        setfocus(e.target.name);
    }

    const handleCvcChange = (e) => {
        setCvc(e.target.value);
    }

    // NAME
    const handleNameFocus = (e) => {
        setfocus(e.target.name);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    // EXPIRY
    const handleExpiryFocus = (e) => {
        setfocus(e.target.name);
    }

    const handleExpiryChange = (e) => {
        setExpiry(e.target.value);
    }


    return (
        <div className='bg-white rounded-lg shadow-lg mx-auto p-4  max-w-md z-30'>
            <div id="PaymentForm">
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                    locale={{ valid: "Valable jusqu'au" }}
                    placeholders={{ name: 'Votre nom ici' }}
                />
                <form className='mt-6 info'>
                    <div className="flex flex-col gap-6 mb-6">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Numéro de carte</label>
                            <input type="tel"
                                name="number"
                                placeholder="0000 0000 0000 0000"
                                onChange={(e) => handleNumberChange(e)}
                                onFocus={(e) => handleNumberFocus(e)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Nom du détenteur</label>
                            <input onChange={(e) => handleNameChange(e)}
                                onFocus={(e) => handleNameFocus(e)} type="text" id="number" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John Doe" required />
                        </div>
                        <div className='flex gap-3'>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Date d'expiration</label>
                                <input onChange={(e) => handleExpiryChange(e)}
                                    onFocus={(e) => handleExpiryFocus(e)} name='expiry' type="text" maxLength={5} id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="06/23" required />
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">CVC/CVV</label>
                                <input onChange={(e) => handleCvcChange(e)}
                                    onFocus={(e) => handleCvcFocus(e)} name='cvc' type="text" maxLength={3} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="000" required />
                            </div>
                        </div>

                    </div>
                    <button type="button" className="w-full primary-button px-4 py-2">Payer!</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm
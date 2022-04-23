import { useEffect, useRef, useState } from "react"
import { useContext } from "react"
import SelectedContext from "../../context/selected-context"
const TimesInput = (props) => {

    const selectedCtx = useContext(SelectedContext)
    const menuItems = props.times


    const [selectedItem, setSelectedItem] = useState({
        item: selectedCtx.selectedTime ? menuItems[0] : null,
        idx: 0
    })


    const selectedItemHandler = (item) => {
        setSelectedItem(item)
        props.setSelectedTime(item.item)
    }

    const [state, setState] = useState(false)
    const selectMenuRef = useRef()

    useEffect(() => {
        const handleSelectMenu = (e) => {
            if (selectMenuRef.current == null || !selectMenuRef.current.contains(e.target)) {
                setState(false)
            }
        }

        document.addEventListener('click', handleSelectMenu)
        return () => {
            document.removeEventListener('click', handleSelectMenu)
        }

    }, [])


    return (

        <div className="relative   mx-auto text-[15px] w-full">


            <div className='flex flex-col  lg:px-6 w-full mb-4 sm:mb-0' ref={selectMenuRef} onClick={() => setState(!state)}>
                <label className='text-sm text-hobbizer' htmlFor='startDate'>Horaire</label>
                <div className='flex relative items-center'>
                    <button type="button" autoComplete="off" className='h-12 bg-transparent border outline-none border-white text-gray-900 text-lg rounded-lg  focus:border-hobbizer block w-full p-2.5 pr-8 text-left' placeholder='From' id='startDate' >{selectedItem.item ? selectedItem.item : <span className='text-hobbizer-gray text'>Choisir Horaire</span>}
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>


            {
                state ? (
                    <div className="relative w-full">
                        <ul className="absolute w-full mt-3 overflow-y-auto bg-white border rounded-md shadow-sm max-h-64" role="listbox">
                            {
                                menuItems.map((el, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => selectedItemHandler({
                                            item: el,
                                            idx
                                        })}
                                        className={`${selectedItem.idx === idx ? 'text-hobbizer   bg-pink-50' : ''} flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-hobbizer     hover:bg-pink-50`}
                                    >
                                        {el}
                                        {
                                            selectedItem.idx === idx ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-hobbizer    " viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            ) : ''
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : ''
            }
        </div>

    )
}

export default TimesInput
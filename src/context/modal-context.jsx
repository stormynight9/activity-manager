import { useState, createContext } from 'react';

const ModalContext = createContext({
    isOpen: true,
    toggleModal: () => { },
    modalContent: <></>,
    setModalContent: setModalContent => { }
});

export const ModalContectProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);



    const toggleModal = () => {
        setIsOpen(() => !isOpen);
    };

    return (
        <ModalContext.Provider value={{
            isOpen: isOpen,
            toggleModal: toggleModal,
            modalContent: modalContent,
            setModalContent: setModalContent
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContext


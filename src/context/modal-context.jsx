import { useState, createContext } from 'react';

const ModalContext = createContext({
    isOpen: true,
    toggleModal: () => { },
    modalContent: <></>,
    setModalContent: setModalContent => { },
    closeModal: () => { },
    setIsOpen: setIsOpen => { }
});

export const ModalContextProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

    const closeModal = () => {
        setIsOpen(false);
    }

    const toggleModal = () => {
        setIsOpen(() => !isOpen);
    };

    return (
        <ModalContext.Provider value={{
            isOpen: isOpen,
            toggleModal: toggleModal,
            modalContent: modalContent,
            setModalContent: setModalContent,
            closeModal: closeModal,
            setIsOpen: setIsOpen
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContext


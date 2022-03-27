import { useContext, useState } from "react"
import ModalContext from "../context/modal-context"


const Modal = (props) => {

    const modalCtx = useContext(ModalContext);

    return (
        modalCtx.isOpen ? (
            <div className="fixed inset-0 z-30 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => modalCtx.toggleModal()}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    {modalCtx.modalContent}
                </div>
            </div>
        ) : ''
    )
}

export default Modal
import Checkout from "../components/checkout/Checkout"
import Modal from "../components/shared/Modal"

const CheckoutPage = () => {
    return (
        <div className='mt-24 md:mt-36'>
            <Modal />
            <Checkout />
        </div>
    )
}

export default CheckoutPage
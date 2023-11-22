import PaymentForm from "./PaymentForm";

const Payment = ({ setActiveStep }) => {
    return (
        <div className="payment-container">
            <PaymentForm setActiveStep={setActiveStep} />
        </div>
    );
}

export default Payment;
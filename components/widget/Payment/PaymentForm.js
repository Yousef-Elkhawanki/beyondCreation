import { ErrorMessage, useFormik, Formik, Form, Field } from "formik";
import Button from "../../common/Button";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { API_URL } from "../../../utils/ApiHandler";

const PaymentForm = ({ setActiveStep }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${API_URL}/booking/payment/success`,
      },
    });
    if (error) {
      setLoading(false);
      toast.error(`Payment field please check your card data`, {
        position: "top-right",
        className: "toast-message",
        autoClose: 2500,
      });
    }
    setLoading(false);
  };
  return (
    <>
      <div className="form-container payment">
        <h4 className="medium">Your Payment Information</h4>
        <form onSubmit={onSubmit} className="stripe-form">
          <div className="stripe-form-elements">
            <PaymentElement />
          </div>
          <div className="form-group button-group">
            {/* <Button text={'Previous'} type={'button'} onClick={() => { setActiveStep(1) }} /> */}
            <Button text={"Process Booking"} type={"submit"} disabled={loading}>
              <svg
                width="12"
                height="15"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.375 7V4.75C3.375 2.28906 5.37891 0.25 7.875 0.25C10.3359 0.25 12.375 2.28906 12.375 4.75V7H13.5C14.7305 7 15.75 8.01953 15.75 9.25V16C15.75 17.2656 14.7305 18.25 13.5 18.25H2.25C0.984375 18.25 0 17.2656 0 16V9.25C0 8.01953 0.984375 7 2.25 7H3.375ZM5.0625 7H10.6875V4.75C10.6875 3.20312 9.42188 1.9375 7.875 1.9375C6.29297 1.9375 5.0625 3.20312 5.0625 4.75V7ZM1.6875 16C1.6875 16.3164 1.93359 16.5625 2.25 16.5625H13.5C13.7812 16.5625 14.0625 16.3164 14.0625 16V9.25C14.0625 8.96875 13.7812 8.6875 13.5 8.6875H2.25C1.93359 8.6875 1.6875 8.96875 1.6875 9.25V16Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;

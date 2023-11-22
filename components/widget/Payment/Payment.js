import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const Payment = ({ clientID }) => {
  const StripePromis = loadStripe(
    "pk_test_51NSAZ4Dqr3qRtlksnt7bmrTbM3NVofwGACXqA3ybcKiyiKSh3DVdfCNmjJ78pdEUUSTmPbtvQT9my89KB3EZ9s3D0050U0Naod"
  );
  const appearance = {
    variables: {
      // fontFamily:`public-font`
    },
    rules: {
      ".Input": {
        background: "red",
        border: `1px solid rgba(33, 29, 51, 0.2)`,
        borderRadius: "8px",
        padding: "1rem",
        outline: "0",
        lineHeight: "1.5",
        width: "100%",
      },
      ".Label": {
        height: "0",
        opacity: "0",
      },
    },
  };

  return (
    <div className="info-container">
      {clientID && (
        <Elements
          stripe={StripePromis}
          mode="payment"
          options={{
            clientSecret: `${clientID}`,
            appearance: appearance,
            // fonts: fonts
          }}
        >
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

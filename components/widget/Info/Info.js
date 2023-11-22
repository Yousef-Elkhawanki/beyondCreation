import { useEffect } from "react";
import InfoForm from "./InfoForm";

const Info = ({
  setTotalAmount,
  setPaymentAmount,
  setPaymentTax,
  setClientID,
  activeStep,
  formData,
  setFormData,
  setActiveStep,
  extras,
  experienceData,
  allMembers,
  setBookingData,
  selectedDay,
  bookingData,
}) => {
  return (
    <div className="info-container">
      <InfoForm
        setActiveStep={setActiveStep}
        experienceData={experienceData}
        allMembers={allMembers}
        setBookingData={setBookingData}
        extras={extras}
        selectedDay={selectedDay}
        bookingData={bookingData}
        formData={formData}
        setFormData={setFormData}
        activeStep={activeStep}
        setClientID={setClientID}
        setTotalAmount={setTotalAmount}
        setPaymentAmount={setPaymentAmount}
        setPaymentTax={setPaymentTax}
      />
    </div>
  );
};

export default Info;

import { useEffect, useState } from "react";
import Booking from "./Booking/Booking";
import Confirming from "./Confirming/Confirming";
import Info from "./Info/Info";
import Payment from "./Payment/Payment";
import Summary from "./Summary";
import { fetchData, fetchDynamicData } from "../../utils/ApiHandler";
// import { useQuery } from "@tanstack/react-query";
import { calculateDuration } from "../../utils/HelperFunctions";
import { useMemo } from "react";
import { priceCategories, rateNames } from "../../utils/FixedData";
import Extra from "./Info/Extra";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { bookingExtras } from "@/contexts/bookingExtras";
import { AiOutlineClose } from "react-icons/ai";
import { HandleWidget } from "@/contexts/activeWidget";

const Widget = ({ id }) => {
  console.log(id);
  const { activeWidget, setActiveWidget } = useContext(HandleWidget);
  const [activeStep, setActiveStep] = useState(0);
  const [duration, setDuration] = useState(false);
  const [value, setValue] = useState();
  const [experienceData, setExperienceData] = useState();
  const [monthStartTimes, setMonthStartTimes] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedTime, setSelectedTime] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })
  );
  const [extras, setExtras] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [formData, setFormData] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const { bookingExtraIds } = useContext(bookingExtras);

  const { data, isSuccess, isLoading, isError } = useQuery(
    ["experience-data"],
    () => fetchDynamicData("experience", id),
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  );
  const { data: monthData, isSuccess: monthIsSucrss } = useQuery(
    ["month-data", selectedMonth],
    () =>
      fetchData(
        `booking/available/month/widget?experience_id=${id}&date=${selectedMonth}`
      ),
    {
      enabled: !!selectedMonth,
      refetchOnWindowFocus: false,
    }
  );
  const [formattedValue, setFormattedValue] = useState();
  const [bookingData, setBookingData] = useState();
  const [clientID, setClientID] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [paymentAmount, setPaymentAmount] = useState();
  const [paymentTax, setPaymentTax] = useState();
  const [loading, setLoading] = useState(true);
  const {
    data: extraData,
    isSuccess: extraIsSucrss,
    isError: extraIsError,
  } = useQuery(
    ["extra-data", formattedValue],
    () =>
      fetchData(
        `start_time/extras?day=${formattedValue}&start_time_id=${selectedDay[selectedTime].start_time_id}`
      ),
    {
      enabled: !!selectedDay,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      if (data.data != null) {
        if (data?.data?.is_active == 0) {
          toast.error(`Inactive experience`, {
            position: "top-right",
            className: "toast-message",
            autoClose: 2500,
          });
        } else {
          setLoading(false);
          setExperienceData(data?.data);
        }
      } else {
        toast.error(`No experience found`, {
          position: "top-right",
          className: "toast-message",
          autoClose: 2500,
        });
        // setTimeout(()=>{
        //     navigate(-1)
        // },3000)
      }
    }
  }, [data, isSuccess]);

  useEffect(() => {
    monthIsSucrss && setMonthStartTimes(monthData?.data);
  }, [monthData, monthIsSucrss]);

  const [specificDates, setSpecificDates] = useState([]);

  useEffect(() => {
    if (monthStartTimes) {
      Object.keys(monthStartTimes).map((date) => {
        setSpecificDates((current) => [...current, new Date(date)]);
      });
      setSelectedDay(
        monthStartTimes[
          new Date(Object.keys(monthStartTimes)[0]).getFullYear() +
            "-" +
            (
              new Date(Object.keys(monthStartTimes)[0]).getMonth() + 1
            ).toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
            "-" +
            new Date(Object.keys(monthStartTimes)[0])
              .getDate()
              .toLocaleString("en-US", { minimumIntegerDigits: 2 })
        ]
      );
      monthStartTimes.length !== 0 &&
        setValue(new Date(Object.keys(monthStartTimes)[0]));
    }
  }, [monthStartTimes]);

  useEffect(() => {
    if (selectedDay) {
      experienceData?.scheduling_type === "datetime" &&
        calculateDuration(selectedDay[selectedTime], setDuration);
      setBookingData((current) => ({
        ...current,
        customer_notes: "",
        start_time_id: selectedDay[selectedTime].start_time_id,
        payment_type:
          selectedDay[selectedTime]?.charge_percentage > 0 ? "visa" : "cash",
      }));

      const members = [];
      if (selectedDay[selectedTime]?.pricing[0].pricing_type == "booking") {
        priceCategories.map((item, index) => {
          members.push({
            categoryName: item.value,
            categoryNo: 0,
            categoryRate: 0,
            categoryID: selectedDay[selectedTime]?.pricing[0].id,
            order: index + 2,
          });
        });
      } else {
        selectedDay[selectedTime]?.pricing.map((price, index) => {
          members.push({
            categoryName: price.name,
            categoryNo: 0,
            categoryRate: price.rate,
            categoryID: price.id,
            order: index + 2,
          });
        });
      }
      setAllMembers([
        ...new Map(
          members.map((item) => [item["categoryName"], item])
        ).values(),
      ]);
    }
  }, [selectedDay, selectedTime, experienceData]);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      const day = date
        .getDate()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 });
      const month = (date.getMonth() + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });
      const year = date.getFullYear();
      setFormattedValue(`${year}-${month}-${day}`);
      setBookingData((current) => ({
        ...current,
        booking_day: `${year}-${month}-${day}`,
      }));
    }
  }, [value]);

  useEffect(() => {
    extraIsSucrss && setExtras(extraData?.data);
  }, [extraIsSucrss, extraData]);

  useEffect(() => {
    sessionStorage.removeItem("widget_summary");
  }, []);

  if (isLoading) {
    return (
      <div className="loader-page success">
        <div className="submit-loading-container"></div>
      </div>
    );
  }

  return (
    <div className={`widget-container ${activeWidget ? "active-widget" : ""}`}>
      <div
        className="close-button"
        onClick={() => {
          setActiveStep(0);
          setActiveWidget(!activeWidget);
        }}
      >
        <AiOutlineClose />
      </div>
      <div className="widget">
        {activeStep === 0 ? (
          <Booking
            setActiveStep={setActiveStep}
            setSpecificDates={setSpecificDates}
            specificDates={specificDates}
            experienceData={experienceData}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            monthStartTimes={monthStartTimes}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            allMembers={allMembers}
            setAllMembers={setAllMembers}
            value={value}
            setValue={setValue}
            duration={duration}
            extras={extras}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        ) : (
          <div className="summary-confrim-wrapper">
            {extras?.length > 0 ? (
              activeStep === 1 ? (
                <div className="info-container">
                  <Extra
                    allMembers={allMembers}
                    setActiveStep={setActiveStep}
                    extras={extras}
                    activeStep={activeStep}
                    experienceData={experienceData}
                  />
                </div>
              ) : activeStep === 2 ? (
                <Info
                  setActiveStep={setActiveStep}
                  extras={extras}
                  experienceData={experienceData}
                  allMembers={allMembers}
                  setAllMembers={setAllMembers}
                  setBookingData={setBookingData}
                  bookingData={bookingData}
                  selectedDay={selectedDay[selectedTime]}
                  formData={formData}
                  setFormData={setFormData}
                  activeStep={activeStep}
                  setClientID={setClientID}
                  setTotalAmount={setTotalAmount}
                  setPaymentAmount={setPaymentAmount}
                  setPaymentTax={setPaymentTax}
                />
              ) : (
                activeStep === 3 && (
                  <Payment setActiveStep={setActiveStep} clientID={clientID} />
                )
              )
            ) : activeStep === 1 ? (
              <Info
                setActiveStep={setActiveStep}
                extras={extras}
                experienceData={experienceData}
                allMembers={allMembers}
                setAllMembers={setAllMembers}
                setBookingData={setBookingData}
                bookingData={bookingData}
                selectedDay={selectedDay[selectedTime]}
                formData={formData}
                setFormData={setFormData}
                activeStep={activeStep}
                setClientID={setClientID}
                setTotalAmount={setTotalAmount}
                setPaymentAmount={setPaymentAmount}
                setPaymentTax={setPaymentTax}
              />
            ) : (
              activeStep === 2 && (
                <Payment setActiveStep={setActiveStep} clientID={clientID} />
              )
            )}
            {
              <Summary
                totalAmount={totalAmount}
                paymentAmount={paymentAmount}
                paymentTax={paymentTax}
                extras={extras}
                experienceData={experienceData}
                duration={duration}
                value={value}
                images={experienceData?.images}
                selectedDay={selectedDay[selectedTime]}
                allMembers={allMembers}
                setAllMembers={setAllMembers}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                bookingExtraIds={bookingExtraIds}
              />
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;

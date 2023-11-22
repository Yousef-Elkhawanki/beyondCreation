import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import AllGallery from "./AllGallery";
import WidgetDetails from "./WidgetDetails";
import WidgetCalender from "./WidgetCalender";
import Banner from "./Banner";

const Booking = ({
  setActiveStep,
  setSpecificDates,
  specificDates,
  experienceData,
  allMembers,
  setAllMembers,
  selectedTime,
  setSelectedTime,
  setSelectedMonth,
  selectedMonth,
  monthStartTimes,
  selectedDay,
  setSelectedDay,
  value,
  setValue,
}) => {
  const [activeGallery, setActiveGallery] = useState(false);
  const images = [
    "./widget/gallery.png",
    "./widget/gallery2.png",
    "./widget/gallery.png",
    "./widget/gallery2.png",
    "./widget/gallery.png",
    "./widget/gallery2.png",
    "./widget/gallery.png",
    "./widget/gallery2.png",
    "./widget/gallery.png",
    "./widget/gallery2.png",
    "./widget/gallery.png",
    "./widget/gallery2.png",
    "./widget/gallery.png",
    "./widget/gallery2.png",
  ];

  return (
    <>
      {activeGallery ? (
        <AllGallery setActiveGallery={setActiveGallery} images={images} />
      ) : (
        <>
          <Banner experienceData={experienceData} />
          <div className="booking-widget">
            <WidgetDetails experienceData={experienceData} />
            <div className="calender-summary-wrapper">
              <WidgetCalender
                setActiveStep={setActiveStep}
                setSpecificDates={setSpecificDates}
                specificDates={specificDates}
                allMembers={allMembers}
                setAllMembers={setAllMembers}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                setSelectedMonth={setSelectedMonth}
                selectedMonth={selectedMonth}
                monthStartTimes={monthStartTimes}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                value={value}
                setValue={setValue}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Booking;

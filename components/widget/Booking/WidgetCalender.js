import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../../common/Button";
import { toast } from "react-toastify";
import { useContext } from "react";
import { bookingExtras } from "@/contexts/bookingExtras";
const WidgetCalender = ({
  setActiveStep,
  specificDates,
  allMembers,
  setAllMembers,
  selectedTime,
  setSelectedTime,
  setSelectedMonth,
  monthStartTimes,
  selectedDay,
  setSelectedDay,
  value,
  setValue,
}) => {
  const { setBookingExtraIds } = useContext(bookingExtras);
  const tileDisabled = ({ date }) => {
    return !specificDates.some((specificDate) => isSameDay(specificDate, date));
  };
  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handleStep = () => {
    if (
      allMembers.reduce((total, category) => total + category.categoryNo, 0) ==
      0
    ) {
      toast.error(`Please enter number of participants`, {
        position: "top-right",
        className: "toast-message",
        autoClose: 2500,
      });
      return;
    } else {
      if (
        allMembers.reduce((total, category) => total + category.categoryNo, 0) >
        selectedDay[selectedTime].remaining_seats
      ) {
        toast.error(
          `Only ${selectedDay[selectedTime].remaining_seats} seats available`,
          {
            position: "top-right",
            className: "toast-message",
            autoClose: 2500,
          }
        );
      } else {
        if (
          allMembers.reduce(
            (total, category) => total + category.categoryNo,
            0
          ) > selectedDay[selectedTime].max_participants
        ) {
          toast.error(
            `Max number of participants is ${selectedDay[selectedTime].max_participants}`,
            {
              position: "top-right",
              className: "toast-message",
              autoClose: 2500,
            }
          );
          return;
        } else if (
          allMembers.reduce(
            (total, category) => total + category.categoryNo,
            0
          ) < selectedDay[selectedTime].min_participants
        ) {
          toast.error(
            `Min number of participants is ${selectedDay[selectedTime].min_participants}`,
            {
              position: "top-right",
              className: "toast-message",
              autoClose: 2500,
            }
          );
          return;
        }
        window.scrollTo(0, 0);
        setActiveStep(1);
      }
    }
  };

  const handleRemoveMembers = (member) => {
    setBookingExtraIds([]);
    const members = [...allMembers];
    members.push({
      categoryName: member.categoryName,
      categoryNo: +member.categoryNo - 1,
      categoryRate: member.categoryRate,
      categoryID: member.categoryID,
      order: member.order,
    });
    setAllMembers([
      ...new Map(members.map((item) => [item["categoryName"], item])).values(),
    ]);
  };

  const handleAddMembers = (member) => {
    setBookingExtraIds([]);
    const members = [...allMembers];
    members.push({
      categoryName: member.categoryName,
      categoryNo: +member.categoryNo + 1,
      categoryRate: member.categoryRate,
      categoryID: member.categoryID,
      order: member.order,
    });
    setAllMembers([
      ...new Map(members.map((item) => [item["categoryName"], item])).values(),
    ]);
  };

  const handleInput = (member, value) => {
    setBookingExtraIds([]);
    const members = [...allMembers];
    members.push({
      categoryName: member.categoryName,
      categoryNo: parseInt(value, 10),
      categoryRate: member.categoryRate,
      categoryID: member.categoryID,
      order: member.order,
    });
    setAllMembers([
      ...new Map(members.map((item) => [item["categoryName"], item])).values(),
    ]);
  };

  return (
    <div className="widget-calender">
      <p className="medium">Choose Date</p>
      <Calendar
        value={value}
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.5 7.5L15 12L10.5 16.5"
              stroke="#211D33"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        prevLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.5 7.5L9 12L13.5 16.5"
              stroke="#211D33"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        tileDisabled={tileDisabled}
        onClickDay={(value) => {
          setBookingExtraIds([]);
          setAllMembers((current) =>
            current.map((item) => ({ ...item, categoryNo: 0 }))
          );
          setValue(value);
          setSelectedDay(
            monthStartTimes[
              new Date(value).getFullYear() +
                "-" +
                (new Date(value).getMonth() + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                }) +
                "-" +
                new Date(value)
                  .getDate()
                  .toLocaleString("en-US", { minimumIntegerDigits: 2 })
            ]
          );
        }}
        onActiveStartDateChange={(value) => {
          setSelectedMonth(
            new Date(value.activeStartDate).getFullYear() +
              "-" +
              (new Date(value.activeStartDate).getMonth() + 1).toLocaleString(
                "en-US",
                { minimumIntegerDigits: 2 }
              )
          );
        }}
      />
      {selectedDay && (
        <>
          <div className="select-time">
            {selectedDay?.map((time, index) => (
              <div
                className={`single-time ${selectedTime === index && "active"}`}
                key={index}
                onClick={() => {
                  setSelectedTime(index);
                  setAllMembers((current) =>
                    current.map((item) => ({ ...item, categoryNo: 0 }))
                  );
                }}
              >
                {time?.duration ? (
                  <div className="once-time">
                    <span className="medium times">
                      <span>Starts</span>
                      <span>
                        {new Date(value).getDate().toLocaleString("en-US", {
                          minimumIntegerDigits: 2,
                        }) +
                          "-" +
                          (new Date(value).getMonth() + 1).toLocaleString(
                            "en-US",
                            { minimumIntegerDigits: 2 }
                          ) +
                          "-" +
                          new Date(value).getFullYear()}{" "}
                        {time?.scheduling_type !== "pass" &&
                          `|| ${time.start_time}`}
                      </span>
                    </span>
                    <span className="medium times">
                      <span>Ends</span>
                      <span>
                        {new Date(
                          new Date(
                            new Date(value).getTime() +
                              time.duration * 24 * 60 * 60 * 1000
                          ).toDateString()
                        )
                          .getDate()
                          .toLocaleString("en-US", {
                            minimumIntegerDigits: 2,
                          }) +
                          "-" +
                          (
                            +new Date(
                              new Date(
                                new Date(value).getTime() +
                                  time.duration * 24 * 60 * 60 * 1000
                              ).toDateString()
                            ).getMonth() + 1
                          ).toLocaleString("en-US", {
                            minimumIntegerDigits: 2,
                          }) +
                          "-" +
                          new Date(
                            new Date(
                              new Date(value).getTime() +
                                time.duration * 24 * 60 * 60 * 1000
                            ).toDateString()
                          ).getFullYear()}{" "}
                        {time?.scheduling_type != "pass" &&
                          `|| ${time.end_time}`}{" "}
                      </span>
                    </span>
                  </div>
                ) : (
                  <span className="medium">
                    {time.start_time} - {time.end_time}
                  </span>
                )}
                <div
                  className={`${time?.duration && "once"} time-tooltip medium`}
                >
                  {time.remaining_seats} remaining seats
                </div>
              </div>
            ))}
          </div>
          <div className="select-type">
            {selectedDay[selectedTime]?.pricing[0].pricing_type == "booking" ? (
              <>
                {allMembers?.map((member, index) => (
                  <div className="type" key={index}>
                    <p className="medium name">{member.categoryName}</p>
                    <div className="counter">
                      <div
                        className={`sign ${
                          member.categoryNo <= 0 && "disabled"
                        }`}
                        onClick={() => {
                          member.categoryNo > 0 && handleRemoveMembers(member);
                        }}
                      >
                        <span>-</span>
                      </div>
                      <div>
                        <input
                          value={parseInt(member.categoryNo, 10)}
                          type="number"
                          onChange={(e) => handleInput(member, e.target.value)}
                          // onBlur={() => validateInput(member)}
                        />
                      </div>
                      <div
                        className="sign"
                        onClick={() => {
                          handleAddMembers(member);
                        }}
                      >
                        <span>+</span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {allMembers
                  .filter((member) =>
                    selectedDay[selectedTime]?.pricing.some(
                      (price) => price.name === member.categoryName
                    )
                  )
                  .map((member, index) => (
                    <div className="type" key={index}>
                      <p className="medium name">
                        {member.categoryName}
                        {<span>{member.categoryRate} AED for each</span>}
                      </p>
                      <div className="counter">
                        <div
                          className={`sign ${
                            member.categoryNo <= 0 && "disabled"
                          }`}
                          onClick={() => {
                            member.categoryNo > 0 &&
                              handleRemoveMembers(member);
                          }}
                        >
                          <span>-</span>
                        </div>
                        <div>
                          <input
                            value={parseInt(member.categoryNo, 10)}
                            type="number"
                            onChange={(e) =>
                              handleInput(member, e.target.value)
                            }
                            // onBlur={() => validateInput(member)}
                          />
                        </div>
                        <div
                          className="sign"
                          onClick={() => {
                            handleAddMembers(member);
                          }}
                        >
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}

            {isNaN(
              allMembers.reduce(
                (total, category) => total + category.categoryNo,
                0
              )
            ) && (
              <p className="numbers-errors medium">
                Please enter a valid member numbers.
              </p>
            )}
          </div>
          <div className="button-section">
            <Button
              text={"Next"}
              customClass={`${
                isNaN(
                  allMembers.reduce(
                    (total, category) => total + category.categoryNo,
                    0
                  )
                ) && "disabled"
              }`}
              onClick={
                !isNaN(
                  allMembers.reduce(
                    (total, category) => total + category.categoryNo,
                    0
                  )
                ) && handleStep
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WidgetCalender;

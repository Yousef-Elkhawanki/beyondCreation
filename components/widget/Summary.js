import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { isMobileContext } from "../../context/isMobileContext";
import CloseButton from "../common/CloseButton";

const Summary = ({
  totalAmount,
  paymentAmount,
  paymentTax,
  bookingExtraIds,
  totalPrice,
  setTotalPrice,
  experienceData,
  confirm,
  selectedDay,
  images,
  allMembers,
  value,
  duration,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setactiveIndex] = useState(0);
  const { isMobile } = useContext(isMobileContext);
  const [openItems, setOpenItems] = useState(false);
  const [date, setDate] = useState();
  const [discountAmount, setDiscountAmount] = useState(null);
  const [tieredDiscount, setTieredDiscount] = useState(null);
  const [extraPrice, setExtraPrice] = useState(0);

  const handleSummary = () => {
    if (openItems) {
      setOpenItems(false);
      document.body.classList.remove("no-scroll");
    } else {
      setOpenItems(true);
      document.body.classList.add("no-scroll");
    }
  };

  useEffect(() => {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    setDate(
      `${day.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })} ${month} ${year}`
    );
  }, [value]);

  useEffect(() => {
    let experiencePrice = 0;
    let extraPrice = 0;
    if (selectedDay?.pricing[0].pricing_type == "booking") {
      experiencePrice = selectedDay?.pricing[0].rate;
    } else {
      experiencePrice = allMembers?.reduce(
        (total, category) =>
          total + category.categoryRate * category.categoryNo,
        0
      );
    }

    bookingExtraIds?.map((extra) => {
      extraPrice += extra.extra_price;
    });

    if (selectedDay?.discount?.length > 0) {
      if (selectedDay?.discount[0]?.type == "fixed") {
        if (selectedDay?.discount[0]?.amount_type == "percentage") {
          if (selectedDay?.discount[0]?.category[0].amount < 100) {
            setTieredDiscount(false);
            setDiscountAmount(
              experiencePrice -
                (experiencePrice *
                  selectedDay?.discount[0]?.category[0].amount) /
                  100
            );
          }
        } else {
          if (selectedDay?.discount[0]?.category[0].amount < experiencePrice)
            setTieredDiscount(false);
          setDiscountAmount(
            experiencePrice - selectedDay?.discount[0]?.category[0].amount
          );
        }
      } else {
        selectedDay?.discount[0]?.category?.map((item) => {
          if (
            allMembers?.reduce(
              (total, category) => total + category.categoryNo,
              0
            ) >= item.min_participants &&
            allMembers?.reduce(
              (total, category) => total + category.categoryNo,
              0
            ) <= item.max_participants
          ) {
            if (selectedDay?.discount[0]?.amount_type == "percentage") {
              if (item.amount < 100) {
                setTieredDiscount(item);
                setDiscountAmount(
                  experiencePrice - (experiencePrice * item.amount) / 100
                );
              }
            } else {
              if (item.amount < experiencePrice) {
                setTieredDiscount(item);
                setDiscountAmount(experiencePrice - item.amount);
              }
            }
          }
        });
      }
    }
    setExtraPrice(extraPrice);
    setTotalPrice &&
      setTotalPrice((experiencePrice + extraPrice).toLocaleString());
  }, [selectedDay, bookingExtraIds, allMembers]);

  useEffect(() => {
    if (!confirm) {
      const widgetSummary = {
        allMembers: allMembers,
        date: date,
        selectedDay: selectedDay,
        bookingExtraIds: bookingExtraIds,
        totalPrice: totalPrice,
        experienceData: experienceData,
        images: images,
        value: value,
        duration: duration,
        totalAmount: totalAmount,
        paymentAmount: paymentAmount,
        paymentTax: paymentTax,
      };
      sessionStorage.setItem("widget_summary", JSON.stringify(widgetSummary));
    }
  }, [
    totalAmount,
    paymentAmount,
    paymentTax,
    confirm,
    allMembers,
    date,
    selectedDay,
    bookingExtraIds,
    totalPrice,
    experienceData,
    images,
    duration,
    value,
  ]);

  return (
    <>
      <div
        className={`summary-container ${isMobile && "mobile"} ${
          openItems && "opened"
        }`}
      >
        <div className="data-wrapper">
          <div className="booking-summary">
            <h4>Booking Summary</h4>
            <div className="details-container">
              <div className="data">
                <div className="item">
                  <span className="medium">Date</span>
                  <p className="bold">{date}</p>
                </div>
                {selectedDay?.scheduling_type != "pass" && (
                  <div className="item">
                    <span className="medium">Time</span>
                    <p className="bold">{selectedDay?.start_time}</p>
                  </div>
                )}
                <div className="item">
                  <span className="medium">Duration</span>
                  <p className="bold">
                    {selectedDay?.repeat == "once" ||
                    selectedDay?.scheduling_type == "pass"
                      ? selectedDay.duration > 1
                        ? selectedDay.duration + " Days"
                        : selectedDay.duration + " Day"
                      : duration + " H"}
                  </p>
                </div>
              </div>
              {allMembers?.reduce(
                (total, category) => total + category.categoryNo,
                0
              ) ? (
                <div className="data">
                  <div className="item extra">
                    <span className="medium">Participants</span>
                    {allMembers?.map(
                      (member, index) =>
                        member.categoryNo > 0 && (
                          <div className="extra-data" key={index}>
                            <p className="bold">
                              {member.categoryNo}X {member.categoryName}
                            </p>
                            {member.categoryRate > 0 &&
                              !isNaN(
                                +(member.categoryRate * member.categoryNo)
                              ) && (
                                <p className="bold">
                                  {" "}
                                  {
                                    +(member.categoryRate * member.categoryNo)
                                  }{" "}
                                  AED
                                </p>
                              )}
                          </div>
                        )
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
              {bookingExtraIds?.length > 0 && (
                <div className="data">
                  <div className="item extra">
                    <span className="medium">Extras</span>
                    {bookingExtraIds
                      ?.sort((a, b) => a.extra_price - b.extra_price)
                      .map((extra) => (
                        <div className="extra-data" key={extra.extra_id}>
                          <p className="bold">
                            {extra.quantity}X {extra.extra_title}
                          </p>
                          {extra.extra_price != 0 && (
                            <p className="bold">{extra.extra_price} AED</p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
              {selectedDay?.discount?.length > 0 && tieredDiscount != null && (
                <div className="data">
                  <div className="item price extra">
                    <span className="medium">Discount</span>
                    {selectedDay?.discount[0]?.type == "fixed" ? (
                      <p className="bold">
                        {selectedDay?.discount[0]?.category[0].amount}
                        {selectedDay?.discount[0]?.amount_type == "percentage"
                          ? " %"
                          : " AED"}
                      </p>
                    ) : (
                      <p className="bold">
                        {tieredDiscount?.amount}
                        {selectedDay?.discount[0]?.amount_type == "percentage"
                          ? " %"
                          : " AED"}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {!totalAmount && (
                <>
                  <div className="data">
                    <div className="item price">
                      <span className="medium">Price</span>
                      <p className="bold"> {totalPrice} AED</p>
                    </div>
                  </div>
                  {discountAmount && tieredDiscount != null && (
                    <div className="data">
                      <div className="item price">
                        <span className="medium">Price after discount</span>
                        <p className="bold">
                          {" "}
                          {discountAmount + extraPrice} AED
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
              {totalAmount && (
                <>
                  <div className="data">
                    <div className="item price">
                      <span className="medium">Payment tax</span>
                      <p className="bold"> {paymentTax} AED</p>
                    </div>
                  </div>
                  <div className="data">
                    <div className="item price">
                      <span className="medium">Total amount</span>
                      <p className="bold"> {totalAmount} AED</p>
                    </div>
                  </div>
                  <div className="data">
                    <div className="item price">
                      <span className="medium">Payment amount</span>
                      <p className="bold"> {paymentAmount} AED</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {!confirm && (
            <div className="swiper-container">
              <div className="swiper-wrap">
                <Swiper
                  // style={{ direction: locale == "ar" ? "rtl" : "ltr" }}
                  modules={[Thumbs, Navigation]}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next-summary",
                    prevEl: ".swiper-button-prev-summary",
                  }}
                  className="swiper-summary-section"
                  slidesPerView={1}
                  spaceBetween={20}
                  onSlideChange={(swiper) => {
                    setactiveIndex(swiper.activeIndex);
                  }}
                >
                  {images?.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img alt="img" src={img} />
                    </SwiperSlide>
                  ))}
                  {images?.length > 1 && (
                    <div className="arrows-container">
                      <div className="swiper-button swiper-button-prev-summary">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.0625 0.691406L0.25 5.28516C0.113281 5.42188 0.03125 5.58594 0.03125 5.77734C0.03125 5.94141 0.113281 6.10547 0.25 6.24219L5.0625 10.8359C5.30859 11.082 5.74609 11.082 5.99219 10.8086C6.23828 10.5625 6.23828 10.125 5.96484 9.87891L2.32812 6.43359H11.625C12.0078 6.43359 12.2812 6.13281 12.2812 5.77734C12.2812 5.39453 12.0078 5.12109 11.625 5.12109H2.32812L5.96484 1.64844C6.23828 1.40234 6.23828 0.964844 5.99219 0.71875C5.74609 0.445312 5.33594 0.445312 5.0625 0.691406Z"
                            fill="#211D33"
                          />
                        </svg>
                      </div>
                      <div className="swiper-button swiper-button-next-summary">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.9375 0.691406L12.75 5.28516C12.8867 5.42188 12.9688 5.58594 12.9688 5.77734C12.9688 5.94141 12.8867 6.10547 12.75 6.24219L7.9375 10.8359C7.69141 11.082 7.25391 11.082 7.00781 10.8086C6.76172 10.5625 6.76172 10.125 7.03516 9.87891L10.6719 6.43359H1.375C0.992188 6.43359 0.71875 6.13281 0.71875 5.77734C0.71875 5.39453 0.992188 5.12109 1.375 5.12109H10.6719L7.03516 1.64844C6.76172 1.40234 6.76172 0.964844 7.00781 0.71875C7.25391 0.445312 7.66406 0.445312 7.9375 0.691406Z"
                            fill="#211D33"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </Swiper>
                {images?.length > 1 && (
                  <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    className="thumb-swiper-container"
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                  >
                    {images?.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={`img-container ${
                            activeIndex === index && "active"
                          }`}
                        >
                          <img alt="img" src={img} />
                          <div className="overlay"></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="header-container">
                <h1>{experienceData?.name}</h1>
                <p>{experienceData?.short_description}</p>
              </div>
            </div>
          )}
        </div>
        <div className={`footer`}>
          <div className="title">
            <p className="medium">Order Summary</p>
            <h1 className="bold">{experienceData?.name}</h1>
          </div>
          <div className="total">
            <div className="item price">
              <span className="medium">Payment amount</span>
              <p className="bold">
                {" "}
                {paymentAmount ||
                  (discountAmount && tieredDiscount != null
                    ? discountAmount + extraPrice
                    : totalPrice + extraPrice)}{" "}
                AED
              </p>
            </div>
          </div>
        </div>
        <CloseButton icon onClick={handleSummary} />
      </div>
      {openItems && isMobile && <div className="website-overlay"></div>}
    </>
  );
};

export default Summary;

import { useState } from "react";
import { useEffect } from "react";
import ImageModal from "./ImageModal";
import { createPortal } from "react-dom";
const Banner = ({ experienceData }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (experienceData?.images.length > 1) {
        setActiveSlide(activeSlide + 1);
        setPrevSlide(prevSlide > activeSlide ? 0 : prevSlide + 1);
        if (experienceData?.images.length > 2) {
          if (activeSlide === 2) {
            setActiveSlide(0);
            setPrevSlide(activeSlide);
          }
        } else {
          if (activeSlide === 1) {
            setActiveSlide(0);
            setPrevSlide(activeSlide - 2);
          }
        }
      }
    }, 4000);
    return () => clearTimeout(timeOut);
  }, [activeSlide, prevSlide, experienceData]);

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="banner-swiper">
      {experienceData?.images.map(
        (img, index) =>
          index < 3 && (
            <div
              className={`
                    ${activeSlide === index ? "active" : ""} 
                    ${prevSlide === index ? "prev" : ""}
                     banner-img`}
              key={index}
            >
              <img src={img} alt="img" />
            </div>
          )
      )}
      <div className="swiper-pagination-bullets">
        {experienceData?.images.map(
          (img, index) =>
            index < 3 && (
              <div
                className={`
                    ${activeSlide === index ? "active" : ""} 
                    swiper-pagination-bullet`}
                key={index}
              >
                {/* ${!anim && 'sliderDir'} */}
                <div
                  className={`
                            ${firstLoad && "firstLoad"}
                            `}
                ></div>
              </div>
            )
        )}
      </div>
      <div className="banner-data">
        {experienceData?.city &&
          experienceData?.area &&
          experienceData?.street && (
            <a
              href={`http://maps.google.com/?q=${experienceData?.latitude},${experienceData?.longitude}`}
              target={"_blank"}
              className="location"
              rel="noreferrer"
              aria-label={"location"}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 21 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.786 10.5522C19.786 5.27873 15.5073 1 10.2338 1C4.96037 1 0.681641 5.27873 0.681641 10.5522C0.681641 12.8823 1.55374 14.9944 2.93683 16.6501L6.89533 22.053L10.2338 26.8904L17.5308 16.6569C18.9207 15.0012 19.786 12.8891 19.786 10.559V10.5522Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M10.233 13.4202C8.39347 13.4202 6.90137 11.9281 6.90137 10.0885C6.90137 8.24894 8.39347 6.75684 10.233 6.75684C12.0726 6.75684 13.5647 8.24894 13.5647 10.0885C13.5647 11.9281 12.0726 13.4202 10.233 13.4202Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M1.36265 22.1211L0 30.297H19.7584L18.3958 22.8024"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>

              <span>
                {experienceData?.street}, {experienceData?.area},{" "}
                {experienceData?.city}
              </span>
            </a>
          )}
        <h1>{experienceData?.name}</h1>
        <p>{experienceData?.short_description}</p>
        {experienceData?.images?.length > 3 && (
          <div
            className="see-all"
            onClick={() => {
              document.body.classList.add("no-scroll");
              setShowModal(true);
            }}
          >
            See all photos
          </div>
        )}
      </div>
      <div className="overlay"></div>
      <div className="scroll-down">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
      {showModal &&
        createPortal(
          <ImageModal
            setShowModal={setShowModal}
            images={experienceData?.images}
          />,
          document.body
        )}
    </div>
  );
};

export default Banner;

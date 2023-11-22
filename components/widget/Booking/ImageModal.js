import CloseButton from "../../common/CloseButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageModal = ({ img, setShowModal, images }) => {
  return (
    <div className="modal-container">
      <div className="img-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-summary",
            prevEl: ".swiper-button-prev-summary",
          }}
          className="swiper-summary-section"
          slidesPerView={1}
          spaceBetween={20}
        >
          {images?.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="img-wrapper">
                <img src={img} alt="img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
        <div className="overlay"></div>
        <CloseButton
          onClick={() => {
            document.body.classList.remove("no-scroll");
            setShowModal(false);
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;

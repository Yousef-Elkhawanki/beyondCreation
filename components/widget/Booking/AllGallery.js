import { useEffect, useState } from "react";
import CloseButton from "../../common/CloseButton";
import { createPortal } from 'react-dom';
import ImageModal from "./ImageModal";
const AllGallery = ({ images, setActiveGallery }) => {
    const activeGalleryHandler = () => {
        setActiveGallery(false)
    }
    const [showModal, setShowModal] = useState(false)
    const [activeImg, setActiveImg] = useState(false)
    useEffect(()=>{
        window.scroll(0,0)
        setShowModal(false)
        setActiveImg(false)
    },[])
    return (
        <div className="all-gallery">
            <div className="close-button">
                <CloseButton onClick={activeGalleryHandler} />
            </div>
            <div className="all-gallery-container">
                {images?.map((img, index) => (
                    <div className="img-container" key={index}>
                        <img
                            src={img}
                            alt="img"
                        />
                        <div className="gallery-overLay" onClick={() => { document.body.classList.add("no-scroll"); setShowModal(true); setActiveImg(img) }}>
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.96875 20.1875C8.73047 20.1875 9.375 20.832 9.375 21.5938C9.375 22.4141 8.73047 23 7.96875 23H1.40625C0.585938 23 0 22.4141 0 21.5938V15.0312C0 14.2695 0.585938 13.625 1.40625 13.625C2.16797 13.625 2.8125 14.2695 2.8125 15.0312V20.1875H7.96875ZM7.96875 0.5C8.73047 0.5 9.375 1.14453 9.375 1.90625C9.375 2.72656 8.73047 3.3125 7.96875 3.3125H2.8125V8.46875C2.8125 9.28906 2.16797 9.875 1.40625 9.875C0.585938 9.875 0 9.28906 0 8.46875V1.90625C0 1.14453 0.585938 0.5 1.40625 0.5H7.96875ZM28.5938 0.5C29.3555 0.5 30 1.14453 30 1.90625V8.46875C30 9.28906 29.3555 9.875 28.5938 9.875C27.7734 9.875 27.1875 9.28906 27.1875 8.46875V3.3125H22.0312C21.2109 3.3125 20.625 2.72656 20.625 1.90625C20.625 1.14453 21.2109 0.5 22.0312 0.5H28.5938ZM28.5938 13.625C29.3555 13.625 30 14.2695 30 15.0312V21.5938C30 22.4141 29.3555 23 28.5938 23H22.0312C21.2109 23 20.625 22.4141 20.625 21.5938C20.625 20.832 21.2109 20.1875 22.0312 20.1875H27.1875V15.0312C27.1875 14.2695 27.7734 13.625 28.5938 13.625Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                ))}
            </div>
            {showModal && createPortal(
                <ImageModal
                    img={activeImg}
                    setShowModal={setShowModal}
                />,
                document.body
            )}
        </div>
    );
}

export default AllGallery;
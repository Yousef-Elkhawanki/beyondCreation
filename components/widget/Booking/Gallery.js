const Gallery = ({setActiveGallery,images}) => {
    return (
        <div className="gallery-container">
            <div className="large-img">
                <img
                    src={images[0]}
                    alt="img"
                />
            </div>
            <div className="small-imgs-group">
                {images?.map((img, index) => (
                    index > 0 && index < 5 &&
                    <div className="img-container" key={index}>
                        <img
                            src={img}
                            alt="img"
                        />
                        {index === 4 &&
                            <div className="gallery-overLay medium" onClick={()=>{setActiveGallery(true)}}>
                                <span>See all photos</span>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
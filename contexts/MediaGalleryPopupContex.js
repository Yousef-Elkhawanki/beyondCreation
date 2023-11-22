"use client";
import { useRef } from "react";
import { createContext, useState } from "react";

//create a context, with createContext api
export const MediaGalleryPopupContext = createContext();

function MediaGalleryPopupProvider(props) {
  const [activeImage, setActiveImage] = useState({ name: "", url: "" });
  const [activeAlbum, setActiveAlbum] = useState([]);
  const [activeVideo, setActiveVideo] = useState("");
  return (
    <>
      <MediaGalleryPopupContext.Provider
        value={{
          activeImage,
          setActiveImage,
          activeAlbum,
          setActiveAlbum,
          activeVideo,
          setActiveVideo,
        }}
      >
        {props.children}
      </MediaGalleryPopupContext.Provider>
    </>
  );
}

export default MediaGalleryPopupProvider;

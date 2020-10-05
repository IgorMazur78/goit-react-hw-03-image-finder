import React from "react";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ newImage, openingModalWindow }) {
return(
<ul className={style.ImageGallery}>
    {newImage.map(({ id, webformatURL, tags,largeImageURL}) => (
      <li key={id} className={style.ImageGalleryItem} >
        <img
          src={webformatURL}
          alt={tags}
          data-source = {
            largeImageURL
          }
          className={style.ImageGalleryItemImage}
          onClick = {openingModalWindow}
        />
      </li>
    ))}
  </ul>
)
  
}

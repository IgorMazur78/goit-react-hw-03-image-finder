import React from "react";
import style from "../ImageGallery/ImageGallery.module.css"

export default function ImageGalleryItem({}) {
  return (
    <li className={style.ImageGalleryItem}>
      <img src="" alt="" className={style.ItemImage}/>
    </li>
  );
}

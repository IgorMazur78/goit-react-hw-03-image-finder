import React from "react";
import style from "./Modal.module.css"

export default function Modal({closeModal, largeImage}){
    
    
return (
    <div className={style.Overlay} onClick = {closeModal}>
  <div className={style.Modal} >
    <img src= {largeImage} alt="" className = {style.ItemImage}/>
  </div>
</div>
)
}


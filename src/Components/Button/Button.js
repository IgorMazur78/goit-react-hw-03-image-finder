import React from "react";
import style from "./Button.module.css" 

export default function Button({uploadTheFollowingPictures,}){
    return(
        <button type = "button" onClick = {uploadTheFollowingPictures} className = {style.Button}>Load more</button>
    )
}
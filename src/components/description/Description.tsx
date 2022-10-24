import React from "react";
import Styles from "./Styles.module.css";


interface description{
    name:string,
    description:string
}
const Description = ({name, description}:description)=>{

    return (
        
        <div className={Styles.main}>
            <div className={Styles.name}><span>{name}</span></div>
            <div className={Styles.description}><span>{description}</span></div>
        </div>

    )
}
export default Description;
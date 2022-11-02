import React, { ReactNode } from "react";
import Styles from "./form.module.css";
interface Form{
    description:string,
    children:ReactNode
}
const Form = ({description,children}:Form) =>{
    return(
        <div className={Styles.mainBlock} >
            <div className={Styles.block}>
                <p>{description}</p>
                    {children}
            </div>

        </div>
    )

}
export default Form;
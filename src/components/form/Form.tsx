import React, { ReactNode } from "react";

interface Form{
    name:string,
    children:ReactNode
}
const Form = ({name,children}:Form) =>{
    return(
        <div>
            <p>{name}</p>
            {children}
        </div>
    )

}
export default Form;
import React, { ChangeEvent,useState } from "react";
import Form from "../../components/form/Form";
import Styles from "./styles.module.css";
import formStyles from "../../components/form/form.module.css";

import { validationMail ,validationNumCode } from "../../functions/validations";
import ChangePassword from "../changePassword/ChangePassword";

const ForgotPassword = () => {

    const [isGetCode,setGetCode] = useState(false); 
    const [disabled,setDisabled] = useState({buf1:true,buf2:false});
    const [goChangePassword,setGoChangePassword] = useState(false);

    const changeAttribute = (indexBuf:string,value:string,validationFunc: Function) =>{
        if(validationFunc(value)===true){
            if(indexBuf==="1"){
                setDisabled({buf1:false,buf2:disabled.buf2});
            }
            else{
                setDisabled({buf1:disabled.buf1,buf2:false});
            }
            
            return true;   
        }
        else{

            if(indexBuf==="1"){
                setDisabled({buf1:true,buf2:disabled.buf2});
            }
            else{
                setDisabled({buf1:disabled.buf1,buf2:true});
            }
            
            return false;
        }

    }
    const changeHandler = (e:ChangeEvent<HTMLInputElement>,validationFunc: Function) =>{
        const value =  e.currentTarget.value;
        const but  = e.currentTarget?.parentElement?.lastChild;
        const getId = (but:any)=>but.id;
        if(but!==undefined && but!==null)changeAttribute(getId(but),value,validationFunc)
            /*if(!changeAttribute(getId(but),value,validationFunc) && getId(but)==="2")e.currentTarget.value = value.slice(0,-1);*/
        


    }

    const getCode = () =>{
        setGetCode(true);
        console.log("func work!");

    }

    const changePassword = () => {
        setGoChangePassword(true);
    }
    return (
        <>
        {goChangePassword===false?(
        <Form description={"Восстановление пароля"}>
            <div className={formStyles.info}>
                <p>Чтобы восстановить пароль, необходимо ввести код, которой придёт к вам на почту</p>
                <div>
                    <label className={formStyles.item}>Введите вашу почту:</label>
                    <input onChange={(e)=>{changeHandler(e,validationMail)}} className={formStyles.item} type={"text"} placeholder= {"Введите почту"}></input>
                    <button id={"1"} onClick={(getCode)} disabled={disabled.buf1} className={formStyles.item} type={"submit"}>Отправить</button>
                </div>

                {isGetCode===true? (<div>
                    <label className={formStyles.item}>Проверьте почту.Введите код:</label>
                    <input  onChange={(e)=>changeHandler(e,validationNumCode)} className={formStyles.item} type={"tel"} placeholder= {"Введите код"}></input>
                    <button id={"2"} onClick={changePassword}  className={formStyles.item} disabled={disabled.buf2}  >Отправить</button>
                </div>):<></>}     
                

            </div> 
            </Form> 
            ):<ChangePassword/>
            }
            </>
        )
}
export default ForgotPassword;
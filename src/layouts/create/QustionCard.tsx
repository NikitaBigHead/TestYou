import React, { ChangeEvent, useState } from "react";
import { Key } from "readline";
import Styles  from "./Styles.module.css";
import {validationNullText} from "../../functions/validations";

interface card{
    variants:string[],
    answersIndexes:any[],
    text:string,
    number:number,
    callback:Function
}
const QuistionCard = ({number,variants,answersIndexes,text,callback}:card)=>{

    let quistion = {
        variants:variants,
        answersIndexes:answersIndexes,
        text:text,
    }

    const [checked,setChecked]  = useState<boolean[]>([]); 
    const [state,setState] = useState<boolean>(true);
    const [isVoid,setVoid] = useState({
        desciprion:validationNullText(text)?"":Styles.voidInput
    })

    //if(validationNullText(text))setVoid({desciprion:""});

    const changeCheckBox = (index:number) => {
        let arr:boolean[] = checked;
        arr[index] = !arr[index];
        setChecked(arr);

        let arrTrueIndexes = checked.map((el,index)=>{
            if(el===true)return Number(index);
        });
        quistion.answersIndexes = arrTrueIndexes;
        setQustion();
    }
    const deleteVariant = (index:number) =>{
        quistion.variants.splice(index,1);
        setState(!state);
        setQustion();
    }
    const getVarValue = (e:React.ChangeEvent<any>) =>{
        const value = e.currentTarget.parentNode.firstChild.value;
        if(validationNullText(value)){
            e.currentTarget.parentNode.firstChild.value = "";
            quistion.variants.push(value);
            setState(!state);
            setQustion();
        }
        else{
            alert("Минимальная длина ответа 3 символа");
        }
    }
    const setQustion = () =>{
        callback(number,quistion);
        }
    const textChangeHandler = (e:any) => {
        if(validationNullText(e.currentTarget.innerHTML)){
            quistion.text = e.currentTarget.innerHTML;
            setQustion();
            setVoid({desciprion:""});
        }
        else{
            setVoid({desciprion:Styles.voidInput});
        } 
    }
    return (<>

            <div >
                <label className={Styles.item}>Ваш вопрос</label>
                <div onKeyDown={textChangeHandler}  contentEditable={true}  className={`${Styles.item} ${isVoid.desciprion} ${Styles.textarea}`} >{text}</div>
            </div>
            
            <div className={Styles.varAnswers}>

                {quistion.variants.map((el,index)=>
                    <div className={Styles.variant} key = {index}>
                        <input checked = {checked[index]} onChange={()=>changeCheckBox(index)} className={Styles.variantItem} type={"checkbox"}/>
                        <label className={Styles.variantItem}>{el}</label>
                        <button onClick={()=>deleteVariant(index)} className={Styles.variantItem} >&times;</button>
                    </div>)
                }
                
            </div>
            <h3>Добавтье ответ</h3>
            <div className={Styles.addVar}>
                <input className={Styles.item} placeholder="Напишите ответ тут"/>
                <button onClick = {(e)=>getVarValue(e)}className={Styles.item}>Добавить</button>
            </div>

        </>)
}

export default QuistionCard;
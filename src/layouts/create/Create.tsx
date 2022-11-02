import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles.module.css";
import QustionCard from "./QustionCard";
import { stat } from "fs";
import {validationNullText,validationQuistionCount} from "../../functions/validations";
import test from "node:test";
interface quistion{
    text:string,
    variants:string[],
    answersIndexes:number[]
}


let testInfo = {
    name:"",
    desription:""
}
let quistons:quistion[] = [{
    text:"чо uuiuui почем",
    variants:["Пример ауаответа","Другой примецуацуацр ответа"],
    answersIndexes:[]
},
{
    text:"чо ни почем",
    variants:["Пример ответа","Другой пример ответа"],
    answersIndexes:[]
},
];

const Create = ()=>{
    const navigate = useNavigate();

    const [page, setPage] = useState(1); 
    const [state,setState] = useState(true);
    const [isVoid,setVoid] = useState({
        name:Styles.voidInput,
        desciprion:Styles.voidInput
    })

    const pageChanger = (step:number)=>{
        if(page+step>0 && page+step<4)
        setPage(page+step);
    }
    const deleteHandler = (index:number)=>{
        //log();
        quistons.splice(index,1);
        setState(!state);
        //log();
    }

    const log = () =>{
        quistons.map((el,index)=>console.log(el.text +" " + index))
    }
    const createQuistion = () => {
        quistons.push({
            text:"",
            variants:[],
            answersIndexes:[]
        });
        setState(!state);
    }
    const callbackQuistion = (index:number,quistion:quistion)=>{
        //console.log( quistion.text);
        //console.log( quistion.variants);
        //console.log( quistion.answersIndexes);
        
        quistons[index].text = quistion.text;
        quistons[index].variants = quistion.variants;
        quistons[index].answersIndexes = quistion.answersIndexes;
    }
    const getInfoValue = (e:any,indexValue:number) =>{
        if(indexValue===0){
            if(validationNullText(e.currentTarget.value)){
                testInfo.name = e.currentTarget.value;
                setVoid({name:"",desciprion:isVoid.desciprion});
            }
            else{
                setVoid({name:Styles.voidInput,desciprion:isVoid.desciprion});
            }
        }
        else{
            if(validationNullText(e.currentTarget.innerHTML)){
                testInfo.desription = e.currentTarget.innerHTML;
                setVoid({name:isVoid.name,desciprion:""});
            }
            else{
                setVoid({name:isVoid.name,desciprion:Styles.voidInput});
            }
        }
    }
    const sendData = () =>{
        if(window.confirm("Вы уверенны?")){
            if(isVoid.desciprion==="" && isVoid.name === "" && validationQuistionCount(quistons)){
                let test = {
                    info:testInfo,
                    quistons:quistons
                };
                //send();
                navigate("/tests");
            }
            else{
                alert("Заполните данные до конца");
            }

        }

        

    }
    return (
        <div>
        <div className={Styles.main}>
        <div className={Styles.mainBlock}>

            <h2>Создание теста</h2>

            <div className={Styles.info}>
                            
                <div className={Styles.buttons}>
                    <button onClick={()=>pageChanger(1)} className={Styles.button}>Дальше</button>
                    <button  onClick={()=>pageChanger(-1)} className={Styles.button}>Назад</button>
                </div>
                {page===1?(<>
                    <div className={Styles.block}>
                        <label className={Styles.item}>Название теста</label>
                        <input onChange={(e)=>getInfoValue(e,0)} className={`${Styles.item} ${isVoid.name} `}></input>
                    </div>
                    <div className={Styles.block}>
                        <label className = {Styles.item}>Описание теста</label>
                        <div onKeyDown={(e)=>getInfoValue(e,1)} contentEditable = {true}  className={`${Styles.item} ${isVoid.desciprion}  ${Styles.textarea}`} ></div>
                    </div>

                </> ):<></>}
            
                {page===2?(
                <div className={Styles.block} >
                    <h2>Вопросы</h2>
                    {quistons.map((el:quistion,index)=>{
                        return (        
                        <div  className={Styles.quistion}>
                            <div className={Styles.numberQustion}>
                                <h2>Вопрос № {index+1}</h2>
                                <button onClick={()=>deleteHandler(index)}>&times;</button>
                            </div>
                            <QustionCard key={index}
                            number = {index}  
                            variants = {quistons[index].variants}
                            text ={quistons[index].text}
                            answersIndexes={quistons[index].answersIndexes}
                            callback={callbackQuistion}/>
                        </div>
                        )})
                    }
                    <button onClick= {createQuistion}className={Styles.addQuistion}>&#9998;</button>
                </div>
                ):
                <></>}
                {page===3?(<>
                    <div className={Styles.block}>
                        <p className={Styles.item}>Если вы уверены в правильности вашего теста, то отправьте его нам. </p>
                        <button onClick={sendData} className={Styles.confirmButton}>Отправить</button>
                    </div>
                </>)
                :<></>}

            
            </div>


        </div>
        </div>
        </div>
    )
}
export default Create;

/*
<div className={Styles.quistion}>
                        <div className={Styles.numberQustion}>
                            <h2>Вопрос № 1</h2>
                            <button>&times;</button>
                        </div>
                        <div className={""}>
                            <label className={Styles.item}>Ваш вопрос</label>
                            <div contentEditable={true}  className={`${Styles.item}  ${Styles.textarea}`} ></div>
                        </div>
                        
                        <div className={Styles.varAnswers}>
 

                            <div className={Styles.variant}>
                                <input className={Styles.variantItem} type={"checkbox"}/>
                                <label className={Styles.variantItem}>Пример ответа</label>
                                <button className={Styles.variantItem} >&times;</button>
                            </div>
                        </div>
                        <h3>Добавтье ответ</h3>
                        <div className={Styles.addVar}>
                            <input className={Styles.item} placeholder="Напишите ответ тут"/>
                            <button className={Styles.item}>Добавить</button>
                        </div>
                    </div>
                    <button className={Styles.addQuistion}>&#9998;</button>
*/
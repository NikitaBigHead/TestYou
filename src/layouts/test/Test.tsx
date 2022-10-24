import React,{useState} from "react";
import {tests} from "../../TestData/mainData";
import Styles from "./Styles.module.css";
import {useParams} from "react-router-dom";

interface Test{
    id:string
}
const Test =  () =>{


    const {id} = useParams();

    const getTest = ()=>{
        let item;
        for(item of tests){
            if(item.id === id ){
                break;
            }
        }
        return item;
    }
    const changeQuistion = ()=>{
        let index = question.index + 1;
        setQuestion({
            index: index,
            name: test?.test.questions[index].name,
            text:test?.test.questions[index].text,
            answers: test?.test.questions[index].variants
        });
    }


    const test = getTest();

    const [question,setQuestion] = useState({
        index:0,
        name:test?.test.questions[0].name,
        text:test?.test.questions[0].text,
        answers:test?.test.questions[0].variants
    });

    return (
        <div className={Styles.main}>
            <div className={Styles.quistion}>
                
                <p className={Styles.quistion}>{question.text}</p>
                <div className={Styles.answers}>
                    {question.answers?.map((value : string,index:number) => {
                        return <div className={Styles.checker}> - {value}<input type = {"checkbox"} name={value} value={index} /></div>
                    })}
                </div>
                <div className={Styles.buttons}>
                    <button onClick={changeQuistion}>Знаю</button>
                    <button>Не знаю</button>
                    <button>Пропустить</button>
                </div>
            </div>
        </div>
    )
}
export default Test;
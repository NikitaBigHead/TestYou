import React,{useEffect, useState} from "react";
import {tests} from "../../TestData/mainData";
import Styles from "./Styles.module.css";
import {useParams} from "react-router-dom";
import Result from "../resultPage/Result";
interface Test{
    id:string
}

let resultList : boolean[] = [];
const Test =  () =>{

    const refAnswers= React.createRef<HTMLDivElement>();
    const [page,setPage] = useState(1);
    let userAnswers = [];
    const [checked,setChecked] = useState({ arrChecked:new Array(10).fill(false)});

    const {id} = useParams();
    const [style,setStyle] = useState("none");

    const getTest = ()=>{
        let item;
        for(item of tests){
            if(item.id === id ){
                break;
            }
        }
        return item;
    }
    const test = getTest();

    
    const changeHandler = (index:number) => {
        let arr:boolean[]  = checked.arrChecked;
        arr[index] = !arr[index];
        setChecked({arrChecked:arr});
    }
    
    const changeQuistion = ()=>{

        setStyle("");
        let index = question.index + 1;
        if(index< (test?.test!==undefined?test?.test.questions.length:10)){


            setChecked({arrChecked:new Array(10).fill(false)});
            setQuestion({
                index: index,
                name: test?.test.questions[index].name,
                text:test?.test.questions[index].text,
                answers: test?.test.questions[index].variants,
                indexes:test?.test.questions[index].answerIndex
            });
        }
        else{
            setPage(2);
        }
    }

    const checkQustion = () => {

        let count = 0;
        let True = 0;
        for(let i = 0;i<checked.arrChecked.length;i++ ){
            if( checked.arrChecked[i] === true){
                True++;
                let arr = question.indexes!==undefined? question.indexes: [100];
                for(let key of arr){
                    if(i===key){
                        count++;
                        break;
                    }
                }
            }
        }
        
        if(count === question.indexes?.length  && True==count){
            resultList.push(true);
            setStyle(Styles.true);
        }
        else{
            resultList.push(false);
            setStyle(Styles.false);
        }
        setTimeout(()=>changeQuistion(),500);
        
        
    }
    const skip = ()=>{
        changeQuistion();
    }

    const [question,setQuestion] = useState({
        index:0,
        name:test?.test.questions[0].name,
        text:test?.test.questions[0].text,
        answers:test?.test.questions[0].variants,
        indexes:test?.test.questions[0].answerIndex
    });

    return (
        <>
        { page==1?
        <div className={`${Styles.main} ${style}`}>
           
            <div className={Styles.quistion}>
                
                <p className={Styles.quistion}>{question.text}</p>
                <div className={Styles.answers} ref={refAnswers}>
                    {question.answers?.map((value : string,index:number) => {
                        return <div className={Styles.checker}> - {value}
                        <input key = {index} checked = {checked.arrChecked[index]} onChange={()=>changeHandler(index)}  type = {"checkbox"}  /></div>
                    })}
                </div>

                <div className={Styles.buttons}>
                    <button onClick={checkQustion}>Знаю</button>
                    <button onClick={skip}>Пропустить</button>
                </div>
            </div>
            </div>
            :<></>}

            {page==2?
            <Result name = {test?.description.name} listAnswers={resultList}/>:
            <></>}
        </>

    )
}
export default Test;
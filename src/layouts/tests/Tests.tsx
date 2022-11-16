// import test from "node:test";
import React, { MouseEventHandler, ReactElement, useState } from "react";
import { tests } from "../../TestData/mainData";
import Styles from "./Styles.module.css"
import { useNavigate } from "react-router-dom";
import { format } from "path";

interface test{
    id:string,
    description:{
        name:string,
        text:string
    },
    test:{
        questions: quistion[]
        
    }

}
interface quistion{
    name:string,
    text:string,
    variants:string[],
    answerIndex:number[]
}

const Tests = () =>{

    let testIndex : string = "";
    const navigate = useNavigate();

    const openTest = (e: React.MouseEvent) => {
        testIndex = e.currentTarget.firstChild?.textContent == undefined ?"":e.currentTarget.firstChild?.textContent;
        navigate("/test/" + testIndex);
    }

    const getJSXtests= (tests:test[]) => {
        let arr: React.ReactNode[] = [];
        let output:React.ReactNode[] = [];
        let index = 0;
        let rowLen = 3;


        for(let i=0;i<Math.floor(tests.length/3);i++){

            for(let j = index;j<index+rowLen;j++){
                arr.push((
                <div onClick={openTest} key = {tests[j].id} className={Styles.testBlock} >
                    <p className={Styles.meta}>{tests[j].id}</p>
                    <h2>{tests[j].description.name}</h2>
                    <p>{tests[j].description.text}</p>
                </div>))
            }

            index = index + rowLen; 

            output.push((
                <div className = {Styles.tests} >
                    {arr.map(el=>el)}
                </div>
            ));

            arr = [];
        }
        
        if(tests.length%3!==0){
            for(let i = index;i<index + tests.length%3;i++){
                arr.push((
                    <div onClick={openTest} key = {tests[i].id} className={Styles.testBlock} >
                        <p className={Styles.meta} >{tests[i].id}</p>
                        <h2>{tests[i].description.name}</h2>
                        <p>{tests[i].description.text}</p>
                    </div>));
            }
            output.push((<div className={Styles.tests}>{arr.map(el=>el)}</div>));

        }
        return output;
        
    }
    return (
        <div>
            {getJSXtests(tests).map(el=>el)}
        </div>


    )
}
export default Tests;
/*
<div className={Styles.tests}>
{
    tests.map((el)=>
            <div key = {el.id} className = {Styles.testBlock}>
                <p>{el.id}</p>
                <p>{el.description.name}</p>
                <p>{el.description.text}</p>

            </div>
             )             
}
</div>
*/
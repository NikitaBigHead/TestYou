import React from "react";
import Styles from "./Styles.module.css";

interface result{
    name:string | undefined,
    listAnswers:Boolean[]
}
const Result = ({name,listAnswers}:result) => {

    let amount = listAnswers.length;
    let trueAmount = getTrueAmount();
    
    function getTrueAmount(){
        console.log(listAnswers);
        let count = 0;
        for(let el of listAnswers){
            if(el===true){
                count++;
            }
        }
        return count;
        
    }

    
    const getList = () => {
        let output: React.ReactNode[] = [];
        for(let i =0;i<listAnswers.length;i++){
            let str = "Правильно";
            if(listAnswers[i] === false){
                str = "Неправильно";
            }
            output.push(<p>{(i+1) + ": "}{str}</p>);
        }
        return output;
    }
    return (
    <div className={Styles.main}>
        <span>Результаты теста</span>
        <div className={Styles.block}>
            <div className={Styles.info}>
                <p>Название теста: {name}</p>
                <p>Правильных ответов: {trueAmount} из {amount}</p>
                <div className={Styles.answers}>
                    {getList()}
                </div>
            </div>
        </div>
    </div>)
}

export default Result;
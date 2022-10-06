import React,{useState} from "react";
import {Menu} from "antd";

interface Item{
    key:string,
    url:string,
    text:string
    
}
const Item = ({key,url,text}:Item)=>{
    const [state,setState] = useState("");

    const handler = ()=>{
        document.location = url;
        if(state =="selected"){
            setState("");
        }
        else{
            setState("selected");
        }
    }

    return (
        <Menu.Item className = {"Item" + state} key = {key} onClick= {handler} >text</Menu.Item>
    )
}
export default Item;

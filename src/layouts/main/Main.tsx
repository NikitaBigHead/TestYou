import React from "react";
import Description from "../../components/description/Description";

import {data} from "../../TestData/mainData";

const Main = ()=>{
    return (
        <div>
            <Description name = {data.name} description = {data.description}/>
            <br/>
            <br/>
        </div>
    )
}


export default Main;
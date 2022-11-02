
const validCharacters:string[] = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split("");
const specialValidCharacters:string[] = ["-","_","."];


export const validationMail = (mail:string) =>{
    const count = mail.split("").filter((value) =>value==="@");
    if((count.length<2 && count.length!=0 )
     ){
        const buf = mail.split("@");
        const objMail  = {name:buf[0].split(""),domain:buf[1].split("")};
        
        if(objMail.name.length ==0 || objMail.domain.length==0) return false;

        if (objMail.name[0] === "." || objMail.name[objMail.name.length-1] === "."){
            return false;
        }
        if(objMail.domain[0] === "." || objMail.domain[objMail.name.length-1] === "."){
            return false;
        }
        if(objMail.domain[0] === "-" || objMail.domain[objMail.name.length-1] === "-"){
            return false;
        }

        for (let el of objMail.name){
            if(validCharacters.includes(el) === false && specialValidCharacters.includes(el)===false)return false;
        }

        for (let el of objMail.domain){
            if(validCharacters.includes(el) === false && specialValidCharacters.includes(el)===false )return false;
        }


        //проверка на две соседние точки
        for(let i = 0 ;i<objMail.domain.length-1;i++){
            if(objMail.domain[i] === "." && objMail.domain[i+1] === "." ){
                return false;
            }
        }


        return true;
    }
    return false;
}

const validationNum = "1234567890".split("");
export const validationNumCode = (code:string) =>{
    if(code.length==0) return false;
    
    for(let el of code){
        if(validationNum.includes(el)===false){
            return false;
        }
    }
    return true;

}


export const validationNullText = (text:string) =>{
    if(text.length<3){
        return false;
    }
    return true;
}

export const validationQuistionCount = (quistons:any[])=>{
    for(let el of quistons){
        if(el.variants.length===0){
            return false;
        }
    }
    return true;
}
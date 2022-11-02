import React, { ChangeEvent,useState } from "react";
import Styles from "./Styles.module.css";

let data = {
    countPassedTests: 10,
    name:"Никита",
    surname:"Кузьмин",
    nickname:"Nyashka"
}
const Account = () => {


    const [image,setImage] = useState("");
    const [isSelected,setSelected] = useState(Styles.none);
    
    const changeHandler = (e: any) => {
       setImage( URL.createObjectURL(e.target.files[0]));
       setSelected("");
    }

    const clickHandler = (e:React.MouseEvent)=>{
        setSelected(Styles.none);
        setImage("");
    }
    return (
        <div className={Styles.main}>
            <label>Мой аккаунт</label>
            <div className={Styles.block}>
                <div className={Styles.info}>
                    <label className={Styles.item}>Ваш никнейм:</label>
                    <input disabled className={Styles.item} type={"text"} placeholder= {"Ваш никнейм"} value={data.nickname}></input>
                    <label className={Styles.item}>Ваше имя:</label>
                    <input className={Styles.item} type={"text"} placeholder= {"Ваше имя"} value={data.name}></input>
                    <label className={Styles.item}>Ваша фамилия:</label>
                    <input className={Styles.item} type={"text"} placeholder= {"Ваша фамилия"} value={data.surname}></input>
                    <button>Изменить</button>

                    <h2>Колличество пройденных тестов : {data.countPassedTests}</h2>
                </div>
                <div className={Styles.photoSelection}>
                    <label>Ваша аватарка</label>
                    
                    <div className={`${Styles.photo} ${isSelected}`}>
                        <img  src={image} ></img >
                    </div>
                    <div className={Styles.buttonDelete} onClick={clickHandler}><button>&times;</button></div>
                    <input onChange={changeHandler} type={"file"} multiple accept="image/*"/>

                </div>
               
            </div>
        </div>
    )
}
export default Account;
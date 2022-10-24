import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Styles.module.css";
import Form from "../../components/form/Form";

const Login = ()=>{
    return (
        <div className={Styles.mainBlock} >
            <div className={Styles.block}>
                <p>Добро пожаловать на TestYou</p>
                <div className={Styles.loginInfo}>
                    <label className={Styles.item}>Ваш логин:</label>
                    <input className={Styles.item} type={"email"} placeholder= {"Введите логин"}></input>
                    <label className={Styles.item} >Ваш пароль:</label>
                    <input className={Styles.item} type = {"password"} placeholder= {"Введите пароль"}></input>
                    <button className={Styles.item}> Войти</button>
                    <div><span>Запомнить меня</span> <input type = {"checkbox"}></input></div>  
                    <div className={Styles.links}>
                        
                        <NavLink className={Styles.link} to="/reg">Регистрация </NavLink>
                        <NavLink className={Styles.link} to="/#">Восстановить пароль</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;
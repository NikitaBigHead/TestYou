import React from "react";
import { NavLink } from "react-router-dom";
import formStyles from "../../components/form/form.module.css";
import Styles from "./Styles.module.css";
import Form from "../../components/form/Form";

const Login = ()=>{
    return (
        <Form description={"Добро пожаловать на TestYou!"}>
                <div className={formStyles.info}>
                <form action="#" method="POST">
                    <label className={formStyles.item}>Ваш логин:</label>
                    <input className={formStyles.item} type={"email"} placeholder= {"Введите логин"}></input>
                    <label className={formStyles.item} >Ваш пароль:</label>
                    <input className={formStyles.item} type = {"password"} placeholder= {"Введите пароль"}></input>
                    <button className={formStyles.item}> Войти</button>
                    <div><span>Запомнить меня</span> <input type = {"checkbox"}></input></div>  
                    <div className={Styles.links}>
                        
                        <NavLink className={formStyles.link} to="/reg">Регистрация </NavLink>
                        <NavLink className={formStyles.link} to="/fgpassword">Восстановить пароль</NavLink>
                    </div>
                </form>
                </div>
        </Form>
    )
}
export default Login;
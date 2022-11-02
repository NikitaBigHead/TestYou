import React from "react";
import Form from "../../components/form/Form";
import Styles from "./Styles.module.css";
import formStyles from "../../components/form/form.module.css";
const Register = ()=>{
    return (
        <Form description={"Регистрация"}>
            <div className={formStyles.info}>
                <form action="#" method="POST">
                    <label className={formStyles.item}>Ваш никнейм:</label>
                    <input className={formStyles.item} type={"text"} placeholder= {"Введите никнейм"}></input>
                    <label className={formStyles.item}>Ваш логин:</label>
                    <input className={formStyles.item} type={"email"} placeholder= {"Введите логин"}></input>
                    <label className={formStyles.item} >Ваш пароль:</label>
                    <input className={formStyles.item} type = {"password"} placeholder= {"Введите пароль"}></input>
                    <label className={formStyles.item} >Повторите ваш пароль:</label>
                    <input className={formStyles.item} type = {"password"} placeholder= {"Введите пароль"}></input>
                    <button className={formStyles.item} type={"submit"}> Зарегистрироваться</button>
                </form>
            </div>
        </Form>
    )
}
export default Register;
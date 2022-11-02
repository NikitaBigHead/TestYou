import React from "react";
import Form from "../../components/form/Form";
import formStyles from "../../components/form/form.module.css";


const ChangePassword =  () => {

    return (
        <Form description={"Изменение пароля"}>
            <div className={formStyles.info}>
                <form action="#" method="POST">
                    <label className={formStyles.item} > Ваш новый пароль:</label>
                    <input className={formStyles.item} type = {"password"} placeholder= {"Введите пароль"}></input>
                    <label className={formStyles.item} >Повторите ваш новый пароль:</label>
                    <input className={formStyles.item} type = {"password"} placeholder= {"Введите пароль"}></input>
                    <button className={formStyles.item} type={"submit"}> Сменить пароль</button>
                </form>
            </div>
        </Form>
    )
}  
export default ChangePassword; 
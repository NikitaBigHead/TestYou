import  styles  from "./Styles.module.css";
import React, {useState} from "react";
import { NavLink,useLocation} from "react-router-dom";


const Header=()=>{

    const location = useLocation();

    
    const [isActive,setActivies] = useState({
        tests:"",
        create:"",
        login:""
    });
    const clickHandler = () =>{
        switch(location.pathname){
            case "/tests":
                setActivies({
                    tests:styles.active,
                    create:"",
                    login:""
                })
                break;
            case "/create":
                setActivies({
                    tests:"",
                    create:styles.active,
                    login:""
                })
                break;
            case "/login":
                setActivies({
                    tests:"",
                    create:"",
                    login:styles.active
                })
                break;
        
            
        }
    }
    return(
            <header className={styles.header}>
                <NavLink className={styles.logo} to = "/">TestYou</NavLink>
                <nav className={styles.headerNav}>
                    
                    <NavLink onClick={clickHandler} className={`${styles.Item} ${isActive.tests}`} to ="/tests">Тесты</NavLink>
                    <NavLink onClick={clickHandler} className={`${styles.Item} ${isActive.create}`} to ="/create">Создать</NavLink>
                    <NavLink onClick={clickHandler} className={`${styles.Item} ${isActive.login}`} to ="/login">Войти</NavLink>
                </nav>
            </header>
    )
}
export default Header;
import "./styles.css";
import React from "react";
import { NavLink } from "react-router-dom";



const Header=()=>{
    return(
        <div className="ho">
            <header className="header">
                <a className="logo" href = "#">TestYou</a>
                <nav className="headerNav">
                    <NavLink style={{    padding:"1rem 5rem", textDecoration:"none",color:"black"}} to ="/tests">Тесты</NavLink>
                    <NavLink className={"item"} to ="/create">Создать</NavLink>
                    <NavLink className={"item"} to ="/login">Войти</NavLink>
                </nav>
            </header>
        </div>
    )
}
export default Header;
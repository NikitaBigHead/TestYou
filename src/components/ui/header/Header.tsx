import React from "react";
import {Layout,Menu} from"antd";
import "antd/dist/antd.css";
import "./header.css";
import Item from "./menu.item/Item";

const {Header} = Layout;

const _Header=()=>{
    return(
        <Layout className="layout">
            <Header className="Header">
                <div className="logo" onClick={()=>document.location  = "/"}>TestYou</div>
                <Menu className="Menu"
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['']}>


                    <Menu.Item className = "Item" key = "1" onClick={()=>document.location  = "/create"} >Создать</Menu.Item>
                    <Menu.Item className = "Item" key = "2" onClick={()=>document.location  = "/tests"}>Тесты</Menu.Item>
                    <Menu.Item className = "Item" key = "3" onClick={()=>document.location  = "/login"}>Войти</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}
export default _Header;
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
                    <Item key = "1" url = "/create" text = "Создать"/>
                    <Item key = "2" url = "/tests" text = "Создать"/>
                    <Item key = "3" url = "/login" text = "Создать"/>
                </Menu>
            </Header>
        </Layout>
    )
}
export default _Header;
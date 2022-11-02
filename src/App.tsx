import React from 'react';
import Header from './components/header/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ROUTES from "./constants/routes";
import Styles from "./App.module.css";

import Main from './layouts/main/Main';
import Tests from './layouts/tests/Tests';
import Test from './layouts/test/Test';
import Create from './layouts/create/Create';
import Login from './layouts/login/Login';
import Register from './layouts/register/Register';
import ForgotPassword from './layouts/forgotPassword/ForgotPassword';
import Account from './layouts/accountInfo/Account';

function App() {
  document.body.style.backgroundColor = "rgb(214, 255, 254)";
  return (
    
    <div>
      <Header/>
      <Routes>
        <Route path = {ROUTES.home} element= {<Main/>}/>
        <Route path = {ROUTES.tests} element= {<Tests/> } />
        <Route path = {ROUTES.create} element= {<Create/> } />
        <Route path = {ROUTES.login} element= {<Login/> } />
        <Route path = {ROUTES.registration} element= {<Register/>}/>
        <Route path = {ROUTES.fgPassword} element= {<ForgotPassword/>}/>
        <Route path = "/test">
          <Route path=":id" element = {<Test/>}></Route>
        </Route>
        
        <Route path = {"/account"} element= {<Account/>}/>
      </Routes>
    </div>
  );
}

export default App;

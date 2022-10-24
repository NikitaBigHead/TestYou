import React from 'react';
import Header from './components/header/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ROUTES from "./constants/routes";

import Main from './layouts/main/Main';
import Tests from './layouts/tests/Tests';
import Create from './layouts/create/Create';
import Login from './layouts/login/Login';
import Styles from "./App.module.css";
import Test from './layouts/test/Test';

function App() {
  return (
    
    <div className= {Styles.background}>
      <Header/>
      <Routes>
        <Route path = {ROUTES.home} element= {<Main/>}/>
        <Route path = {ROUTES.tests} element= {<Tests/> } />
        <Route path = {ROUTES.create} element= {<Create/> } />
        <Route path = {ROUTES.login} element= {<Login/> } />
        <Route path = "/test">
          <Route path=":id" element = {<Test/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

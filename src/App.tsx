import React from 'react';
import Header from './components/ui/header/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ROUTES from "./constants/routes";

import Main from './components/layouts/main/Main';
import Tests from './components/layouts/tests/Tests';
import Create from './components/layouts/create/Create';
import Login from './components/layouts/login/Login';

function App() {
  return (
    
    <div>
      <Header/>
      <Routes>
        <Route path = {ROUTES.home} element= {<Main/>}/>
        <Route path = {ROUTES.tests} element= {<Tests/> } />
        <Route path = {ROUTES.create} element= {<Create/> } />
        <Route path = {ROUTES.login} element= {<Login/> } />
      </Routes>
    </div>
  );
}

export default App;

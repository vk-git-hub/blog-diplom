import React from 'react';
import './App.module.css';
import {Route, Routes} from 'react-router-dom';
import {Login} from "./pages/Login/Login";
import {Posts} from "./pages/Posts/Posts";
import {Registration} from "./pages/Registration/Registration";
import {Home} from "./pages/Home/Home";

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/posts' element={<Posts/>}/>
        </Routes>
    );

}

export default Navigation;

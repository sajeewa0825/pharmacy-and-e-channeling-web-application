import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import Head from './component/Navbar/Navhead';


const DoctorPage = () => {

    return (
        <BrowserRouter>
            {/* <Head /> */}
            <Routes>
                <Route path='signup' element={<SignUp />} />
                <Route path='signin' element={<Login />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default DoctorPage;
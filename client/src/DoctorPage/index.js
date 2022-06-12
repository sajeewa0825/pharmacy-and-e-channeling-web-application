import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import Head from './component/Navbar/Navhead';
import Footer from '../component/Footer/footer';
import Appoiment from './component/Appointment';


const DoctorPage = () => {

    return (
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path='signup' element={<SignUp />} />
                <Route path='signin' element={<Login />} />
                <Route path='appointment' element={<Appoiment />} />
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default DoctorPage;
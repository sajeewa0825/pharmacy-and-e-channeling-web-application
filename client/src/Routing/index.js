import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homedr from '../DoctorPage/component/Home';
import Login from '../DoctorPage/component/Login/Login';
import SignUp from '../DoctorPage/component/Login/SignUp';
import Head from '../DoctorPage/component/Navbar/Navhead';
import Footer from '../component/Footer/footer';
import Appoiment from '../DoctorPage/component/Appointment';
import Landing from '../Landing/Landing';
import Homeph from "../component/Home/home"


const Routing = () => {

    return (
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path='signup' element={<SignUp />} />
                <Route path='signin' element={<Login />} />
                <Route path='appointment' element={<Appoiment />} />
                <Route path='drhome' element={<Homedr />} />
                <Route path='phhome' element={<Homeph />} />
                <Route path='/' element={<Landing />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;
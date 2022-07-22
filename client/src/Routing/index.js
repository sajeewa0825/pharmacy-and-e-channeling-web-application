import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homedr from "../DoctorPage/Home";
import Login from "../DoctorPage/component/Login/Login";
import SignUp from "../DoctorPage/component/Login/SignUp";
import Head from "../DoctorPage/component/Navbar/Navhead";
import Footer from "../component/Footer/footer";
import Appoiment from "../DoctorPage/component/Appointment";
import Landing from "../Landing/Landing";
import Homeph from "../component/Home/home";
import About from "../component/About/About";
import Shop from "../component/shop/shop";
import Frogetpassword from "../DoctorPage/component/Login/Frogetpassword";
import PasswordReset from "../DoctorPage/component/Login/ResetPassword";
import AdminDashboard from "./../AdminDashBoard/AdminDashboard";
import AdminDoctor from "./../AdminDashBoard/AdminDoctor/AdminDoctor";
import AdminPatient from "../AdminDashBoard/AdminPatient/AdminPatient";
import AdminAppoinment from "../AdminDashBoard/AdminAppoinment/AdminAppoinment";
import AdminProduct from "../AdminDashBoard/AdminProduct/AdminProduct";
import Cart from "../component/Home/Cart/Cart";
import ContactUs from "./../component/ContactUs/ContactUs";

const Routing = () => {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<Login />} />
        <Route path="appointment" element={<Appoiment />} />
        <Route path="drhome" element={<Homedr />} />
        <Route path="phhome" element={<Homeph />} />
        <Route path="phaboutus" element={<About />} />
        <Route path="phshop" element={<Shop />} />
        <Route path="frogetpassword" element={<Frogetpassword />} />
        <Route path="resetpassword" element={<PasswordReset />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="adminDoctor" element={<AdminDoctor />} />
        <Route path="adminPatient" element={<AdminPatient />} />
        <Route path="adminAppoinment" element={<AdminAppoinment />} />
        <Route path="adminProduct" element={<AdminProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

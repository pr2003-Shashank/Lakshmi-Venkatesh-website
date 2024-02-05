import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Product from "./pages/product";
import ContactUs from "./pages/contactus";
import Login from "./pages/login";
import Admin from './Dashboards/view/admin';
import User from "./Dashboards/view/user";

function AppRoutes(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path="" element={<Home />} />
                    <Route path='' element={<Navigate to='/home' />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="product" element={<Product />} />
                    <Route path="contactus" element={<ContactUs />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
        </>
    );
}
export default AppRoutes;
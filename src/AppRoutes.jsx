import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import Home from "./pages/home.jsx";
import AboutUs from "./pages/about.jsx";
import Product from "./pages/product.jsx";
import ContactUs from "./pages/contactus.jsx";
import Login from "./pages/login.jsx";
// import Admin from './dashboards/view/admin.jsx';
import User from "./dashboards/view/user.jsx";
import Content from "./dashboards/shared/content.jsx";

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
                {/* <Route path="/admin/" element={<Admin />}>
                    <Route path="" element={<Content selectedPage="overview" />} />
                    <Route path="products" element={<Content selectedPage="products" />} />
                    <Route path="users" element={<Content selectedPage="users" />} />
                    <Route path="orders" element={<Content selectedPage="orders" />} />
                    <Route path="account" element={<Content selectedPage="account" />} />
                </Route> */}
                <Route path="/user" element={<User />} />

            </Routes>
        </>
    );
}
export default AppRoutes;
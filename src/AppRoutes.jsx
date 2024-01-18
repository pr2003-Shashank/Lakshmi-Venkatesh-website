import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Product from "./pages/product";
import Gallery from "./pages/gallery";
import ContactUs from "./pages/contactus";
import Login from "./pages/login";
const AppRoutes = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path="" element={<Home />} />
                    <Route path='' element={<Navigate to='/home' />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="product" element={<Product />} />
                    <Route path="gallery" element={<Gallery />} />
                    
                    <Route path="contactus" element={<ContactUs />} />
                    
                    <Route path="login" element={<Login />} />
                    
                </Route>
            </Routes>
        </>
    )
};
export default AppRoutes;
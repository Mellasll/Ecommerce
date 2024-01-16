import { Route, Routes } from "react-router-dom";
import Login from "./user/components/Login";
import Register from "./user/components/Register";
import AutoLogout from "./Authlogout";
import Forgot from "./user/components/Forgot";
import Home from "./pages";
import Product from "./pages/components/Product";
import Contact from "./pages/components/Contact";

const UserRoutes = () => {
  return (
    <div>
      <AutoLogout /> 
      <Routes> 
      <Route index={true} path="/" element={<Home/>} />
        <Route key="home" path="/home" element={<Home/>} />
        <Route key="loginPath" path="/login" element={<Login />} />
        <Route key="register" path="/register" element={<Register />} />
        <Route key="forgot" path="/forgot" element={<Forgot />} />
        <Route key="product" path="/product" element={<Product />} />
        <Route key="contact" path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
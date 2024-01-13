import { Route, Routes } from "react-router-dom";
import Login from "./user/components/Login";
import Register from "./user/components/Register";
import AutoLogout from "./Authlogout";
import Forgot from "./user/components/Forgot";

const UserRoutes = () => {
  return (
    <div>
      <AutoLogout /> 
      <Routes> 
        <Route index={true} path="" element={<Login/>} />
        <Route key="loginPath" path="/login" element={<Login />} />
        <Route key="register" path="/register" element={<Register />} />
        <Route key="forgot" path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
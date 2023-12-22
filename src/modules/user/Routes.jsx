import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";

const UserRoutes = () => {
  return [
    <Routes>
      <Route index={true} path="" element={<Login/>} />
        <Route key="loginPath" path="/login" element={<Login />} />
        <Route key="register" path="/register" element={<Register />} />
        <Route key="forgot" path="/forgot" element={<Forgot />} />
    </Routes>
  ];
};

export default UserRoutes;

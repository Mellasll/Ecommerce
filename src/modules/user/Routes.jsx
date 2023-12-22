import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const UserRoutes = () => {
  return [
    <Routes>
      <Route index={true} path="" element={<Login/>} />
        <Route key="loginPath" path="/login" element={<Login />} />
        <Route key="register" path="/register" element={<Register />} />
    </Routes>
  ];
};

export default UserRoutes;

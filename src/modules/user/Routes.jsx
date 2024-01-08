import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import AutoLogout from '../Authlogout'; // Import et

const UserRoutes = () => {
  return (
    <div>
      <AutoLogout /> {/* AutoLogout'u burada çağır */}
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
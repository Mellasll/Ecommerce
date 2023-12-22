import './App.css';
import './modules/user/index.sass'
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './modules/user/Routes';


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoutes />} /> {/*login-register routerları alındı*/} 
      </Routes>
    </>
  );
}

export default App;

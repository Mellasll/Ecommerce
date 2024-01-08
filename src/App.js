import './App.css';
import './modules/user/index.sass'
import { Route, Routes} from 'react-router-dom';
import UserRoutes from './modules/user/Routes';
import AutoLogout from './modules/Authlogout';

function App() {
  return (
    <>
      <AutoLogout />
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
  
    </>
  );
}

export default App;

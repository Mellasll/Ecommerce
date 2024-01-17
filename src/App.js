import './App.css';
import { Route, Routes} from 'react-router-dom';
import UserRoutes from './modules/Routes';

function App() {
  return (
    <>

      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
  
    </>
  );
}

export default App;

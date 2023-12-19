import './App.css';

import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { Registration } from './components/Registration/Registration';
import { AuthLayout } from './layouts/AuthLayout/AuthLayout';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

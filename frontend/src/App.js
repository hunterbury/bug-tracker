import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import DeveloperPage from './pages/DeveloperPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;

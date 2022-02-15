import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;

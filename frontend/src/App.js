import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProjectPage from './pages/ProjectPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';

// path=":project?/:tickets?/:id?"
// path=":project/:tickets?/:priority?"
// path=":project/:tickets?/:status?"
// path=":user?/:tickets?/:id?"
// path=":user?/:tickets?/:priority?"
// path=":user?/:tickets?/:status?"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;

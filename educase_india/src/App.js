import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import { ThemeContext } from './Context/ThemeContext';
import { useContext } from 'react';
import ThemeToggle from './components/Toggle/ThemeToggle';
import "./components/Toggle/themeToggle.css"
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle />
      <div className="hero__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

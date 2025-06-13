import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './themeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}

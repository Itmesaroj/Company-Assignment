import React, { useContext, useState, useEffect } from 'react';
import { authContext } from '../../Context/AuthContext';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './login.css';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [toast, setToast] = useState(null);
  const [disable, setDisable] = useState(true);
  const { user, loginUser } = useContext(authContext);
const navigate=useNavigate()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const isFormValid = emailRegex.test(email) && password.length >= 6;
    setDisable(!isFormValid);
  }, [email,password]);

  function showToast(message, type = "error", duration = 4000) {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, duration);
  }

  function validation() {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError(null);
    }

    return isValid;
  }

 function handleSubmit(e) {
  e.preventDefault();

  if (validation()) {
    if (!user) {
      showToast("No account found. Please create an account.", "error");
      
    } else if (user.email !== email) {
      showToast("Email doesn't match any user", "error");
    } else if (user.password !== password) {
      showToast("Incorrect password", "error");
    } else {
      loginUser();
      showToast("Login successful!", "success");
      navigate("/profile");
    }
  }
}


  return (
    <div className='login-form'>
      <h2 className='login-title'>Sign in to your </h2>
      <h2 className='login-title'>PopX account</h2>
      <p className='login-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email Address</label>
          
        </div>
{emailError && <small style={{ color: 'red' }}>{emailError}</small>}
        <div className="row">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
          {passwordError && <small style={{ color: 'red' }}>{passwordError}</small>}
        </div>

        <button type="submit" className='login-btn' disabled={disable}>
          Login
        </button>
        <p className='link-create'>
  <Link to="/register">Create New Account</Link>
</p>

      </form>

      {/* Toast */}
      {toast && (
        <div className="toast-container">
          <div className={`custom-toast ${toast.type}`}>
            {toast.message}
            <span onClick={() => setToast(null)} className="close-toast-btn">
              <IoMdCloseCircleOutline />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

import React, { useContext, useState, useEffect } from 'react';
import "../login/login.css";
import { authContext } from '../../Context/AuthContext';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function Register() {
  const { registerUser } = useContext(authContext);
const navigate=useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const isValid =
      form.fullName &&
      form.phone &&
      emailRegex.test(form.email) &&
      form.password.length >= 6 &&
      form.company &&
      form.isAgency;
    setDisabled(!isValid);
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({ ...form, [name]: type === "radio" ? value : value });
  };

  const showToast = (message, type = "error", duration = 4000) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, duration);
  };

  const validateFields = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!emailRegex.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.password || form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!form.company.trim()) newErrors.company = "Company Name is required";
    if (!form.isAgency) newErrors.isAgency = "Please select an option";

    setErrors(newErrors);
    console.log(newErrors)
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      registerUser(form);
      showToast("Registration successful!", "success");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "",
      });
      navigate("/profile")
    } else {
      showToast("Please fix the errors above", "error");
    }
  };

  return (
    <div className="login-form">
      <div className="register-title">
      <h2>Create your</h2>
      <h2>PopX account</h2>
      </div>


      <form onSubmit={handleSubmit}>
        <div className="row">
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
          <label className={form.fullName ? "filled" : ""}>Full Name <span>*</span></label>
          {errors.fullName && <small style={{ color: 'red' }}>{errors.fullName || "some"}</small>}
        </div>

        <div className="row">
          <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
          <label className={form.phone ? "filled" : ""}>Phone Number <span>*</span></label>
          {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
        </div>

        <div className="row">
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
          <label className={form.email ? "filled" : ""}>Email Address <span>*</span></label>
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>

        <div className="row">
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
          <label className={form.password ? "filled" : ""}>Password <span>*</span></label>
          {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
        </div>

        <div className="row">
          <input type="text" name="company" value={form.company} onChange={handleChange} required />
          <label className={form.company ? "filled" : ""}>Company Name <span>*</span></label>
          {errors.company && <small style={{ color: 'red' }}>{errors.company}</small>}
        </div>

        <div className="row-reg" style={{ gap: "0.5rem", flexDirection: "column" }}>
          <label>Are you an Agency? <span>*</span></label>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="radio" id="agencyYes" name="isAgency" value="Yes" checked={form.isAgency === "Yes"} onChange={handleChange} />
            <label htmlFor="agencyYes">Yes</label>
            <input type="radio" id="agencyNo" name="isAgency" value="No" checked={form.isAgency === "No"} onChange={handleChange} />
            <label htmlFor="agencyNo">No</label>
          </div>
          {errors.isAgency && <small style={{ color: 'red' }} >{errors.isAgency}</small>}
        </div>

        <button type="submit" className="login-btn" disabled={disabled}>
          Create Account
        </button>
      </form>

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

export default Register;

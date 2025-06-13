import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import ThemeToggle from '../Toggle/ThemeToggle.jsx';

export default function Profile() {
  const { user, logoutUser } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="profile-page">
     

      <div className="profile-card">
         
        <div className="card-header">
          <h4>Account Settings</h4>
        </div>

        <div className="top-header-profile">
          <div className="avatar-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
              alt="avatar"
              className="avatar"
            />
          </div>

          <div className="user-info">
            <h5>{user?.fullName || user?.name || 'Unnamed User'}</h5>
            <p className="sub-info">{user?.email}</p>
          </div>
        </div>

        <div className="user-info">
          <p className="sub-info">{user?.phone && `Phone: ${user.phone}`}</p>
          <p className="sub-info">{user?.company && `Company: ${user.company}`}</p>
          <p className="sub-info">
            Agency: {user?.isAgency ? user.isAgency : 'N/A'}
          </p>
        </div>

        <div className="logout-btn-warapper">
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

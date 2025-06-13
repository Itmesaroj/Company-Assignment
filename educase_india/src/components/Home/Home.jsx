import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to PopX</h1>
      <p className="home-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>

      <div className="home-buttons">
        <Link to="/register">
          <button className="btn primary-btn">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="btn secondary-btn">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

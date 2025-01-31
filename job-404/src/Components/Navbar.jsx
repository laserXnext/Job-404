import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MiniProfile from "./miniprofile";
import "../CSS/navbar.css"; 

const Navbar = () => {
    const user = useAuth();
    const username = localStorage.getItem("username");
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile((prev) => !prev);
    };

    const closeProfile = (e) => {
        if (!e.target.closest(".mini-profile") && !e.target.closest(".user-profile")) {
            setShowProfile(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeProfile);
        return () => {
            document.removeEventListener("click", closeProfile);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./src/assets/crisis.png" alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#about">About Us</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="#services">Services</Link></li>
            </ul>
            <div className="navbar-buttons">
                {user ? (
                    <div className="user-profile" onClick={toggleProfile}>
                        <p>{username}</p>
                        <i className="fi fi-rr-circle-user" id="profile" />
                    </div>
                ) : (
                    <>
                        <button className="login-button">
                            <Link to="/Login"><span>Login</span></Link>
                        </button>
                        <button className="signup-button">
                            <Link to="/Signup"><span>Sign Up</span></Link>
                        </button>
                    </>
                )}
            </div>
            {showProfile && <MiniProfile onClose={() => setShowProfile(false)} />}
        </nav>
    );
};

export default Navbar;

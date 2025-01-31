import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  
      const handleRedirect = () => {
          navigate('/');
      };

      const handleRedirectForm = () => {
          navigate('/resume');
      };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signupdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 409) {
        toast.error("Username or email already exists. Please try a different one.");
      } else if (response.ok) {
        toast.success("User registered successfully!");
        localStorage.setItem('username', formData.username);
        navigate('/resume');
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("An error occurred. Please check your connection.");
    }
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="card">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={handleRedirect} enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="arrow-circle-left"><path fill="var(--background-col)" d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15,13h-3.6l1.3,1.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-3-3c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0l3-3c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0L11.4,11H15c0.6,0,1,0.4,1,1S15.6,13,15,13z"></path></svg>
          <h1 className="logo">Job-404</h1>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="btn signup" type="submit">Sign Up</button>
            <p className="text">Already have an account? <Link to="/Login">Login</Link></p>
            <button className="google-btn">Sign up with Google</button>
          </form>
        </div>
        <div className="textcontainer">
          <h1 className="title">Join Us Today!</h1>
          <h2 className="sub-title">Start your journey with us</h2>
          <p className="description">
            Create an account to unlock opportunities, explore tailored resources, 
            and take the first step toward achieving your career goals. 
            Your future begins here!
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;

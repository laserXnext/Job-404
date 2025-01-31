import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/signupbanner.css';

const SignupBanner = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/Signup');
        window.location.reload();
    };
    return (
        <div className="signupbanner">
            <div classname="signupbanner-content">
                <div className="signupbanner-text">
                    <h1>Your Path to Success Starts Here!</h1>
                    <p>Discover tailored career paths, real-time market insights, and skill-building opportunities. Your future is just a click away!</p>
                </div>
                <div className="signupbanner-list">
                    <ul>
                        <li>🔍 Job Search</li>
                        <li>📈 Market Insights</li>
                        <li>🏆 Personalized Guidance</li>
                        <li>🛠️ Skill Recommendations</li>
                    </ul>
                </div>
            </div>
            <div className="signupbanner-image-section">
                <img src='./src/assets/back_4.jpeg' alt="Logo" className="signupbanner-img" />
                <button className="signupbanner-button" onClick={handleRedirect}>Get Started</button>
            </div>
        </div>
    );
};

export default SignupBanner;
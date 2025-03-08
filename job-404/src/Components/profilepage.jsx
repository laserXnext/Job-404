import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../CSS/profilepage.css";
import Editprofile from "../Components/editprofile.jsx"

const Profile = () => {
  const [user, setProfileDetails] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfileDetails();
  }, [username]);

  const fetchProfileDetails = async () => {
    if (!username) {
      console.error("Username is missing from local storage");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/profiledata/${username}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProfileDetails(data);
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  };

  if (!user) {
    return <div className="mini-profile">Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token"); 
    setProfileDetails(null);
    navigate('/login');
    window.location.reload();
  };

  const handleClose = () => {
    navigate('/');
    window.location.reload();
  }

  return (
    <div className="resume-container">
      <div className="resume-card">
        <div className="resume-left">
          <div className="profile-picture">
            <i className="fi fi-rr-circle-user" id="profile-page-icon"  />
          </div>
          <h2 className="name">
            {user.firstname} {user.lastname}
          </h2>
          <hr />
          <div className="contact-info">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.houseno}, {user.street},{" "}
              {user.city}
            </p>
          </div>
          <div className="resume-buttons">
            <button className="edit-resume-btn" onClick={() => setSelectedUserId(user.id)}>Edit <i className="fi fi-rr-edit"/></button>
            <button className="logout-resume-btn" onClick={handleLogout}>Logout <i className="fi fi-rr-exit-alt"/></button>
          </div>
        </div>
        <div className="resume-right">
        <div className="close">
            <i className="fi fi-rr-cross" style={{ cursor: "pointer" }} onClick={handleClose} />
        </div>
          <section className="resume-section">
            <h3>Education</h3>
            <p>{user.education}</p>
          </section>
          <section className="resume-section">
            <h3>Experience</h3>
            <p>{user.experience}</p>
          </section>
          <section className="resume-section">
            <h3>Skills</h3>
            <p>{user.skills}</p>
          </section>
        </div>
      </div>
      {selectedUserId && (
        <div className="edit-resume-modal">
          <div className="edit-resume-content">
            <button
              className="close-button"
              onClick={() => setSelectedUserId(null)}
            >
              ×
            </button>
            <Editprofile
              userId={selectedUserId}
              onClose={() => setSelectedUserId(null)}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;

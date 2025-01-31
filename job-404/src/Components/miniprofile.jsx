import React, { useState, useEffect } from "react";
import "../CSS/miniprofile.css";

const MiniProfile = ({ onClose }) => {
  const [profileDetails, setProfileDetails] = useState(null);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetchProfileDetails();
  }, [username]);

  const fetchProfileDetails = async () => {
    if (!username) {
      console.error("Username is missing from local storage");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/profiledata/${username}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setProfileDetails(data);
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  };

  if (!profileDetails) {
    return <div className="mini-profile">Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token"); 
    setProfileDetails(null);
    window.location.reload();
  };

  return (
    <div className="mini-profile">
      <div className="profile-header">
        <h1>Profile</h1>
        <i className="fi fi-rr-cross" onClick={onClose} style={{ cursor: "pointer" }} />
      </div>
      <div className="profile-details">
        <i className="fi fi-rr-circle-user" id="profile" />
        <div className="profile-names">
          <h2>{profileDetails.firstname} {profileDetails.lastname}</h2>
          <p>{profileDetails.username}</p>
        </div>
      </div>
      <div className="profile-buttons">
        <button className="extend">Extend <i className="fi fi-rr-arrow-up-right-from-square" /></button>
        <button className="logout" onClick={handleLogout}>Logout <i className="fi fi-rr-exit-alt"></i></button>
      </div>
    </div>
  );
};

export default MiniProfile;

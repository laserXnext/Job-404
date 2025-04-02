import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../CSS/form.css";

const Editprofile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");

  const username = localStorage.getItem("username");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    houseno: "",
    street: "",
    city: "",
    education: "",
    experience: "",
    skills: "",
  });

  useEffect(() => {
    if (!username) {
      navigate("/Signup");
      return;
    }

    axios
      .get(`http://localhost:3000/api/profiledata/${username}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        toast.error("Failed to load profile data.");
      });
  }, [navigate]);

  const handleFieldClick = (field) => {
    setCurrentField(field);
    setIsModalOpen(true);
  };

  const handleSave = (value) => {
    setFormData((prev) => ({ ...prev, [currentField]: value }));
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/api/edituser/${username}`, formData);
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div>
      <form className="resumeform" onSubmit={handleSubmit}>
        <h1 className="form-logo">Job-404</h1>

        <div className="form-full-name">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-phone">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-address">
          <input
            type="text"
            name="houseno"
            placeholder="House No"
            value={formData.houseno}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-education">
          <div className="expandable-field" onClick={() => handleFieldClick("education")}>
            {formData.education || "Education"}
          </div>
        </div>

        <div className="form-experience">
          <div className="expandable-field" onClick={() => handleFieldClick("experience")}>
            {formData.experience || "Experience"}
          </div>
        </div>

        <div className="form-skills">
          <div className="expandable-field" onClick={() => handleFieldClick("skills")}>
            {formData.skills || "Skills"}
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                ×
              </button>
              <h3>{currentField.toUpperCase()}</h3>
              <textarea
                autoFocus
                defaultValue={formData[currentField]}
                placeholder={`Enter ${currentField}...`}
              />
              <div className="modal-buttons">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleSave(document.querySelector(".modal-content textarea").value)
                  }
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        <button className="btn submit" type="submit">
          Update Profile
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Editprofile;

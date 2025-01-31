import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/form.css';

const ResumeForm = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const [formData, setFormData] = useState({
    education: "",
    experience: "",
    skills: "",
  });

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      navigate('/Signup');
    }
  }, [navigate]);

  const handleFieldClick = (field) => {
    setCurrentField(field);
    setIsModalOpen(true);
  };

  const handleSave = (value) => {
    setFormData(prev => ({ ...prev, [currentField]: value }));
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData(e.target);
    
    const resumeData = {
      username: localStorage.getItem('username'),
      firstname: formValues.get('firstname'),
      lastname: formValues.get('lastname'),
      email: formValues.get('email'),
      phone: formValues.get('phone'),
      houseno: formValues.get('houseno'),
      street: formValues.get('street'),
      city: formValues.get('city'),
      education: formData.education,
      experience: formData.experience,
      skills: formData.skills,
    };

    try {
      const response = await fetch("http://localhost:3000/resumedata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resumeData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to save resume");
      }

      toast.success("Resume saved successfully!");
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="resumeform-page">
      <div className="resumeform-container">
        <form className="resumeform" onSubmit={handleSubmit}>
          <h1 className="form-logo">Job-404</h1>
          
          <div className="form-full-name">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="form-email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-phone">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              limit="10"
              required
            />
          </div>

          <div className="form-address">
            <input type="text" name="houseno" placeholder="House No" required />
            <input type="text" name="street" placeholder="Street" required />
            <input type="text" name="city" placeholder="City" required />
          </div>

          <div className="form-education">
            <div
              className="expandable-field"
              onClick={() => handleFieldClick("education")}
            >
              {formData.education || "Education"}
            </div>
          </div>

          <div className="form-experience">
            <div
              className="expandable-field"
              onClick={() => handleFieldClick("experience")}
            >
              {formData.experience || "Experience"}
            </div>
          </div>

          <div className="form-skills">
            <div
              className="expandable-field"
              onClick={() => handleFieldClick("skills")}
            >
              {formData.skills || "Skills"}
            </div>
          </div>

          <input type="hidden" name="education" value={formData.education} />
          <input type="hidden" name="experience" value={formData.experience} />
          <input type="hidden" name="skills" value={formData.skills} />

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
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
                      handleSave(document.querySelector('.modal-content textarea').value)
                    }
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          <button className="btn submit" type="submit">
            Submit Resume
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResumeForm;
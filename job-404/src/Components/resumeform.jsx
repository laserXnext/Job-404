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

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const uploadData = new FormData();
    uploadData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/analyze_cv", {
        method: "POST",
        body: uploadData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze CV");
      }

      // Populate form fields with analyzed data
      setFormData({
        firstname: data.name?.split(" ")[0] || "",
        lastname: data.name?.split(" ")[1] || "",
        email: data.email || "",
        phone: data.phone || "",
        houseno: data.address?.[0] || "",
        street: data.address?.[1] || "",
        city: data.address?.[2] || "",
        education: Array.isArray(data.education) ? data.education.join(", ") : data.education || "",
        experience: Array.isArray(data.experience) ? data.experience.join(", ") : data.experience || "",
        skills: Array.isArray(data.skills) ? data.skills.join(", ") : data.skills || "",
      });

      toast.success("CV analyzed successfully!");
    } catch (error) {
      toast.error(error.message);
    }
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
              value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
              required
            />
          </div>

          <div className="form-email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-phone">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              limit="10"
              required
            />
          </div>

          <div className="form-address">
            <input 
              type="text" 
              name="houseno" 
              placeholder="House No" 
              value={formData.houseno}
              onChange={(e) => setFormData({ ...formData, houseno: e.target.value })}
              required 
            />
            <input 
              type="text" 
              name="street" 
              placeholder="Street" 
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              required 
            />
            <input 
              type="text" 
              name="city" 
              placeholder="City" 
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required 
            />
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
                <i className="fi fi-rr-cross" onClick={() => setIsModalOpen(false)}></i>
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
          <div className="form-file-upload">
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              accept=".pdf"
              onChange={handleFileUpload}
            />
            <button type="button" className="btn upload-btn" onClick={handleFileUpload}>
              Analyze CV
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResumeForm;
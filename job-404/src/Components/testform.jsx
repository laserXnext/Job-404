import React, { useState } from "react";
import MiniProfile from "./miniprofile";
import "../CSS/form.css";

const TestForm = () => {
    const [expandedField, setExpandedField] = useState(null);
    const [fieldValues, setFieldValues] = useState({
      education: "",
      experience: "",
      skills: "",
    });
  
    const handleFocus = (field) => {
      setExpandedField(field);
    };
  
    const handleBlur = () => {
      setExpandedField(null);
    };
  
    const handleChange = (e) => {
      setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
    };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const [formData, setFormData] = useState({
    education: "",
    experience: "",
    skills: ""
  });

  const handleFieldClick = (field) => {
    setCurrentField(field);
    setIsModalOpen(true);
  };

  const handleSave = (value) => {
    setFormData(prev => ({ ...prev, [currentField]: value }));
    setIsModalOpen(false);
  };

  return (
    <div className="resumeform-container">
      <MiniProfile />
      <form className="resumeform">
        
        
        <div className="form-education">
          <div 
            className="expandable-field" 
            onClick={() => handleFieldClick('education')}
          >
            {formData.education || "Education (Click to add)"}
          </div>
        </div>
        <div className="form-experience">
          <div 
            className="expandable-field" 
            onClick={() => handleFieldClick('experience')}
          >
            {formData.experience || "Experience (Click to add)"}
          </div>
        </div>
        <div className="form-skills">
          <div 
            className="expandable-field" 
            onClick={() => handleFieldClick('skills')}
          >
            {formData.skills || "Skills (Click to add)"}
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{currentField.toUpperCase()}</h3>
              <textarea
                autoFocus
                defaultValue={formData[currentField]}
                placeholder={`Enter your ${currentField} details...`}
              />
              <div className="modal-buttons">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button 
                  type="button" 
                  onClick={() => handleSave(document.querySelector('.modal-content textarea').value)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="form-section">
          <textarea
            name="education"
            placeholder="Education"
            className={expandedField === "education" ? "expanded" : ""}
            onFocus={() => handleFocus("education")}
            onBlur={handleBlur}
            onChange={handleChange}
            value={fieldValues.education}
          ></textarea>
        </div>
        <div className="form-section">
          <textarea
            name="experience"
            placeholder="Experience"
            className={expandedField === "experience" ? "expanded" : ""}
            onFocus={() => handleFocus("experience")}
            onBlur={handleBlur}
            onChange={handleChange}
            value={fieldValues.experience}
          ></textarea>
        </div>
        <div className="form-section">
          <textarea
            name="skills"
            placeholder="Skills"
            className={expandedField === "skills" ? "expanded" : ""}
            onFocus={() => handleFocus("skills")}
            onBlur={handleBlur}
            onChange={handleChange}
            value={fieldValues.skills}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default TestForm;
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddJob = ({ onClose }) => {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    job_type: "",
    description: "",
    requirements: "",
    salary_range: "",
    application_link: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");

  const jobTypeOptions = ["Full-time", "Part-time", "Contract", "Internship","Temporary"];

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleFieldClick = (field) => {
    setCurrentField(field);
    setIsModalOpen(true);
  };

  const handleSave = (value) => {
    setJob((prev) => ({ ...prev, [currentField]: value }));
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/insertjobdata", job);
      toast.success("Job added successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error adding job:", error);
      toast.error("Failed to add job.");
    }
  };

  return (
    <div className="edit-course-overlay">
      <ToastContainer />
      <div className="edit-course-container">
        <h2>Add Job</h2>
        <form onSubmit={handleSubmit} className="edit-course-form">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={job.company}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            required
          />
          <select
            name="job_type"
            value={job.job_type}
            onChange={handleChange}
            required
          >
            {jobTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="expandable-field" onClick={() => handleFieldClick("description")}>
            {job.description || "Job Description"}
          </div>

          <div className="expandable-field" onClick={() => handleFieldClick("requirements")}>
            {job.requirements || "Job Requirements"}
          </div>

          <input
            type="text"
            name="salary_range"
            placeholder="Salary Range"
            value={job.salary_range}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="application_link"
            placeholder="Application Link"
            value={job.application_link}
            onChange={handleChange}
            required
          />

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>{currentField.toUpperCase()}</h3>
                <textarea
                  autoFocus
                  defaultValue={job[currentField]}
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

          <div className="button-group">
            <button type="submit">Add Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
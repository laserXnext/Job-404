import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/editform.css";

const EditJob = ({ jobId, onClose }) => {
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
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");

  const jobTypeOptions = ["Full-time", "Part-time", "Contract", "Internship","Temporary"];

  useEffect(() => {
    axios
      .get(`/api/jobsdata/${jobId}`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error("Error fetching job:", error));
  }, [jobId]);

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
    setLoading(true);
    try {
      await axios.put(`/api/editjob/${jobId}`, job);
      toast.success("Job updated successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("Failed to update job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-course-overlay">
      <ToastContainer />
      <div className="edit-course-container">
        <h2>Edit Job</h2>
        <form onSubmit={handleSubmit} className="edit-course-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
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
            {job.description || "Description"}
          </div>
          <div className="expandable-field" onClick={() => handleFieldClick("requirements")}>
            {job.requirements || "Requirements"}
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
                <i class="fi fi-rr-cross" onClick={() => setIsModalOpen(false)}></i>
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
            <button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
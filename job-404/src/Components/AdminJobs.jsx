import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditJob from "./editjobform";
import AddJobForm from "./addjobform";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showAddJobForm, setShowAddJobForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/jobsdata")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const deleteJob = (id) => {
    fetch(`http://localhost:3000/api/deletejob/${id}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }
        return response.json();
      })
      .then((data) => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
        toast.success("Job deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
        toast.error(`Error deleting job: ${error.message}`);
      });
  };

  const showConfirmationToast = (id) => {
    toast(
      ({ closeToast }) => (
        <div className="toast-notify-delete">
          <p>Are you sure you want to delete this job?</p>
          <button
            onClick={() => {
              deleteJob(id);
              closeToast();
            }}
          >
            Yes
          </button>
          <button onClick={closeToast}>No</button>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  };

  return (
    <div>
      <div className="add-job-button">
        <h2>All Jobs</h2>
        <button onClick={() => setShowAddJobForm(true)}>
          <i className="fi fi-rr-plus-small" />
        </button>
      </div>
      <ToastContainer />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Company</th>
            <th>Job Type</th>
            <th>Location</th>
            <th className="table-action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.job_type}</td>
              <td>{job.location}</td>
              <td>
                <div className="action-buttons">
                  <i
                    className="fi fi-rr-edit"
                    onClick={() => setSelectedJobId(job.id)}
                  />
                  <i
                    className="fi fi-rr-trash"
                    onClick={() => showConfirmationToast(job.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedJobId && (
        <div className="edit-course-modal">
          <div className="edit-course-content">
            <button
              className="close-button"
              onClick={() => setSelectedJobId(null)}
            >
              ×
            </button>
            <EditJob
              jobId={selectedJobId}
              onClose={() => setSelectedJobId(null)}
            />
          </div>
        </div>
      )}

      {showAddJobForm && (
        <div className="edit-course-modal">
          <div className="edit-course-content">
            <button
              className="close-button"
              onClick={() => setShowAddJobForm(false)}
            >
              ×
            </button>
            <AddJobForm onClose={() => setShowAddJobForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJobs;

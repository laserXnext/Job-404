import React, { useEffect, useState } from "react";
import BigAd from "./BigAd";
import "../CSS/jobAd.css";

const JobAd = ({ filters }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      const queryParams = new URLSearchParams(filters).toString(); 
      const response = await fetch(`http://localhost:3000/api/jobsdata?${queryParams}`);
      const data = await response.json();

      if (data.length === 0) {
        setErrorMessage("No jobs found matching (Error JOB-404)");
      } else {
        setErrorMessage(""); 
      }

      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setErrorMessage("An error occurred while fetching jobs. Please try again later.");
    }
  };

  const handleJobClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  const closeBigAd = () => {
    setSelectedJobId(null);
  };

  const refreshJobs = () => {
    window.location.reload();
  };

  return (
    <div>
    <div className="job-ad-container">
      {errorMessage ? (
      <div className="error-message">
        <p>{errorMessage}</p>
        <i className="fi fi-rr-refresh"
        onClick={refreshJobs}
        />
      </div>
      ) : (
      jobs.length === 0 ? (
        <div className="no-jobs-message">
        <p>No jobs available to display.</p>
        </div>
      ) : (
        jobs.map((job) => (
        <div className="job-ad" key={job.id}>
          <i
          id="extend-icon"
          className="fi fi-rr-arrow-up-right-from-square"
          onClick={() => handleJobClick(job.id)}
          />
          <h3>{job.title}</h3>
          <p className="company">{job.company}</p>
          <p className="job-type">{job.job_type}</p>
          <p className="location">{job.location}</p>
          <button
          className="apply-btn"
          onClick={() => handleJobClick(job.id)}
          >
          View Details
          </button>
        </div>
        ))
      )
      )}
    </div>
    {selectedJobId && <BigAd jobId={selectedJobId} onClose={closeBigAd} />}
    </div>
  );
};

export default JobAd;

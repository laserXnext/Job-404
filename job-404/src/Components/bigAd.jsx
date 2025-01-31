import React, { useEffect, useState } from "react";
import "../CSS/bigAd.css";

const BigAd = ({ jobId, onClose }) => {
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        fetchJobDetails();
    }, [jobId]);

    const fetchJobDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/jobsdata/${jobId}`);
            const data = await response.json();
            setJobDetails(data);
        } catch (error) {
            console.error("Error fetching job details:", error);
        }
    };

    if (!jobDetails) {
        return <div>Loading...</div>;
    }

    return (
      <div className="big-ad-overlay">
        <div className="big-ad-container">
          <div className="big-ad-header">
            <h2>{jobDetails.title}</h2>
            <i class="fi fi-rr-circle-xmark" onClick={onClose} />
          </div>
          <div className="company-data">
            <p>
              <strong>Company :</strong> {jobDetails.company}
            </p>
            <p>
              <strong>Location :</strong> {jobDetails.location}
            </p>
            <p>
              <strong>Type :</strong> {jobDetails.job_type}
            </p>
            <p>
              <strong>Salary:</strong> {jobDetails.salary_range}
            </p>
          </div>
          <div className="description-data">
            <p>
              <strong>Description :</strong>{" "}
              <span>{jobDetails.description}</span>
            </p>
            <p>
              <strong>Requirements :</strong>{" "}
              <span>{jobDetails.requirements}</span>
            </p>
          </div>
          <div className="big-ad-button">
            <button
              onClick={() =>
                window.open(
                  jobDetails.application_link,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="apply-link"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default BigAd;

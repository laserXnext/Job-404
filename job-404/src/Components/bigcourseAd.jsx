import React, { useEffect, useState } from "react";
import "../CSS/bigAd.css";

const BigCourseAd = ({ courseId, onClose }) => {
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    fetchCourseDetails();
  }, [courseId]);

  const fetchCourseDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/coursesdata/${courseId}`);
      const data = await response.json();
      setCourseDetails(data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="big-ad-overlay">
      <div className="big-ad-container">
        <div className="big-ad-header">
          <h2>{courseDetails.title}</h2>
          <i className="fi fi-rr-circle-xmark" onClick={onClose} />
        </div>
        <div className="course-data">
          <p>
            <strong>Provider:</strong> {courseDetails.provider}
          </p>
          <p>
            <strong>Platform:</strong> {courseDetails.platform}
          </p>
          <p>
            <strong>Level:</strong> {courseDetails.level}
          </p>
          <p>
            <strong>Duration:</strong> {courseDetails.duration}
          </p>
        </div>
        <div className="description-data">
          <p>
            <strong>Description:</strong> <span>{courseDetails.description}</span>
          </p>
        </div>
        <div className="big-ad-button">
          <button
            onClick={() =>
              window.open(
                courseDetails.enrollment_link,
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="apply-link"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigCourseAd;

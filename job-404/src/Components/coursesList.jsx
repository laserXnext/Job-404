import React, { useState, useEffect } from "react";
import CoursesFilter from "./CoursesFilter";
import BigCourseAd from "./bigcourseAd";
import Searchbar from "./Searchbar";
import "../CSS/jobAd.css";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/coursesdata");
      const data = await response.json();
      
      if (data.length === 0) {
        setErrorMessage("No courses found matching (Error JOB-404)");
      } else {
        setErrorMessage("");
      }
      setCourses(data);
      setFilteredCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setErrorMessage("An error occurred while fetching courses. Please try again later.");
    }
  };

  const handleFilterChange = (filterCriteria) => {
    const { provider, platform, level } = filterCriteria;
    const filtered = courses.filter((course) => {
      return (
        (provider ? course.provider === provider : true) &&
        (platform ? course.platform === platform : true) &&
        (level ? course.level === level : true)
      );
    });
    setFilteredCourses(filtered);
    if (filtered.length === 0) {
      setErrorMessage("No courses found matching (Error JOB-404)");
    } else {
      setErrorMessage("");
    }
  };

  const handleSearch = (search) => {
    const lowerSearch = search.toLowerCase();
    const searchedCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(lowerSearch) ||
        course.provider.toLowerCase().includes(lowerSearch) ||
        course.platform.toLowerCase().includes(lowerSearch)
    );
    setFilteredCourses(searchedCourses);
    if (searchedCourses.length === 0) {
      setErrorMessage("No courses found matching (Error JOB-404)");
    } else {
      setErrorMessage("");
    }
  };

  const handleViewDetailsClick = (courseId) => {
    setSelectedCourseId(courseId);
  };

  const closeBigAd = () => {
    setSelectedCourseId(null);
  };

  const refreshJobs = () => {
    window.location.reload();
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <CoursesFilter onFilterChange={handleFilterChange} />
      <div className="job-ad-container">
      {errorMessage ? (
        <div className="error-message">
          <p>{errorMessage}</p>
          <i className="fi fi-rr-refresh"
            onClick={refreshJobs}
          />
        </div>
        ) : (
        filteredCourses.map((course, index) => (
          <div className="job-ad" key={index}>
            <i
              id="extend-icon"
              className="fi fi-rr-arrow-up-right-from-square"
              onClick={() => handleViewDetailsClick(course.id)}
            />
            <h3>{course.title}</h3>
            <p className="company">{course.provider}</p>
            <p className="job-type">{course.level}</p>
            <p className="location">{course.platform}</p>
            <button
              className="apply-btn"
              onClick={() => handleViewDetailsClick(course.id)}
            >
              View Details
            </button>
          </div>
        )) 
      )}
      </div>
      {selectedCourseId && (
        <BigCourseAd courseId={selectedCourseId} onClose={closeBigAd} />
      )}
    </div>
  );
};

export default CoursesList;

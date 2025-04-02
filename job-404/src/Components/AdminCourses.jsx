import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditCourse from "./editcourseform";
import AddCourseForm from "./addcourseform";


const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/coursesdata")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const deleteCourse = (id) => {
    fetch(`http://localhost:3000/api/deletecourse/${id}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }
        return response.text();
      })
      .then(() => {
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
        toast.success("Course deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
        toast.error(`Error deleting course: ${error.message}`);
      });
  };

  const showConfirmationToast = (id) => {
    toast(
      ({ closeToast }) => (
        <div className="toast-notify-delete">
          <p>Are you sure you want to delete this course?</p>
          <button
            onClick={() => {
              deleteCourse(id);
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
    <div className="admin-courses-container">
      <div className="add-job-button">
        <h2>All Courses</h2>
        <button onClick={() => setShowAddCourseForm(true)}>
          <i class="fi fi-rr-plus-small"/>
        </button>
      </div>
      <ToastContainer />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Provider</th>
            <th>Platform</th>
            <th>Duration</th>
            <th>Level</th>
            <th className="table-action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.provider}</td>
              <td>{course.platform}</td>
              <td>{course.duration}</td>
              <td>{course.level}</td>
              <td>
                <div className="action-buttons">
                  <i className="fi fi-rr-edit" onClick={() => setSelectedCourseId(course.id)} />
                  <i className="fi fi-rr-trash" onClick={() => showConfirmationToast(course.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCourseId && (
        <div className="edit-course-modal">
          <div className="edit-course-content">
            <button
              className="close-button"
              onClick={() => setSelectedCourseId(null)}
            >
              ×
            </button>
            <EditCourse
              courseId={selectedCourseId}
              onClose={() => setSelectedCourseId(null)}
            />
          </div>
        </div>
      )}

      {showAddCourseForm && (
        <div className="edit-course-modal">
          <div className="edit-course-content">
            <button
              className="close-button"
              onClick={() => setShowAddCourseForm(false)}
            >
              ×
            </button>
            <AddCourseForm onClose={() => setShowAddCourseForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;

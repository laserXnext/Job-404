import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/header_course";
import Footer from "./Components/footer";
import CoursesList from "./Components/coursesList";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CoursesList />
      <Footer />
    </div>
  );
};

export default Courses;

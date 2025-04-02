import Home from './Home.jsx'
import Login from './Components/Login.jsx';
import Signup from './Components/SignUp.jsx'
import Jobs from './jobs.jsx'
import Courses from './courses.jsx';
import ResumeForm from './Components/resumeform.jsx';
import TestForm from './Components/testform.jsx';
import Admin from './Admin.jsx';
import AdminUsers from './Components/AdminUsers.jsx';
import AdminJobs from './Components/AdminJobs.jsx';
import AdminCourses from './Components/AdminCourses.jsx';
import ProfilePage from './Components/profilepage.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resume" element={<ResumeForm />} />
          <Route path="/test" element={<TestForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          <Route path="/admin" element={<Admin/>}>
          <Route path="dashboard" element={<Admin />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="courses" element={<AdminCourses />} />
        </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

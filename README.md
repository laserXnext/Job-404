# JOB-404 COMPREHENSIVE MANUAL

<div align="center">
  <img src="https://img.shields.io/badge/Version-1.0-blue" alt="Version 1.0">
  <img src="https://img.shields.io/badge/Updated-2025--04--17-green" alt="Updated: 2025-04-17">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Status: Active">
</div>

<div align="center">
  <h3>🔍 Your Ultimate Job Search Platform 🔍</h3>
  <p><i>Find your dream job and enhance your skills with recommended courses</i></p>
</div>

---

<details open>
<summary><h2>📑 TABLE OF CONTENTS</h2></summary>

### 👤 FOR USERS
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Creating an Account](#creating-an-account)
  - [Logging In](#logging-in)
- [Job Search](#job-search)
  - [Search Bar](#search-bar)
  - [Filters](#filters)
  - [Job Listings](#job-listings)
  - [Job Details](#job-details)
- [Course Search](#course-search)
  - [Finding Courses](#finding-courses)
  - [Course Filters](#course-filters)
  - [Course Details](#course-details)
- [User Profile](#user-profile)
  - [Resume Management](#resume-management)
  - [Profile Information](#profile-information)
- [Mobile Usage](#mobile-usage)
- [Troubleshooting](#troubleshooting)
- [Contact Support](#contact-support)

### 💻 FOR DEVELOPERS
- [Development Setup](#development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [CV Analyzer Setup](#cv-analyzer-setup)
  - [Ollama Installation](#ollama-installation)
  - [Phi-3 Mini Model Setup](#phi-3-mini-model-setup)
  - [Running the CV Analyzer](#running-the-cv-analyzer)
- [Admin Panel](#admin-panel)
  - [Accessing the Admin Panel](#accessing-the-admin-panel)
  - [Managing Job Listings](#managing-job-listings)
  - [Managing Courses](#managing-courses)
  - [User Management](#user-management)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Contributing Guidelines](#contributing-guidelines)

</details>

---

# 👤 FOR USERS

## Introduction

<div align="center">
  <p>
    <strong>JOB-404</strong> is a comprehensive job search platform designed to help users find job opportunities and related courses to enhance their skills. The platform features an intuitive interface that allows you to search for jobs, filter results, and access detailed information about each position.
  </p>
  <p>
    Additionally, JOB-404 offers a course discovery section where you can find relevant courses to improve your qualifications.
  </p>
</div>

## Getting Started

### Creating an Account

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>Follow these steps to create your account:</h4>
  <ol>
    <li>Navigate to the JOB-404 website.</li>
    <li>Click on the "Sign Up" button in the top-right corner.</li>
    <li>Fill in the required fields:
      <ul>
        <li>Username</li>
        <li>Email address</li>
        <li>Password</li>
      </ul>
    </li>
    <li>Click "Sign Up" to create your account.</li>
    <li>You will receive a confirmation that your account has been created successfully.</li>
  </ol>
</div>

### Logging In

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>To access your account:</h4>
  <ol>
    <li>Click on the "Login" button in the top-right corner.</li>
    <li>Enter your username and password.</li>
    <li>Click "Login" to access your account.</li>
    <li>Upon successful login, you will be redirected to the homepage.</li>
  </ol>
</div>

## Job Search

### Search Bar

The search bar is located at the top of the Jobs page and allows you to search for jobs by title, company, or location:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Type your keywords in the search bar (e.g., "Developer," "Marketing," "New York").</li>
    <li>Click the "Search" button or press Enter to initiate the search.</li>
    <li>The results will display all jobs matching your search criteria.</li>
  </ol>

  <div style="background-color: #e8f4fd; padding: 10px; border-left: 3px solid #0366d6; margin-top: 10px;">
    <strong>💡 Pro Tip:</strong> Use specific keywords related to your desired position to get more relevant results.
  </div>
</div>

### Filters

The filter section allows you to refine your job search:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li><strong>Job Type:</strong> Select from available job types (Full-time, Part-time, Contract, etc.).</li>
    <li><strong>Location:</strong> Filter jobs by specific locations.</li>
    <li><strong>Company:</strong> Filter jobs by specific companies.</li>
  </ol>

  <h4>To apply filters:</h4>
  <ol>
    <li>Select your desired filter options from the dropdown menus.</li>
    <li>The job listings will automatically update to show only the jobs that match your filter criteria.</li>
    <li>You can apply multiple filters simultaneously for more specific results.</li>
  </ol>
</div>

### Job Listings

Job listings are displayed in a card format with the following information:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ul>
    <li>Job title</li>
    <li>Company name</li>
    <li>Job type</li>
    <li>Location</li>
    <li>"View Details" button</li>
  </ul>

  <h4>To interact with job listings:</h4>
  <ol>
    <li>Click on a job card to see more details.</li>
    <li>Click the arrow icon in the top right of each job card to expand the job details.</li>
    <li>Click the "View Details" button to open the complete job description.</li>
  </ol>
</div>

### Job Details

When you click on a job card or the "View Details" button, a detailed job description appears with:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ul>
    <li>Full job title</li>
    <li>Company information</li>
    <li>Job requirements</li>
    <li>Responsibilities</li>
    <li>Salary information (if available)</li>
    <li>Application instructions</li>
  </ul>

  <p>To close the detailed view, click the X button in the top-right corner of the expanded view.</p>

  <div style="background-color: #e8f4fd; padding: 10px; border-left: 3px solid #0366d6; margin-top: 10px;">
    <strong>💡 Pro Tip:</strong> Save jobs by clicking the bookmark icon to revisit them later.
  </div>
</div>

## Course Search

### Finding Courses

The Courses section allows you to discover educational opportunities:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Navigate to the Courses page from the main menu.</li>
    <li>Use the search bar to search for courses by title, provider, or platform.</li>
    <li>Browse through the course listings to find relevant educational opportunities.</li>
  </ol>
</div>

### Course Filters

The course filter section helps you narrow down your course search:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li><strong>Provider:</strong> Filter by course provider (e.g., Coursera, Udemy, edX).</li>
    <li><strong>Platform:</strong> Filter by learning platform.</li>
    <li><strong>Level:</strong> Filter by difficulty level (Beginner, Intermediate, Advanced).</li>
  </ol>

  <h4>To apply course filters:</h4>
  <ol>
    <li>Select your desired options from the dropdown menus.</li>
    <li>The course listings will automatically update based on your selected criteria.</li>
  </ol>
</div>

### Course Details

To view detailed information about a course:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Click on a course card or the "View Details" button.</li>
    <li>A detailed view will appear showing:
      <ul>
        <li>Course title</li>
        <li>Provider</li>
        <li>Platform</li>
        <li>Duration</li>
        <li>Level</li>
        <li>Description</li>
        <li>Link to enroll (if available)</li>
      </ul>
    </li>
  </ol>
</div>

## User Profile

### Resume Management

Your profile page allows you to manage your resume information:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Navigate to the Profile page by clicking on your username in the top-right corner.</li>
    <li>You can enter or update the following information:
      <ul>
        <li>First name and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address (house number, street, city)</li>
        <li>Education history</li>
        <li>Work experience</li>
        <li>Skills</li>
      </ul>
    </li>
  </ol>

  <h4>To save your resume information:</h4>
  <ol>
    <li>Fill in the required fields.</li>
    <li>Click the "Save" button at the bottom of the form.</li>
    <li>You will receive a confirmation that your information has been saved.</li>
  </ol>

  <div style="background-color: #e8f4fd; padding: 10px; border-left: 3px solid #0366d6; margin-top: 10px;">
    <strong>💡 Pro Tip:</strong> Keep your resume information updated to improve your chances of finding suitable job matches.
  </div>
</div>

### Profile Information

Your profile page displays all of your saved information:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Personal details</li>
    <li>Contact information</li>
    <li>Address</li>
    <li>Education background</li>
    <li>Work experience</li>
    <li>Skills</li>
  </ol>

  <p>This information is used to help you apply for jobs more efficiently.</p>
</div>

## Mobile Usage

JOB-404 is fully responsive and optimized for mobile devices:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>The search bar and filters adapt to smaller screens.</li>
    <li>Job and course listings are displayed in a single column for easier navigation.</li>
    <li>All features are accessible on mobile devices, including search, filtering, and profile management.</li>
  </ol>

  <h4>Tips for mobile users:</h4>
  <ul>
    <li>Use the hamburger menu in the top-right corner to access the main navigation.</li>
    <li>Scroll horizontally when viewing detailed tables if necessary.</li>
    <li>Use the "back" button to return to previous screens.</li>
  </ul>
</div>

## Troubleshooting

### Common Issues and Solutions

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>1. No jobs found (Error JOB-404)</h4>
  <ul>
    <li>Try removing filters to broaden your search.</li>
    <li>Check your spelling in the search bar.</li>
    <li>Click the refresh icon to reload the job listings.</li>
  </ul>

  <h4>2. Login Issues</h4>
  <ul>
    <li>Ensure your username and password are correct.</li>
    <li>Check your internet connection.</li>
    <li>Clear your browser cache and cookies.</li>
  </ul>

  <h4>3. Search Not Working</h4>
  <ul>
    <li>Ensure you have clicked the "Search" button after entering keywords.</li>
    <li>Try more general search terms.</li>
    <li>Check your internet connection.</li>
  </ul>
</div>

## Contact Support

If you encounter any issues not addressed in this manual, please contact our support team:

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Send an email to <a href="mailto:laserxnext@gmail.com">laserxnext@gmail.com</a></li>
    <li>Include:
      <ul>
        <li>Your username</li>
        <li>A detailed description of the issue</li>
        <li>Screenshots (if applicable)</li>
        <li>Steps to reproduce the problem</li>
      </ul>
    </li>
  </ol>

  <p>Our support team will respond within 24 hours on business days.</p>
</div>

---

# 💻 FOR DEVELOPERS

## Development Setup

### Prerequisites

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <p>Before setting up the JOB-404 application, ensure you have the following installed:</p>
  <ul>
    <li>Node.js (v16.0.0 or higher)</li>
    <li>npm (v8.0.0 or higher)</li>
    <li>MySQL (v8.0 or higher)</li>
    <li>Python (v3.8 or higher) - for CV analyzer</li>
    <li>Git</li>
  </ul>
</div>

### Installation

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/laserXnext/Job-404.git</code></pre>
    </li>
    <li>Navigate to the project directory:
      <pre><code>cd Job-404/job-404</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a .env file in the root directory with the following variables:
      <pre><code>DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASS=your_mysql_password
DB_NAME=job404
JWT_SECRET=your_secret_key</code></pre>
    </li>
    <li>Set up the database:
      <pre><code>mysql -u your_mysql_username -p < ./database/schema.sql</code></pre>
    </li>
    <li>Install Python dependencies for the CV analyzer:
      <pre><code>pip install -r ./cv-analyzer/requirements.txt</code></pre>
    </li>
  </ol>
</div>

### Running the Application

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>Starting the Backend Server</h4>
  <ol>
    <li>Open a terminal in the project root directory and run:
      <pre><code>node server.js</code></pre>
      <p>This will start the backend server on port 3000 by default.</p>
    </li>
  </ol>

  <h4>Starting the Frontend Development Server</h4>
  <ol>
    <li>Open another terminal in the project root directory and run:
      <pre><code>npm run dev</code></pre>
      <p>This will start the Vite development server, typically on port 5173.</p>
    </li>
    <li>Access the application by navigating to <code>http://localhost:5173</code> in your web browser.</li>
  </ol>

  <h4>Building for Production</h4>
  <ol>
    <li>To create a production build, run:
      <pre><code>npm run build</code></pre>
    </li>
    <li>The built files will be in the <code>dist</code> directory, which can be served using any static file server.</li>
  </ol>
</div>

## CV Analyzer Setup

The CV Analyzer is a Python script (cv.py) that uses the Ollama AI model to analyze resumes and provide job matching insights.

### Ollama Installation

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>For macOS:</h4>
  <ol>
    <li>Download the Ollama installer from <a href="https://ollama.com/download" target="_blank">https://ollama.com/download</a></li>
    <li>Open the downloaded file and follow the installation instructions.</li>
    <li>Verify installation by opening Terminal and running:
      <pre><code>ollama --version</code></pre>
    </li>
  </ol>

  <h4>For Linux:</h4>
  <ol>
    <li>Run the following command:
      <pre><code>curl -fsSL https://ollama.com/install.sh | sh</code></pre>
    </li>
    <li>Verify installation:
      <pre><code>ollama --version</code></pre>
    </li>
  </ol>

  <h4>For Windows:</h4>
  <ol>
    <li>Download the Windows installer from <a href="https://ollama.com/download" target="_blank">https://ollama.com/download</a></li>
    <li>Run the installer and follow the installation steps.</li>
    <li>Open Command Prompt or PowerShell and verify installation:
      <pre><code>ollama --version</code></pre>
    </li>
  </ol>
</div>

### Phi-3 Mini Model Setup

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>After installing Ollama, download and install the Phi-3 Mini model by running:
      <pre><code>ollama pull phi:3-mini</code></pre>
      <p>This will download the model (approximately 4.8GB), which may take some time depending on your internet connection.</p>
    </li>
    <li>Verify the model installation:
      <pre><code>ollama list</code></pre>
      <p>You should see "phi:3-mini" in the list of installed models.</p>
    </li>
  </ol>

  <div style="background-color: #ffeeee; padding: 10px; border-left: 3px solid #ff5555; margin-top: 10px;">
    <strong>⚠️ Note:</strong> The Phi-3 Mini model requires at least 8GB of RAM to run efficiently. 16GB or more is recommended for optimal performance.
  </div>
</div>

### Running the CV Analyzer

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Make sure Ollama is running in the background. You can start it by running the Ollama application or using the command:
      <pre><code>ollama serve</code></pre>
    </li>
    <li>Navigate to the directory containing the CV analyzer script:
      <pre><code>cd job-404</code></pre>
    </li>
    <li>Run the CV analyzer script:
      <pre><code>python cv.py</code></pre>
      <p>This will start the CV Analyzer service, which will listen for requests from the main application.</p>
    </li>
  </ol>

  <div style="background-color: #e8f4fd; padding: 10px; border-left: 3px solid #0366d6; margin-top: 10px;">
    <strong>💡 Important:</strong> The CV Analyzer must be run separately from the main application. Make sure to keep the Python script running in a separate terminal window while using the resume analysis feature.
  </div>

  <h4>Testing the CV Analyzer</h4>
  <p>You can test if the CV Analyzer is working correctly by sending a test job description and resume text to the script when prompted.</p>
</div>

## Admin Panel

The Admin Panel allows administrators to manage job listings, courses, and user accounts.

### Accessing the Admin Panel

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <ol>
    <li>Navigate to <code>http://localhost:5173/admin</code> in your web browser.</li>
    <li>Log in using administrator credentials:
      <ul>
        <li>Username: admin</li>
        <li>Default Password: admin123 (change this after first login)</li>
      </ul>
    </li>
  </ol>

  <div style="background-color: #ffeeee; padding: 10px; border-left: 3px solid #ff5555; margin-top: 10px;">
    <strong>⚠️ Security Note:</strong> For production deployment, always change the default admin password and consider implementing additional security measures like IP restrictions and two-factor authentication.
  </div>
</div>

### Managing Job Listings

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>Adding a New Job</h4>
  <ol>
    <li>In the Admin Panel, navigate to the "Jobs" section.</li>
    <li>Click the "Add New Job" button.</li>
    <li>Fill in the job details:
      <ul>
        <li>Title</li>
        <li>Company</li>
        <li>Job Type</li>
        <li>Location</li>
        <li>Description</li>
        <li>Requirements</li>
        <li>Responsibilities</li>
        <li>Salary (optional)</li>
      </ul>
    </li>
    <li>Click "Save" to add the job to the database.</li>
  </ol>

  <h4>Editing or Deleting Jobs</h4>
  <ol>
    <li>Find the job in the job listings table.</li>
    <li>Click the "Edit" button to modify the job details or "Delete" to remove the job.</li>
    <li>For editing, make your changes and click "Save".</li>
    <li>For deleting, confirm the deletion when prompted.</li>
  </ol>
</div>

### Managing Courses

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>Adding a New Course</h4>
  <ol>
    <li>Navigate to the "Courses" section in the Admin Panel.</li>
    <li>Click the "Add New Course" button.</li>
    <li>Fill in the course details:
      <ul>
        <li>Title</li>
        <li>Provider</li>
        <li>Platform</li>
        <li>Duration</li>
        <li>Level</li>
        <li>Description</li>
        <li>URL (optional)</li>
      </ul>
    </li>
    <li>Click "Save" to add the course to the database.</li>
  </ol>

  <h4>Editing or Deleting Courses</h4>
  <ol>
    <li>Find the course in the courses table.</li>
    <li>Click the "Edit" button to modify the course details or "Delete" to remove the course.</li>
    <li>For editing, make your changes and click "Save".</li>
    <li>For deleting, confirm the deletion when prompted.</li>
  </ol>
</div>

### User Management

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>Viewing User Information</h4>
  <ol>
    <li>Navigate to the "Users" section in the Admin Panel.</li>
    <li>Browse the list of registered users.</li>
    <li>Click on a username to view detailed information about that user.</li>
  </ol>

  <h4>Managing User Accounts</h4>
  <ol>
    <li>To disable a user account, click the "Disable" button next to the user.</li>
    <li>To reset a user's password, click the "Reset Password" button and follow the prompts.</li>
    <li>To delete a user account, click the "Delete" button and confirm the deletion.</li>
  </ol>

  <div style="background-color: #ffeeee; padding: 10px; border-left: 3px solid #ff5555; margin-top: 10px;">
    <strong>⚠️ Warning:</strong> Deleting a user account will permanently remove all associated data, including resume information and application history.
  </div>
</div>

## Database Schema

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <p>The JOB-404 application uses the following database tables:</p>

  <h4>userinfo</h4>
  <pre><code>CREATE TABLE userinfo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</code></pre>

  <h4>resumes</h4>
  <pre><code>CREATE TABLE resumes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(100),
  phone VARCHAR(20),
  houseno VARCHAR(20),
  street VARCHAR(100),
  city VARCHAR(50),
  education TEXT,
  experience TEXT,
  skills TEXT,
  FOREIGN KEY (username) REFERENCES userinfo(username)
);</code></pre>

  <h4>jobs</h4>
  <pre><code>CREATE TABLE jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  company VARCHAR(100) NOT NULL,
  job_type VARCHAR(50) NOT NULL,
  location VARCHAR(100) NOT NULL,
  description TEXT,
  requirements TEXT,
  responsibilities TEXT,
  salary VARCHAR(50),
  posted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</code></pre>

  <h4>courses</h4>
  <pre><code>CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  provider VARCHAR(100) NOT NULL,
  platform VARCHAR(100) NOT NULL,
  duration VARCHAR(50),
  level VARCHAR(50),
  description TEXT,
  url VARCHAR(255),
  added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</code></pre>
</div>

## API Documentation

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>Authentication Endpoints</h4>

  <h5>Register User</h5>
  <pre><code>POST /signupdata
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}</code></pre>

  <h5>Login User</h5>
  <pre><code>POST /logindata
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}</code></pre>

  <h4>Resume Endpoints</h4>

  <h5>Save Resume Data</h5>
  <pre><code>POST /resumedata
Content-Type: application/json

{
  "username": "string",
  "firstname": "string",
  "lastname": "string",
  "email": "string",
  "phone": "string",
  "houseno": "string",
  "street": "string",
  "city": "string",
  "education": "string",
  "experience": "string",
  "skills": "string"
}</code></pre>

  <h5>Get Profile Data</h5>
  <pre><code>GET /api/profiledata/:username</code></pre>

  <h4>Job Endpoints</h4>

  <h5>Get Job Listings</h5>
  <pre><code>GET /api/jobsdata?jobType=string&location=string&company=string&search=string</code></pre>

  <h5>Get Job Details</h5>
  <pre><code>GET /api/jobsdata/:id</code></pre>

  <h5>Get Filter Options</h5>
  <pre><code>GET /api/filter-options</code></pre>

  <h4>Course Endpoints</h4>

  <h5>Get Courses</h5>
  <pre><code>GET /api/coursesdata</code></pre>

  <h5>Get Course Details</h5>
  <pre><code>GET /api/coursesdata/:id</code></pre>

  <h5>Get Course Filter Options</h5>
  <pre><code>GET /api/courses-filter-options</code></pre>

  <h4>CV Analyzer Interface</h4>

  <p>The CV Analyzer runs as a separate Python script and communicates with the main application. The interface is handled internally through APIs exposed by the server.</p>
</div>

## Contributing Guidelines

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
  <h4>Coding Standards</h4>
  <ul>
    <li>Follow the existing code style and structure.</li>
    <li>Use meaningful variable and function names.</li>
    <li>Write comments for complex logic.</li>
    <li>Include JSDoc comments for functions.</li>
  </ul>

  <h4>Pull Request Process</h4>
  <ol>
    <li>Fork the repository and create a new branch for your feature or bugfix:
      <pre><code>git checkout -b feature/your-feature-name</code></pre>
    </li>
    <li>Make your changes and commit them with descriptive commit messages:
      <pre><code>git commit -m "Add: brief description of the change"</code></pre>
    </li>
    <li>Push your branch to your fork:
      <pre><code>git push origin feature/your-feature-name</code></pre>
    </li>
    <li>Create a Pull Request against the main branch of the original repository.</li>
    <li>Ensure your PR description clearly describes the changes and includes any relevant issue numbers.</li>
  </ol>

  <h4>Testing</h4>
  <ul>
    <li>Add appropriate tests for new features.</li>
    <li>Ensure all existing tests pass before submitting a PR.</li>
    <li>Run tests using:
      <pre><code>npm test</code></pre>
    </li>
  </ul>
</div>

---

<div align="center">
  <p>© 2025 JOB-404 | All Rights Reserved | Created by laserXnext</p>
  <p>Last Updated: 2025-04-17 08:24:36 (UTC)</p>
  <p>
    <a href="https://github.com/laserXnext/Job-404">GitHub</a> •
    <a href="mailto:laserxnext@gmail.com">Contact</a>
  </p>
</div>

import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "noideawhatimdoing";
const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306, 
  user: 'root',
  password: 'laserX+20',
  database: 'job404',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});


// Signup Route
app.post("/signupdata", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const checkQuery = "SELECT * FROM userinfo WHERE username = ? OR email = ?";
  db.query(checkQuery, [username, email], (err, results) => {
    if (err) {
      console.error("Error checking existing user:", err);
      return res.status(500).send("An error occurred");
    }

    if (results.length > 0) {
      return res.status(409).send("Username or email already exists");
    }

    const insertQuery = "INSERT INTO userinfo (username, email, password) VALUES (?, ?, ?)";
    db.query(insertQuery, [username, email, password], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).send("An error occurred");
      }
      res.status(200).send("User registered successfully");
    });
  });
});


// Resume Data Endpoint
app.post("/resumedata", (req, res) => {
  const resumeData = req.body;
  
  if (!resumeData.username) {
    return res.status(400).json({ error: "Username required" });
  }

  const query = `
    INSERT INTO resumes 
    (username, firstname, lastname, email, phone, houseno, street, city, education, experience, skills)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
    firstname = VALUES(firstname),
    lastname = VALUES(lastname),
    email = VALUES(email),
    phone = VALUES(phone),
    houseno = VALUES(houseno),
    street = VALUES(street),
    city = VALUES(city),
    education = VALUES(education),
    experience = VALUES(experience),
    skills = VALUES(skills)
  `;

  const values = [
    resumeData.username,
    resumeData.firstname,
    resumeData.lastname,
    resumeData.email,
    resumeData.phone,
    resumeData.houseno,
    resumeData.street,
    resumeData.city,
    resumeData.education,
    resumeData.experience,
    resumeData.skills,
  ];

  db.query(query, values, (err) => {
    if (err) {
      console.error("Resume save error:", err);
      return res.status(500).json({ error: "Failed to save resume" });
    }
    res.status(200).json({ message: "Resume saved successfully" });
  });
});


// Login Route
app.post("/logindata", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const query = "SELECT * FROM userinfo WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error during login:", err);
      return res.status(500).send("An error occurred");
    }

    if (results.length > 0) {
      const token = jwt.sign({ username: results[0].username }, SECRET_KEY, { expiresIn: "1h" });
      res.status(200).json({ message: "Login successful", username: results[0].username, token });
    } else {
      res.status(401).send("Invalid username or password");
    }
  });
});

//! get data section

//? Job Details Route

app.get("/api/jobsdata", (req, res) => {
  const { jobType, location, company, search } = req.query;

  let query = "SELECT id, title, company, job_type, location FROM jobs WHERE 1=1";
  const queryParams = [];

  if (jobType) {
      query += " AND job_type = ?";
      queryParams.push(jobType);
  }

  if (location) {
      query += " AND location = ?";
      queryParams.push(location);
  }

  if (company) {
      query += " AND company = ?";
      queryParams.push(company);
  }

  if (search) {
      query += " AND (title LIKE ? OR company LIKE ? OR location LIKE ?)";
      const searchPattern = `%${search}%`;
      queryParams.push(searchPattern, searchPattern, searchPattern);
  }

  db.query(query, queryParams, (err, results) => {
      if (err) {
          console.error("Error fetching jobs:", err);
          res.status(500).send("An error occurred while fetching jobs.");
      } else {
          res.json(results);
      }
  });
});

//? Job Details by id Route

app.get("/api/jobsdata/:id", (req, res) => {
  const jobId = req.params.id;
  const query = "SELECT * FROM jobs WHERE id = ?";
  db.query(query, [jobId], (err, results) => {
      if (err) {
          console.error(err);
          res.status(500).send("An error occurred while fetching job details.");
      } else if (results.length === 0) {
          res.status(404).send("Job not found.");
      } else {
          res.json(results[0]);
      }
  });
});


//? Filter Options Route

app.get("/api/filter-options", (req, res) => {
  const queries = {
      jobTypes: "SELECT DISTINCT job_type FROM jobs",
      locations: "SELECT DISTINCT location FROM jobs",
      companies: "SELECT DISTINCT company FROM jobs",
  };

  const promises = Object.entries(queries).map(([key, query]) => {
      return new Promise((resolve, reject) => {
          db.query(query, (err, results) => {
              if (err) {
                  reject(err);
              } else {
                  resolve({ [key]: results.map(row => Object.values(row)[0]) });
              }
          });
      });
  });

  Promise.all(promises)
      .then(results => {
          const response = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
          res.json(response);
      })
      .catch(err => {
          console.error("Error fetching filter options:", err);
          res.status(500).send("An error occurred while fetching filter options.");
      });
});

//? Get all courses data

app.get("/api/coursesdata", (req, res) => {
  const query = "SELECT id, title, provider, platform, duration, level FROM courses";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching courses.");
    } else {
      res.json(results);
    }
  });
});

//? Get filter options for courses

app.get("/api/courses-filter-options", (req, res) => {
  const queries = {
    providers: "SELECT DISTINCT provider FROM courses",
    platforms: "SELECT DISTINCT platform FROM courses",
    levels: "SELECT DISTINCT level FROM courses",
  };

  const promises = Object.entries(queries).map(([key, query]) => {
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve({ [key]: results.map(row => Object.values(row)[0]) });
        }
      });
    });
  });

  Promise.all(promises)
    .then(results => {
      const response = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      res.json(response);
    })
    .catch(err => {
      console.error("Error fetching filter options:", err);
      res.status(500).send("An error occurred while fetching filter options.");
    });
});

//? Get course details by ID

app.get("/api/coursesdata/:id", (req, res) => {
  const courseId = req.params.id;
  const query = "SELECT * FROM courses WHERE id = ?";
  db.query(query, [courseId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching course details.");
    } else if (results.length === 0) {
      res.status(404).send("Course not found.");
    } else {
      res.json(results[0]);
    }
  });
});

//? get profile data by username

app.get("/api/profiledata/:username", (req, res) => {
  const username = req.params.username;
  console.log("Fetching profile for:", username);

  if (!username) {
    return res.status(400).send("Username parameter is required.");
  }

  const query = "SELECT * FROM resumes WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send("An error occurred while fetching profile details.");
    } 

    if (results.length === 0) {
      return res.status(404).send("Profile not found.");
    }

    console.log("Profile found:", results[0]);
    res.json(results[0]);
  });
});

//? get user data

app.get("/api/userdata", (req, res) => {
  const query = "SELECT id,username,email,date_account_made FROM userinfo";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching user data.");
    } else {
      res.json(results);
    }
  });
});


//! delete section

//? delete user data by id

app.delete("/api/deleteuser/:id", (req, res) => {
  const userId = req.params.id;

  const getUsernameQuery = "SELECT username FROM users WHERE id = ?";
  const deleteUserQuery = "DELETE FROM users WHERE id = ?";
  const deleteResumeQuery = "DELETE FROM resumes WHERE username = ?";

  db.query(getUsernameQuery, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({message:"Error fetching user data."});
    }
    if (result.length === 0) {
      return res.status(404).json({message:"User not found."});
    }
    const username = result[0].username;

    db.query(deleteResumeQuery, [username], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({message:"Error deleting resume data."});
      }
      db.query(deleteUserQuery, [userId], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({message:"Error deleting user."});
        }
        res.status(200).json({message:"User and associated resume deleted successfully."});
      });
    });
  });
});

//? delete course data by id

app.delete("/api/deletecourse/:id", (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM courses WHERE id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({message:"An error occurred while deleting course data."});
    } else {
      res.status(200).json({ message: "Course deleted successfully" });
    }
  });
});

//? delete job data by id
app.delete("/api/deletejob/:id", (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM jobs WHERE id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({message:"An error occurred while deleting job data."});
    } else {
      res.status(200).json({message:"job deleted successfully"});
    }
  });
});

//!edit seection

//? edit course data by id

app.put("/api/editcourse/:id", (req, res) => {
  const courseId = req.params.id;
  const courseData = req.body;

  const query = `
    UPDATE courses 
    SET title = ?, provider = ?, platform = ?, duration = ?, level = ?, description = ? , enrollment_link = ?
    WHERE id = ?`;

  const values = [
    courseData.title,
    courseData.provider,
    courseData.platform,
    courseData.duration,
    courseData.level,
    courseData.description,
    courseData.enrollment_link,
    courseId,
  ];

  db.query(query, values, (err) => {
    if (err) {
      console.error("Course edit error:", err);
      return res.status(500).json({ error: "Failed to edit course" });
    }
    res.status(200).json({ message: "Course edited successfully" });
  });
});

//? edit job data by id

app.put("/api/editjob/:id", (req, res) => {
  const jobId = req.params.id;
  const jobData = req.body;

  const query = `
    UPDATE jobs 
    SET title = ?, company = ?, location = ?, job_type = ?, description = ? , requirements = ?, salary_range = ?, application_link =?
    WHERE id = ?`;

  const values = [
    jobData.title,
    jobData.company,
    jobData.location,
    jobData.job_type,
    jobData.description,
    jobData.requirements,
    jobData.salary_range,
    jobData.application_link,
    jobId,
  ];

  db.query(query, values, (err) => {
    if (err) {
      console.error("Job edit error:", err);
      return res.status(500).json({ error: "Failed to edit job" });
    }
    res.status(200).json({ message: "Job edited successfully" });
  });
});

//? edit user profile by username

app.put("/api/edituser/:username", (req, res) => {
  const userName = req.params.username;
  const userData = req.body;

  if (!userName) {
    return res.status(400).json({ error: "Username is required" });
  }

  const query = `
    UPDATE resumes 
    SET firstname = ?, lastname = ?, email = ?, phone = ?, houseno = ?, street = ?, city = ?, education = ?, experience = ?, skills = ?
    WHERE username = ?`;

  const values = [
    userData.firstname,
    userData.lastname,
    userData.email,
    userData.phone,
    userData.houseno,
    userData.street,
    userData.city,
    userData.education,
    userData.experience,
    userData.skills,
    userName,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("User edit error:", err);
      return res.status(500).json({ error: "Failed to edit User" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User edited successfully" });
  });
});

//!Insert seection

//? insert a job

app.post("/api/insertjobdata", (req, res) => {
  const jobData = req.body;
  const query = `
    INSERT INTO jobs 
    (title, company, location, job_type, description, requirements, salary_range, application_link)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
    title = VALUES(title),
    company = VALUES(company),
    location = VALUES(location),
    job_type = VALUES(job_type),
    description = VALUES(description),
    requirements = VALUES(requirements),
    salary_range = VALUES(salary_range),
    application_link = VALUES(application_link);
  `;

  const values = [
    jobData.title,
    jobData.company,
    jobData.location,
    jobData.job_type,
    jobData.description,
    jobData.requirements,
    jobData.salary_range,
    jobData.application_link,
  ];

  db.query(query, values, (err) => {
    if (err) {
      console.error("Job save error:", err);
      return res.status(500).json({ error: "Failed to save job" });
    }
    res.status(200).json({ message: "Job saved successfully" });
  });
});


//? insert a course
app.post("/api/insertcourse", (req, res) => {
  const courseData = req.body;
  const query = `
    INSERT INTO courses 
    (title, provider, platform, duration, level, description, enrollment_link, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, NOW())  
    ON DUPLICATE KEY UPDATE 
    title = VALUES(title),
    provider = VALUES(provider),
    platform = VALUES(platform),
    duration = VALUES(duration),
    level = VALUES(level),
    description = VALUES(description),
    enrollment_link = VALUES(enrollment_link),
    created_at = NOW();
`;
  const values = [
    courseData.title,
    courseData.provider,
    courseData.platform,
    courseData.duration,
    courseData.level,
    courseData.description,
    courseData.enrollment_link,
  ];
  db.query(query, values, (err) => {
    if (err) {
      console.error("Course save error:", err);
      return res.status(500).json({ error: "Failed to save course" });
    }
    res.status(200).json({ message: "Course saved successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

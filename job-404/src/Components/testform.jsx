import { useState } from "react";

function TestForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [matchingJobs, setMatchingJobs] = useState([]);

  const getSkills = async () => {
    const response = await fetch("http://127.0.0.1:5000/get_skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ job_title: jobTitle }),
    });
    const data = await response.json();
    setSkills(data.skills || []);
  };

  const findJobs = async () => {
    const response = await fetch("http://127.0.0.1:5000/find_jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills: skillInput }),
    });
    const data = await response.json();
    setMatchingJobs(data.matching_jobs || []);
  };

  return (
    <div>
      <h1>Job & Skill Matching</h1>

      <div>
        <h2>Find Skills for Job</h2>
        <input
          type="text"
          placeholder="Enter job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <button onClick={getSkills}>Get Skills</button>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Find Jobs for Skills</h2>
        <input
          type="text"
          placeholder="Enter skills (comma-separated)"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <button onClick={findJobs}>Find Jobs</button>
        <ul>
          {matchingJobs.map((job, index) => (
            <li key={index}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TestForm;

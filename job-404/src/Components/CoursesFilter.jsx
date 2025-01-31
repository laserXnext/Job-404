import React, { useState, useEffect } from "react";
import "../CSS/filter.css";

const CoursesFilter = ({ onFilterChange }) => {
  const [providers, setProviders] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [levels, setLevels] = useState([]);

  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  useEffect(() => {
    fetchFilterOptions();
  }, []);

  const fetchFilterOptions = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/courses-filter-options");
      const data = await response.json();
      setProviders(data.providers);
      setPlatforms(data.platforms);
      setLevels(data.levels);
    } catch (error) {
      console.error("Error fetching filter options:", error);
    }
  };

  const handleFilterChange = () => {
    if (onFilterChange) {
      onFilterChange({
        provider: selectedProvider,
        platform: selectedPlatform,
        level: selectedLevel,
      });
    } else {
      console.error("onFilterChange function is not defined.");
    }
  };

  return (
    <div className="filter-container">
      <select value={selectedProvider} onChange={(e) => setSelectedProvider(e.target.value)}>
        <option value="">All Providers</option>
        {providers.map((provider, index) => (
          <option key={index} value={provider}>
            {provider}
          </option>
        ))}
      </select>

      <select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)}>
        <option value="">All Platforms</option>
        {platforms.map((platform, index) => (
          <option key={index} value={platform}>
            {platform}
          </option>
        ))}
      </select>

      <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
        <option value="">All Levels</option>
        {levels.map((level, index) => (
          <option key={index} value={level}>
            {level}
          </option>
        ))}
      </select>

      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
};

export default CoursesFilter;

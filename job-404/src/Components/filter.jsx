import React, { useState, useEffect } from "react";
import "../CSS/filter.css";

const Filter = ({ onFilterChange }) => {
    const [jobTypes, setJobTypes] = useState([]);
    const [locations, setLocations] = useState([]);
    const [companies, setCompanies] = useState([]);

    const [selectedJobType, setSelectedJobType] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");

    useEffect(() => {
        fetchFilterOptions();
    }, []);

    const fetchFilterOptions = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/filter-options");
            const data = await response.json();
            setJobTypes(data.jobTypes);
            setLocations(data.locations);
            setCompanies(data.companies);
        } catch (error) {
            console.error("Error fetching filter options:", error);
        }
    };

    const handleFilterChange = () => {
        onFilterChange({
            jobType: selectedJobType,
            location: selectedLocation,
            company: selectedCompany,
        });
    };

    return (
        <div className="filter-container">
            <select value={selectedJobType} onChange={(e) => setSelectedJobType(e.target.value)}>
                <option value="">All Job Types</option>
                {jobTypes.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
            </select>

            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                <option value="">All Locations</option>
                {locations.map((loc, index) => (
                    <option key={index} value={loc}>
                        {loc}
                    </option>
                ))}
            </select>

            <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                <option value="">All Companies</option>
                {companies.map((comp, index) => (
                    <option key={index} value={comp}>
                        {comp}
                    </option>
                ))}
            </select>

            <button onClick={handleFilterChange}>Filter</button>
        </div>
    );
};

export default Filter;

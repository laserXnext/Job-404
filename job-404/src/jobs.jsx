import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/header_job";
import Searchbar from "./Components/searchbar";
import Footer from "./Components/footer";
import Filter from "./Components/filter";
import JobAd from "./Components/JobAd";

const Jobs = () => {
    const [filters, setFilters] = useState({});
    const [search, setSearch] = useState("");

    const handleFilterChange = (newFilters) => {
        setFilters({ ...newFilters, search });
    };

    const handleSearchChange = (searchTerm) => {
        setSearch(searchTerm);
        setFilters((prevFilters) => ({ ...prevFilters, search: searchTerm }));
    };

    return (
        <div>
            <Navbar />
            <Header />
            <Searchbar onSearch={handleSearchChange} />
            <Filter onFilterChange={handleFilterChange} />
            <JobAd filters={filters} />
            <Footer />
        </div>
    );
};

export default Jobs;

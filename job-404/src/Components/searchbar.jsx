import { useState } from "react";
import "../CSS/searchbar.css";

function Searchbar({ onSearch }) {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        onSearch(search);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search by title"
                className="searchbar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="search-btn" onClick={handleSearch}>
                Search <i className="uil uil-search" />
            </button>
        </div>
    );
}

export default Searchbar;

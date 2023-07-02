
import React, { useState } from 'react';
import './Style.css'

const SearchBar = () => {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Job: ${job}, Location: ${location}, Category: ${category}`);
  };

  return (
    <form className="search-bar">
      <div className="form-group">
        <input
          type="text" className="form-control" placeholder="Search "value={job} onChange={handleJobChange}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="Location">Location</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          
        </select>
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Category</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Sales">Sales</option>
          <option value="Design">Design</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default SearchBar;

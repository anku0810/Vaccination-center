import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './Slot.css';

function Slot() {
  const [centers, setCenters] = useState([]);
  const [area, setArea] = useState('');
  const [filterBySlots, setFilterBySlots] = useState(false);
  const [slotsFilter, setSlotsFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [centersPerPage] = useState(20); // Change to 25 centers per page
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const res = await axios.get('http://localhost:8081/Centering');
        setCenters(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCenters();
  }, []);

  const handleSearch = () => {
    let filtered = centers.filter(center =>
      center.center_name.toLowerCase().includes(area.toLowerCase()) ||
      center.Address.toLowerCase().includes(area.toLowerCase())
    );
    if (filterBySlots) {
      filtered = filtered.filter(center => center.slots > 0);
    }
    if (slotsFilter !== '') {
      filtered = filtered.filter(center => center.slots >= parseInt(slotsFilter));
    }
    if (selectedState !== '') {
      filtered = filtered.filter(center => center.zone.toLowerCase() === selectedState.toLowerCase());
    }
    setCenters(filtered);
    setCurrentPage(1); // Reset page to first page on search
  };

  const toggleFilterBySlots = () => {
    setFilterBySlots(!filterBySlots);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    const sortedCenters = [...centers].sort((a, b) => {
      return e.target.value === 'asc' ? a.slots - b.slots : b.slots - a.slots;
    });
    setCenters(sortedCenters);
  };

  const clearSearch = () => {
    setArea('');
    setSlotsFilter('');
    setSelectedState('');
    // Refetch all centers from the server
    axios.get('http://localhost:8081/Centering')
      .then(res => {
        setCenters(res.data);
      })
      .catch(err => console.log(err));
    setCurrentPage(1); // Reset page to first page on clear
  };

  // Logic for pagination
  const indexOfLastCenter = currentPage * centersPerPage;
  const indexOfFirstCenter = indexOfLastCenter - centersPerPage;
  const currentCenters = centers.slice(indexOfFirstCenter, indexOfLastCenter);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const states = Array.from(new Set(centers.map(center => center.zone.toLowerCase())));

  return (
    <div className="App">
      <Navbar />
      <br />
      <h1 className="topic"><strong>Search Your Nearest Vaccination Centers</strong></h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter Center Name or Address"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Minimum Slots Available"
          value={slotsFilter}
          onChange={(e) => setSlotsFilter(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className='search123'>Search</button>
        <button type="button" onClick={clearSearch} className='clear123'>Clear</button>
        <button type="button" onClick={toggleFilterBySlots} className='filtering'>
          {filterBySlots ? "Disable Filter" : "Filter by Slots"}
        </button>
        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className='state-dropdown'>
          <option value="">Filter by Region</option>
          {states.map((state, index) => (
            <option key={index} value={state}>{state.toUpperCase()}</option>
          ))}
        </select>
        <select value={sortOrder} onChange={handleSortChange} className='sorting'>
          <option value="asc">Sort by Slots (Asc)</option>
          <option value="desc">Sort by Slots (Desc)</option>
        </select>
      </div>
      <div className="centers-container">
        {currentCenters.map(center => (
          <div key={center.id} className="center-card">
            <div className="center-details">
              <h2><strong>{center.center_name}</strong></h2>
              <p><strong>Address: </strong> {center.Address}</p>
              <p><i><strong>Slots Available: </strong>{center.slots}</i></p>
              <p><strong>Date: </strong>{center.Idate}</p>
              <p><strong>Region: </strong>{center.zone}</p>
            </div>
            <div className="book-slot">
              <Link to='/slotreg'>
                <button
                  className="button"
                  disabled={center.slots === 0}
                  // Add onClick event handler if needed
                >
                  Book Slot
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>


      {/* Pagination */}
      <div className="pagination">
        <button
          className='btn-prev'
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(Math.ceil(centers.length / centersPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? 'pages-btn active' : 'pages-btn'}
          >
            {number + 1}
          </button>
        ))}
        <button
          className='btn-next'
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(centers.length / centersPerPage)}
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default Slot;

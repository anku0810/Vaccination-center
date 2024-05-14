import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Update.css"; // Import your CSS file

const Update = () => {
  const [cent, setCenter] = useState({
    center_name: "",
    Address: "",
    slots: "",
    Idate: "",
    zone: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const CenterId= location.pathname.split("/")[2];
  const handleChange = (e) => {
    setCenter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick =(e) => {
    e.preventDefault();
    try {
      console.log("update book");
      axios.post(`http://localhost:8081/Centering/${CenterId}`, cent);
      navigate("/Centers");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="backing123">
    <div className="main-container">
      <div className="form-container">
        <h1 className="form-title">Add New Center</h1>
        <form className="center-form" onSubmit={handleClick}>
          <div className="input-group">
            <label htmlFor="center_name">Center Name:</label>
            <input
              type="text"
              id="center_name"
              name="center_name"
              placeholder="Enter Center Name"
              value={cent.center_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Address">Address:</label>
            <input
              type="text"
              id="Address"
              name="Address"
              placeholder="Enter Address"
              value={cent.Address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="slots">Slots:</label>
            <input
              type="number"
              id="slots"
              name="slots"
              placeholder="Enter number of slots"
              value={cent.slots}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Idate">Date:</label>
            <input
              type="date"
              id="Idate"
              name="Idate"
              value={cent.Idate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zone">Zone:</label>
            <input
              type="text"
              id="zone"
              name="zone"
              value={cent.zone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Center
          </button>
          {error && <p className="error-message">Something went wrong!</p>}
        </form>
        <button className="see-all-btn">
          <Link to="/Centers" className="see-all-link">
            See all centers
          </Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Update;

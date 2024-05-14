import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Add.css";

const Add = () => {
  const [cent, setCenter] = useState({
    center_name: "",
    Address: "",
    slots: "",
    Idate: "",
    zone:"",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCenter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/Centering", cent);
      console.log("Data added successfully");
      navigate("/Centers");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="backing">
    <div className="container">
      <div className="form-container">
        <h1 className="title">Add New Center</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
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
          <button type="submit" className="btn5">
            Add Center
          </button>
          {error && <p className="error">Something went wrong!</p>}
        </form>
        <button className="booking5">
          <Link to="/Centers" className="see-all-books">
            See all centers
          </Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Add;

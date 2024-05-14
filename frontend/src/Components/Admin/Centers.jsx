import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Centers.css";

const Centers = () => {
  const [centers, setCenters] = useState([]);

  const fetchAllCenters = async () => {
    try {
      const res = await axios.get("http://localhost:8081/Centering");
      setCenters(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllCenters();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/Centering/${id}`);
      fetchAllCenters(); // Refresh the center list after deletion
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    // Logic to handle logout
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div>
      <div className="navbar">
        <h1 className="navbar-title">Welcome to the Admin Page</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="admin-dashboard">
        <h1 className="title">Admin Dashboard</h1>
        <div className="add-btn-container">
        <button className="add-btn">
          <Link to="/Add" className="add-link">
            Add Center
          </Link>
        </button>
        <br />
        </div>
        <div className="centers-container">
          {centers.map((center) => (
            <div key={center.id} className="center">
              <h2 className="center-title">Center Name : {center.center_name}</h2>
              <p className="center-desc">
                <strong>Address: </strong>
                {center.Address}
              </p>
              <p className="center-desc">
                <strong>Slots : </strong> {center.slots}
              </p>
              <p className="center-desc">
                <strong>Date : </strong>
                {center.Idate}
              </p>
              <p className="center-zone">
                <strong>Zone:  </strong>
                {center.zone}
              </p>
              <div className="action-buttons">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(center.id)}
                >
                  Delete
                </button>
                <button className="update-btni">
                  <Link to={`/Update/${center.id}`} className="update-link">
                    Update
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Centers;

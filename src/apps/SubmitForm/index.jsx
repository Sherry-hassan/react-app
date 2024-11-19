import React, { useState, useEffect } from "react";
import "../SubmitForm/submit.css";
import carImg from "../SubmitForm/images/car.jpg";
import axios from "axios"; 

const SubmitForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users"); 
        setUserData(response.data); 
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/users", formData); 
      setUserData((prev) => [...prev, response.data]);
      setFormData({ name: "", description: "", price: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", description: "", price: "" });
    setShowModal(false);
  };

  return (
    <>
      <header>
        <h1>User Details</h1>
        <button
          className="button_createitem"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Create Item
        </button>
      </header>
      <div className="user-data mt-3">
        {userData.map((user) => (
          <div key={user._id} className="card p-3 me-2">
            <img
              src={carImg}
              alt="User Image"
              className="user-image mb-3"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Description:</strong> {user.description}</p>
            <p><strong>Price:</strong> ${user.price}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <>
          <div className="overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal_container">
            <h2>Shehroz Hassan</h2>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                className="desc"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                className="num"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <p>Your data was submitted successfully</p>
            <div className="button-container mt-3">
              <button
                type="button"
                className="btn btn-secondary cancelBtn me-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success submitBtn"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SubmitForm;








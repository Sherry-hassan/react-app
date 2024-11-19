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
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (editingUserId) {
      try {
        const response = await axios.put(
          `http://localhost:3001/api/users/${editingUserId}`,
          formData
        );
        const updatedUser = response.data;
        setUserData((prev) =>
          prev.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
          )
        );
        setFormData({ name: "", description: "", price: "" });
        setShowModal(false);
        setEditingUserId(null);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/users",
          formData
        );
        const newUser = response.data;
        setUserData((prev) => [...prev, newUser]);
        setFormData({ name: "", description: "", price: "" });
        setShowModal(false);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", description: "", price: "" });
    setShowModal(false);
    setEditingUserId(null);
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setFormData({
      name: user.name,
      description: user.description,
      price: user.price,
    });
    setShowModal(true);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/users/${userId}`
      );
      if (response.status === 200) {
        setUserData((prev) => prev.filter((user) => user._id !== userId));
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
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
          <div key={user._id} className="card p-3 mb-3">
            <img
              src={carImg}
              alt="User Image"
              className="user-image mb-3"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Description:</strong> {user.description}
            </p>
            <p>
              <strong>Price:</strong> ${user.price}
            </p>
            <button
              className="btn btn-primary me-2 editBtn"
              onClick={() => handleEdit(user)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger deleteBtn"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <>
          <div className="overlay" onClick={handleCancel}></div>
          <div className="modal_container">
            <h2>{editingUserId ? "Edit User" : "Create User"}</h2>
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
                {editingUserId ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SubmitForm;
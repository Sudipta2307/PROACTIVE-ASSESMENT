import React from "react";
import "./DoctorSignup.css";
import provital from "../assets/provital.jpg";


const DoctorSignup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Doctor signup submitted!");
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <img src={provital} alt="ProVital Logo" />
        <h1>Doctor Signup</h1>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            placeholder="Enter your specialization"
            required
          />
        </div>
        <button className="signup-button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default DoctorSignup;

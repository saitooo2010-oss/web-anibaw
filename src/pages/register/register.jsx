import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="register">
        <h1>Register</h1>
        <form className="register-form">
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default Register;